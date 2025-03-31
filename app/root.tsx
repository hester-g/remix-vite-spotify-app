import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

export default function App() {

  return (
    <html lang="en-gb">
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
        <title>Spotify App</title>
      </head>
      <body>
        <div>
          <h1>:)</h1>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/tracks">Tracks</Link>
        </div>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
