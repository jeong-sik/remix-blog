import { Link, useLoaderData } from "remix"
import { format } from "date-fns"

import invariant from "tiny-invariant"

import { getPost } from "~/post"

export const loader = async ({ params }) => {
  invariant(params.slug, "expected params.slug")
  return getPost(params.slug)
}

export default function PostSlug() {
  const post = useLoaderData()

  return (
    <article className="flex flex-col p-5 font-batang text-[#ccc] break-keep-all whitespace-pre-wrap">
      <h2 className="text-[28px] font-bold text-white">{post.title}</h2>

      <div
        className="mt-4 text-lg"
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
      <p className="text-[20px] font-bold text-white text-right">
        {format(new Date(post.date), "yyyy년 M월 d일")}
      </p>
      <Link className="text-[24px] mt-8 font-bold text-white" to={"/posts"}>
        돌아가기
      </Link>
    </article>
  )
}
