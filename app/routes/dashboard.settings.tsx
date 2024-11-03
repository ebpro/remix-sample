// app/routes/dashboard.settings.tsx

// This is the main component for the Dashboard settings page.
// It displays a heading and some introductory text for managing settings.
export default function DashboardSettings() {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {/* Heading for the settings page */}
      <h2 className="text-2xl font-semibold mb-2">Settings</h2>
      {/* Introductory text for the settings page */}
      <p className="text-gray-700">Manage your settings here.</p>
    </div>
  );
}