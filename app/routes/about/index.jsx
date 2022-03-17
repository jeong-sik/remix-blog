import { Link, useLoaderData } from "remix"
export default function Index() {
  return (
    <section className="mx-4 mb-4 text-[#ccc] ">
      <h3 className="text-[22px] mb-2">사회생활</h3>
      <ul className=" text-[18px]">
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
          <a target="_blank" href="mailto:yousleepwhen@gmail.com">
            편지
          </a>
        </li>
      </ul>
      <div className="my-4 h-[2px] bg-gray-500"></div>
      <h3 className="text-[22px] mb-2">음악생활</h3>
      <ul className=" text-[18px]">
        <li>
          <a target="_blank" href="https://vibe.naver.com/artist/43653">
            프렌지(해체) - Bass, Abracadabra(나레이션), Guitar, Noise, 불평불만
          </a>
        </li>
        <li>
          <a target="_blank" href="https://vibe.naver.com/artist/269326">
            아일(해체) - Guitar, 잔소리
          </a>
        </li>
        <li>
          <a target="_blank" href="https://vibe.naver.com/artist/6172">
            전자양(former member) - Noise, 무기력
          </a>
        </li>
        <li>
          <p>텐더라인(former member) - Bass, 회피</p>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/Alleyspears_98">
            앨리스피어스 - Bass
          </a>
        </li>
        <li>
          <p>But we also like a soft music - 뭐할지 모름</p>
        </li>
        <li>
          <p>트럼펫 - 도 솔 도 미 솔 쌉가능</p>
        </li>
      </ul>
      <div className="my-4 h-[2px] bg-gray-500"></div>
      <h3 className="text-[22px] mb-2">결혼생활</h3>
      <ul className=" text-[18px]">
        <li>
          <p>2014/11/22 ~ 2019/10/21</p>
        </li>
      </ul>
      <div className="my-4 h-[2px] bg-gray-500"></div>
      <h3 className="text-[22px] mb-2">회사생활</h3>
      안하고싶다
      <div className="my-4 h-[2px] bg-gray-500"></div>
      <h3 className="text-[22px] mb-2">생일</h3>
      1983/10/21
    </section>
  )
}
