import { Link, useLoaderData } from "remix"

import { getPosts } from "~/post"

export const loader = async () => {
  return getPosts()
}

export default function Posts() {
  const posts = useLoaderData()

  return (
    <div className="p-4 m-4 text-[#ccc]">
      <h1 className="text-[30px] font-bold text-[#rrr]">글</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
