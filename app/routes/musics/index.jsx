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
      <p>영구 없다</p>
    </div>
  )
}
