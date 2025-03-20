import React from 'react';

const customerMetrics = [
  {
    title: "Total Customers",
    description: "The overall number of registered customers.",
    metric: "1,250", // Dummy data
  },
  {
    title: "New Customers Today",
    description: "Customers who signed up today.",
    metric: "35",
  },
  {
    title: "Repeat Purchase Rate",
    description: "Percentage of customers who made more than one purchase.",
    metric: "68%",
  },
  {
    title: "Customer Satisfaction",
    description: "Average satisfaction rating from customer feedback.",
    metric: "4.5/5",
  },
  {
    title: "Top Spenders",
    description: "Highlighting the customers with the highest total spend.",
    metric: "John Doe, Jane Smith",
  },
  {
    title: "Customer Regions",
    description: "Geographic distribution of your customer base.",
    metric: "North: 40%, South: 30%, East: 20%, West: 10%",
  },
];

const CustomerContent = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Customer Insights</h1>
      <p className="text-center text-gray-600 mb-8">
        An overview of your customer base and their behavior.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customerMetrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{metric.title}</h2>
            <p className="text-gray-600 mb-4">{metric.description}</p>
            <div className="text-2xl font-bold text-indigo-600">
              {metric.metric}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerContent;
