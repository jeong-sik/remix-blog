import { Link, useLoaderData } from "remix"
import { format } from "date-fns"
import { getPosts } from "~/post"

export const loader = async () => {
  return getPosts()
}

export default function Posts() {
  const posts = useLoaderData()

  return (
    <div className="p-5 text-[#ccc] keep-all">
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug} className="mb-2">
              <Link
                to={post.slug}
                className="flex items-center justify-between w-full text-lg"
              >
                <p>{post.title}</p>
                <span className="text-sm">
                  {format(new Date(post.date), "yyyy년 M월 d일")}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
