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
      <h2 className="text-white text-[22px] font-extrabold mb-2">공연</h2>
      <ul className="break-keep-all">
        <li className="mb-2">
          2022-05-01 앨리스피어스 w/탈, 공하임, 셀린셀리셀리느, 지나가던조씨 at 빵
        </li>
        <li>
          2022-03-19 앨리스피어스 w/잔치잔치, 스모킹구스, 펑크온파이어 at 빵
        </li>
        <li>
          2022-02-13 앨리스피어스 w/지누콘다, 셀린셀리셀리느, 펑크온파이어 at 빵
        </li>
      </ul>
    </div>
  )
}
