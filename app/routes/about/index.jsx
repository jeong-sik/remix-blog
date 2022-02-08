import { Link, useLoaderData } from "remix"
export default function Index() {
  return (
    <ul className="ml-4 text-[#ccc] text-[18px]">
      <li>
        <a target="_blank" href="https://soundcloud.com/yousleepwhen">
          사운드클라우드
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.github.com/jeong-sik">
          깃허브
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.twitter.com/yousleepwhen">
          트위터
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.instagram.com/yousleepwhen/">
          인스타그램
        </a>
      </li>
      <li>
        <a target="_blank" href="mailto:yousleewphen@gmail.com">
          편지
        </a>
      </li>
    </ul>
  )
}
