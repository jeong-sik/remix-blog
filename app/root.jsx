import styles from "./styles/app.css"

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix"

export function meta() {
  return { title: "yousleepwhen" }
}

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="/dist/output.css" rel="stylesheet" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SF0R12VJD3"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-SF0R12VJD3');
        </script>
        <Meta />
        <Links />
      </head>
      <body className="bg-black font-batang">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
