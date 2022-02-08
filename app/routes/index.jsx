import Posts from "./posts"
import { Link, useLoaderData } from "remix"
export default function Index() {
  return (
    <section style={{ lineHeight: "1.4" }}>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1164583294&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: "100",
        }}
      >
        <a
          href="https://soundcloud.com/yousleepwhen"
          title="yousleepwhen"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          yousleepwhen
        </a>

        <a
          href="https://soundcloud.com/yousleepwhen/misoleul-ttuiumyeo-naleul-bonaen-geu-moseubcheoleom"
          title="misoleul ttuiumyeo naleul bonaen geu moseubcheoleom"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          misoleul ttuiumyeo naleul bonaen geu moseubcheoleom
        </a>
      </div>
      <nav className="text-[rgb(204,204,204)] m-4">
        <Link to="/posts">글</Link>
      </nav>
    </section>
  )
}
