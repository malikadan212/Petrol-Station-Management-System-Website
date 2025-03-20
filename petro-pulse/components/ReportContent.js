import React from 'react';

const reportCards = [
  {
    title: "Generate Report",
    description: "Create a new report based on your selected criteria.",
    actionText: "Generate",
    // actionLink or onClick can be added later
  },
  {
    title: "Download Report",
    description: "Download previously generated reports in PDF or Excel format.",
    actionText: "Download",
  },
  {
    title: "View Report",
    description: "View detailed report analysis and charts directly in the dashboard.",
    actionText: "View Report",
  },
  {
    title: "Custom Reports",
    description: "Customize your report settings and save your preferences.",
    actionText: "Customize",
  }
];

const ReportContent = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Reports Dashboard</h1>
      <p className="text-center text-gray-600 mb-8">
        Generate, download, or view your reports here.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {reportCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
            <div className="mt-4">
              <button
                className="bg-indigo-600 text-white font-medium px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
                // onClick handler can be added here
              >
                {card.actionText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportContent;
