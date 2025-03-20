// app/employee/dashboard/page.js
"use client";

export default function EmployeeDashboard() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-400">Welcome to Employee Side</h1>
        <p className="text-center text-gray-300 mb-8">
          This is the employee dashboard for managing day-to-day operations.
        </p>
        
        <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
          <h2 className="text-xl font-semibold mb-4 text-green-300">Daily Tasks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Placeholder tasks */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-medium">Today's Sales</h3>
              <p className="text-2xl font-bold text-green-400">₹0</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-medium">Pending Orders</h3>
              <p className="text-2xl font-bold text-yellow-400">0</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-medium">Fuel Dispensed</h3>
              <p className="text-2xl font-bold text-blue-400">0 L</p>
            </div>
          </div>
          <p className="text-gray-400 mt-6">
            Employee management tools will be implemented in future updates.
          </p>
        </div>
      </div>
    </div>
  );
}