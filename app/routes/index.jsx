import { getRecentPost } from "~/post"
import { Link, useLoaderData } from "remix"

export const loader = async () => {
  return getRecentPost()
}

export default function Index() {
  const post = useLoaderData()

  return (
    <section className="ml-5">
      <h2 className="text-white text-bold text-[20px] mb-4">최근 글</h2>
      <Link to={`/posts/${post.slug}`}>
        <p className="text-[#ccc] font-bold text-[18px]">{post.title}</p>
        <div
          className="text-[#999] line-clamp-2 break-keep-all"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
        <p className="text-[#ccc] font-bold text-[18px] mt-4">더 읽기</p>
      </Link>
    </section>
  )
}
