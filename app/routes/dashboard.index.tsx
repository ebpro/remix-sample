// app/routes/dashboard.index.tsx

// This is the main component for the Dashboard index page.
// It displays a welcome message and some introductory text.
export default function DashboardIndex() {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {/* Heading for the dashboard */}
      <h2 className="text-2xl font-semibold mb-2">Welcome to the Dashboard</h2>
      {/* Introductory text for the dashboard */}
      <p className="text-gray-700">This is the main dashboard page.</p>
    </div>
  );
}