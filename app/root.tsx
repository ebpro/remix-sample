import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";

// Function to define the links to stylesheets
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

// Loader function to fetch user data on the server side
export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: await getUser(request) });
};

// Main App component
export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {/* Meta tags for SEO */}
        <Meta />
        {/* Links to stylesheets */}
        <Links />
      </head>
      <body className="h-full">
        {/* Outlet for nested routes */}
        <Outlet />
        {/* Scroll restoration for maintaining scroll position */}
        <ScrollRestoration />
        {/* Scripts for the application */}
        <Scripts />
        {/* Live reload for development */}
        <LiveReload />
      </body>
    </html>
  );
}

/*
Explanation for Students:

1. Import Statements: Import necessary modules and components from Remix and other files.
2. Links Function: Defines the links to stylesheets. It includes the Tailwind CSS stylesheet and optionally a CSS bundle if available.
3. Loader Function: Fetches user data on the server side using the `getUser` function. This data is passed to the component as JSON.
4. App Component: The main component that defines the structure of the HTML document.
   - `<html>`: The root element with the language set to English and full height.
   - `<head>`: Contains meta tags for character set and viewport settings, as well as links to stylesheets.
   - `<body>`: Contains the main content of the application.
     - `<Outlet>`: A placeholder for nested routes.
     - `<ScrollRestoration>`: Ensures the scroll position is maintained when navigating.
     - `<Scripts>`: Includes the necessary scripts for the application.
     - `<LiveReload>`: Enables live reloading during development.

This structure provides a clean and organized layout for the root of the application, with support for stylesheets, user data fetching, and essential HTML elements.
*/