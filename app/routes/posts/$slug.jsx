import { Link, useLoaderData } from "remix"

import invariant from "tiny-invariant"

import { getPost } from "~/post"

export const loader = async ({ params }) => {
  invariant(params.slug, "expected params.slug")
  return getPost(params.slug)
}

export default function PostSlug() {
  const post = useLoaderData()

  return (
    <div className="p-4 m-4 font-batang text-[#ccc] break-keep-all whitespace-pre-wrap">
      <Link className="text-[30px] font-bold text-[#rrr]" to={"/posts"}>
        돌아가기
      </Link>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  )
}
