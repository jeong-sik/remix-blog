import styles from "./styles/app.css"
import { useLocation } from "react-router-dom"
import Gravatar from "react-gravatar"
import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix"
import * as gtag from "~/utils/gtags"

export function meta() {
  return { title: "yousleepwhen.be" }
}

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

function CustomMeta() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link href="/dist/output.css" rel="stylesheet" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <Meta />
      <Links />
    </>
  )
}

function Document({ children, title }) {
  return (
    <html lang="en" className="bg-[#212121]">
      <head>
        <CustomMeta />
        {title ? <title>{title}</title> : null}
        <Links />
      </head>
      <body className="bg-transparent scrollbar-hide">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

function Layout({ children }) {
  return (
    <div className="my-0 mx-auto max-w-[768px] flex flex-col min-h-[100vh] bg-[#2f2f2f] font-batang scrollbar-hide">
      <nav className="flex text-[rgb(204,204,204)] m-4">
        <Link to="/posts" className="mr-4">
          <h2 className="text-[28px] font-bold text-white mb-4">글</h2>
        </Link>
        <Link to="/musics" className="mr-4">
          <h2 className="text-[28px] font-bold text-white mb-4">음악</h2>
        </Link>
      </nav>
      <main>{children}</main>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-SF0R12VJD3"
      ></script>
      <script
        async
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-SF0R12VJD3');
          `,
        }}
      />

      {process.env.NODE_ENV === "development" && <LiveReload />}
      <footer className="mt-auto ml-5 mr-5">
        <div className="mb-5">
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/GnJiS8jjJH0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex items-center justify-between flex-none mb-4">
          <Link to="/" className="flex items-center justify-center flex-none ">
            <h2 className="text-[28px] flex-none font-bold text-white ">
              처음
            </h2>
          </Link>
          <Link to="/about" className="flex items-center">
            <Gravatar
              email="yousleepwhen@gmail.com"
              className="rounded-[24px]"
            />
          </Link>
        </div>
        {/* <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1164583294&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe> */}
      </footer>
    </div>
  )
}

export default function App() {
  const location = useLocation()

  React.useEffect(() => {
    gtag.pageview(location.pathname)
  }, [location])

  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}
