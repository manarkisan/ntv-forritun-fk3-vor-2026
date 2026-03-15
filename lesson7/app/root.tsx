import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import appStyles from "./app.css?url";
import { createContext, useState } from "react";
import { Toolbar } from "./components/ThemeToggle";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStyles },
];

export function meta() {
  return [
    { title: "Remix Theme App" },
    {
      name: "description",
      content: "Simple Remix app with light and dark theme",
    },
  ];
}

const ThemeContext = createContext("toggle")

export default function App() {
  const [theme, setTheme] = useState("light")
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var k = 'theme';
                var s = localStorage.getItem(k);
                var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = s === 'dark' || s === 'light' ? s : (dark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
        <ThemeContext.Provider value={{ theme, setTheme}}>
          <Toolbar/>
        </ThemeContext.Provider>

        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
