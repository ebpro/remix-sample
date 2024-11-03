// app/routes/welcome.tsx

// This is the main component for the Welcome page.
// It displays a welcome message and some introductory text.
export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      {/* Heading for the welcome message */}
      <h1 className="text-4xl font-bold mb-4">Hello, World!</h1>
      {/* Introductory text for the welcome message */}
      <p className="text-xl mt-2">Welcome to our website. We're glad to have you here!</p>
    </div>
  );
}

/*
Explanation for Students:

1. Component Definition: The `Welcome` function is a React component that represents the welcome page.
2. Container Div: The outer `div` uses Tailwind CSS classes to create a flex container (`flex`) that centers its content both vertically and horizontally (`items-center justify-center`). It also has a full-screen height (`h-screen`), a gray background (`bg-gray-100`), and gray text (`text-gray-800`).
3. Heading: The `h1` element displays the main heading of the welcome page. It uses Tailwind CSS classes for text size (`text-4xl`), font weight (`font-bold`), and margin bottom (`mb-4`).
4. Introductory Text: The `p` element provides some introductory text for the welcome page. It uses Tailwind CSS classes for text size (`text-xl`) and margin top (`mt-2`).

This structure provides a clean and welcoming interface for the welcome page, with a consistent layout and styling.
*/