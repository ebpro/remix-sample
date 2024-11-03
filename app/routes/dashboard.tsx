// app/routes/dashboard.tsx

import { Outlet } from "@remix-run/react";
import Navbar from "~/components/Navbar";

// This is the main component for the Dashboard layout.
// It includes a Navbar, a heading, and a placeholder for nested routes.
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar component */}
      <Navbar />
      <div className="container mx-auto p-4">
        {/* Main heading for the dashboard */}
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        {/* Outlet for nested routes */}
        <Outlet />
      </div>
    </div>
  );
}

/*
Explanation for Students:

1. Component Definition: The `Dashboard` function is a React component that represents the layout for the dashboard.
2. Container Div: The outer `div` has a minimum height of the screen (`min-h-screen`) and a gray background (`bg-gray-100`). These classes are from Tailwind CSS and help style the container.
3. Navbar Component: The `Navbar` component is included to provide navigation links.
4. Inner Container: The inner `div` centers the content and adds padding (`p-4`). It uses Tailwind CSS classes for layout and spacing.
5. Main Heading: The `h1` element displays the main heading of the dashboard. It uses Tailwind CSS classes for text size (`text-4xl`), font weight (`font-bold`), and margin bottom (`mb-4`).
6. Outlet Component: The `Outlet` component from `@remix-run/react` is used to render nested routes. This allows different pages (like the dashboard index and settings) to be displayed within the dashboard layout.

Nested Routes:
- Index Route: By default, the `index` route will be rendered when the user navigates to `/dashboard`. This is typically used to display an overview or welcome message.
  - File: `app/routes/dashboard/index.tsx`
  - Component: `DashboardIndex`
  - Content: Displays a welcome message and introductory text.
  
- Settings Route: The `settings` route will be rendered when the user navigates to `/dashboard/settings`. This is used to display and manage settings.
  - File: `app/routes/dashboard/settings.tsx`
  - Component: `DashboardSettings`
  - Content: Displays a heading and introductory text for managing settings.

This structure provides a clean and organized layout for the dashboard, with a consistent header and space for nested content. The `Outlet` component ensures that the appropriate nested route content is displayed based on the current URL.
*/