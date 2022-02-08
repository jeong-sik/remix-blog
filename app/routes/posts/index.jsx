import { Link, useLoaderData } from "remix"
import { format } from "date-fns"
import { getPosts } from "~/post"

export const loader = async () => {
  return getPosts()
}

export default function Posts() {
  const posts = useLoaderData()

  return (
    <div className="p-4 m-4 text-[#ccc] keep-all">
      <h1 className="text-[32px] font-bold text-white mb-4">글</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link
                to={post.slug}
                className="flex items-center justify-between w-full text-lg"
              >
                <p>{post.title}</p>
                <span className="text-sm italic">
                  {format(new Date(post.date), "yyyy-MM-dd")}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
