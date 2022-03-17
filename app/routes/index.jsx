import { getRecentPost } from "~/post"
import { Link, useLoaderData } from "remix"

export const loader = async () => {
  return getRecentPost(3)
}

export default function Index() {
  const posts = useLoaderData()

  return (
    <section className="ml-5 mr-5">
      <h2 className="text-white text-bold text-[20px] mb-4">최근 글</h2>
      {posts.map((post) => (
        <Link
          key={post.slug}
          to={`/posts/${post.slug}`}
          className={"block mb-8"}
        >
          <p className="text-[#ccc] font-bold text-[22px]">{post.title}</p>
          <div
            className="text-[#999] max-h-[48px] whitespace-pre-wrap overflow-hidden break-keep-all"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></div>
          <p className="text-[#ccc] font-bold text-[18px] mt-2">더 읽기</p>
        </Link>
      ))}
    </section>
  )
}
