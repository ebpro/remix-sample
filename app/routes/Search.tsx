import { useFetcher } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

// Loader function to handle search queries
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  // Return an empty array if no query is provided
  if (!query) {
    return json([]);
  }

  // Simulate a search operation (replace with actual search logic)
  const results = [
    { name: "Result 1" },
    { name: "Result 2" },
    { name: "Result 3" },
  ].filter(result => result.name.toLowerCase().includes(query.toLowerCase()));

  return json(results);
};

// SearchPage component
export default function SearchPage() {
  const fetcher = useFetcher();
  const results = fetcher.data || [];

  return (
    <div>
      <h1>Search Page</h1>
      {/* Form to submit search query */}
      <fetcher.Form method="get" action="/search">
        <input type="text" name="query" placeholder="Search..." />
        <button type="submit">Search</button>
      </fetcher.Form>
      {/* Display search results */}
      <ul>
        {results.map((result: any, index: number) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}