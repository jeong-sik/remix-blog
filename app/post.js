import path from "path"
import fs from "fs/promises"
import parseFrontMatter from "front-matter"
import invariant from "tiny-invariant"
import { marked } from "marked"
const postsPath = path.join(__dirname, "../..", "posts")

function isValidPostAttributes(attributes) {
  return attributes?.title
}

export async function getPost(slug) {
  const filepath = path.join(postsPath, slug + ".mdx")
  const file = await fs.readFile(filepath)
  const { attributes, body } = parseFrontMatter(file.toString())
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`
  )
  const html = marked(body)
  return {
    slug,
    html,
    title: attributes.title,
    tags: attributes.tags,
    date: attributes.date,
  }
}
export async function getPosts() {
  const postOrSeriesBasenames = await fs.readdir(`${__dirname}/../../posts`, {
    withFileTypes: true,
  })

  const posts = await Promise.all(
    postOrSeriesBasenames.map(async (dirent) => {
      const file = await fs.readFile(
        path.join(`${__dirname}/../../posts`, dirent.name)
      )
      const { attributes } = parseFrontMatter(file.toString())
      return {
        slug: dirent.name.replace(/\.mdx/, ""),
        title: attributes.title,
        tag: attributes.tags,
        date: attributes.date,
      }
    })
  )

  return posts
}

export async function getRecentPost() {
  const postOrSeriesBasenames = await fs.readdir(`${__dirname}/../../posts`, {
    withFileTypes: true,
  })

  const posts = await Promise.all(
    postOrSeriesBasenames.map(async (dirent) => {
      const file = await fs.readFile(
        path.join(`${__dirname}/../../posts`, dirent.name)
      )
      const { attributes, body } = parseFrontMatter(file.toString())
      const html = marked(body)
      return {
        slug: dirent.name.replace(/\.mdx/, ""),
        title: attributes.title,
        tag: attributes.tags,
        date: attributes.date,
        html: html,
      }
    })
  )

  return posts[0]
}
