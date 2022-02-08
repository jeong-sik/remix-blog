import styles from "./styles/app.css"
import { useLocation } from "react-router-dom"

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix"
import * as gtag from "~/utils/gtags"

export function meta() {
  return { title: "yousleepwhen" }
}

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
  const location = useLocation()

  React.useEffect(() => {
    gtag.pageview(location.pathname)
  }, [location])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="/dist/output.css" rel="stylesheet" />

        <Meta />
        <Links />
      </head>
      <body className="bg-[#2f2f2f] font-batang">
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
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
