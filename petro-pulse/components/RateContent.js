import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';

const fuelTypes = ['Petrol', 'Hi Octane', 'Diesel', 'Super Diesel'];

// Sample historical price data for demonstration.
const sampleHistoricalData = [
  { date: '2025-01-01', Petrol: 100, 'Hi Octane': 105, Diesel: 95, 'Super Diesel': 98 },
  { date: '2025-01-02', Petrol: 102, 'Hi Octane': 107, Diesel: 97, 'Super Diesel': 99 },
  { date: '2025-01-03', Petrol: 101, 'Hi Octane': 106, Diesel: 96, 'Super Diesel': 100 },
  { date: '2025-01-04', Petrol: 103, 'Hi Octane': 108, Diesel: 98, 'Super Diesel': 101 },
  { date: '2025-01-05', Petrol: 104, 'Hi Octane': 110, Diesel: 99, 'Super Diesel': 102 },
];

const RateScreen = () => {
  const [scheduledUpdates, setScheduledUpdates] = useState([]);
  const [newSchedule, setNewSchedule] = useState({ fuelType: 'Petrol', price: '', date: '' });
  const [impactData, setImpactData] = useState({ adjustment: 0 });
  const [fuelRates, setFuelRates] = useState({
    Petrol: 100,
    'Hi Octane': 105,
    Diesel: 95,
    'Super Diesel': 98
  });

  // Simulate price impact analysis (simple calculation based on adjustment)
  const simulateImpact = (basePrice) => {
    return basePrice + (impactData.adjustment || 0);
  };

  // -------------------------------
  // Historical Trends Component
  // -------------------------------
  const HistoricalTrends = () => {
    const [selectedFuel, setSelectedFuel] = useState('Petrol');
    // Updated dimensions
    const chartWidth = 1170;
    const chartHeight = 450;
    const padding = 50; // increased padding for axis labels

    const data = sampleHistoricalData.map((item) => ({
      date: item.date,
      value: item[selectedFuel]
    }));

    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));

    // Create 5 ticks for Y-axis
    const yTicks = [0, 0.25, 0.5, 0.75, 1];

    // Generate path for the line
    const generatePath = () => {
      return data
        .map((point, index) => {
          const x = padding + (index * ((chartWidth - 2 * padding) / (data.length - 1)));
          const y = padding + ((maxValue - point.value) / (maxValue - minValue)) * (chartHeight - 2 * padding);
          return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
        })
        .join(' ');
    };

    return (
      <div className="p-6 bg-white rounded-lg shadow mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Historical Price Trends</h3>
        <div className="mb-4">
          <label htmlFor="fuel-select" className="text-sm font-medium text-gray-800 mr-2">
            Fuel Type:
          </label>
          <select
            id="fuel-select"
            value={selectedFuel}
            onChange={(e) => setSelectedFuel(e.target.value)}
            className="border rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors"
            aria-label="Select Fuel Type"
          >
            {fuelTypes.map((ft) => (
              <option key={ft} value={ft}>{ft}</option>
            ))}
          </select>
        </div>
        <svg width={chartWidth} height={chartHeight} className="w-full h-auto">
          {/* Y-Axis Grid Lines and Labels */}
          {yTicks.map((t, idx) => {
            const y = padding + t * (chartHeight - 2 * padding);
            // Calculate corresponding price value
            const price = maxValue - t * (maxValue - minValue);
            return (
              <g key={idx}>
                <line
                  x1={padding}
                  y1={y}
                  x2={chartWidth - padding}
                  y2={y}
                  stroke="#e5e7eb"
                  strokeDasharray="4"
                />
                <text
                  x={padding - 10}
                  y={y + 5}
                  textAnchor="end"
                  className="text-sm text-gray-800"
                >
                  {price.toFixed(0)}
                </text>
              </g>
            );
          })}
          {/* X-Axis Line */}
          <line x1={padding} y1={chartHeight - padding} x2={chartWidth - padding} y2={chartHeight - padding} stroke="#e5e7eb" strokeWidth="2" />
          {/* X-Axis Labels */}
          {data.map((point, index) => {
            const x = padding + (index * ((chartWidth - 2 * padding) / (data.length - 1)));
            return (
              <text
                key={index}
                x={x}
                y={chartHeight - padding + 20}
                textAnchor="middle"
                className="text-sm text-gray-800"
              >
                {format(parseISO(point.date), 'MMM d')}
              </text>
            );
          })}
          {/* Line Path */}
          <path d={generatePath()} fill="none" stroke="#4f46e5" strokeWidth="2" />
          {/* Data Points */}
          {data.map((point, index) => {
            const x = padding + (index * ((chartWidth - 2 * padding) / (data.length - 1)));
            const y = padding + ((maxValue - point.value) / (maxValue - minValue)) * (chartHeight - 2 * padding);
            return (
              <circle key={index} cx={x} cy={y} r="4" fill="#4f46e5" />
            );
          })}
        </svg>
      </div>
    );
  };

  // -------------------------------
  // Scheduled Price Updates Component
  // -------------------------------
  const ScheduledUpdates = () => {
    const handleScheduleSubmit = (e) => {
      e.preventDefault();
      setScheduledUpdates([...scheduledUpdates, newSchedule]);
      setNewSchedule({ fuelType: 'Petrol', price: '', date: '' });
    };

    return (
      <div className="p-6 bg-white rounded-lg shadow mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Scheduled Price Updates</h3>
        <form onSubmit={handleScheduleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="schedule-fuel" className="block text-sm font-medium text-gray-800">
              Fuel Type
            </label>
            <select
              id="schedule-fuel"
              value={newSchedule.fuelType}
              onChange={(e) => setNewSchedule({ ...newSchedule, fuelType: e.target.value })}
              className="border rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors"
              aria-label="Select fuel type for schedule"
            >
              {fuelTypes.map((ft) => (
                <option key={ft} value={ft}>{ft}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="schedule-price" className="block text-sm font-medium text-gray-800">
              New Price
            </label>
            <input
              id="schedule-price"
              type="number"
              value={newSchedule.price}
              onChange={(e) => setNewSchedule({ ...newSchedule, price: e.target.value })}
              className="border rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors"
              placeholder="Enter price"
              required
              aria-label="Enter new price"
            />
          </div>
          <div>
            <label htmlFor="schedule-date" className="block text-sm font-medium text-gray-800">
              Effective Date
            </label>
            <input
              id="schedule-date"
              type="date"
              value={newSchedule.date}
              onChange={(e) => setNewSchedule({ ...newSchedule, date: e.target.value })}
              className="border rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors"
              required
              aria-label="Select effective date"
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors"
            >
              Schedule Update
            </button>
          </div>
        </form>
        {scheduledUpdates.length > 0 && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Upcoming Updates:</h4>
            <ul>
              {scheduledUpdates.map((item, idx) => (
                <li key={idx} className="text-base text-gray-800">
                  {item.fuelType} - Rs. {item.price} on {format(parseISO(item.date), 'PPP')}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  // -------------------------------
  // Update Price Component (Individual Updates)
  // -------------------------------
  const UpdatePrice = () => {
    const [localRates, setLocalRates] = useState(fuelRates);

    const handlePriceChange = (fuelType, newPrice) => {
      setLocalRates({ ...localRates, [fuelType]: Number(newPrice) });
    };

    const saveUpdates = () => {
      setFuelRates(localRates);
      alert('Fuel rates updated successfully!');
    };

    return (
      <div className="p-6 bg-white rounded-lg shadow mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Update Fuel Prices</h3>
        <div className="space-y-4">
          {fuelTypes.map((ft) => (
            <div
              key={ft}
              className="flex flex-col md:flex-row items-center justify-between border p-4 rounded transition-colors hover:bg-gray-50"
            >
              <span className="font-semibold text-gray-800">{ft}</span>
              <div className="flex items-center mt-2 md:mt-0">
                <span className="mr-2 text-gray-800">Current: Rs. {localRates[ft]}</span>
                <input
                  type="number"
                  value={localRates[ft]}
                  onChange={(e) => handlePriceChange(ft, e.target.value)}
                  className="border rounded px-3 py-2 w-24 mr-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors"
                  aria-label={`Update price for ${ft}`}
                />
                <span className="text-sm text-gray-700">(Rs.)</span>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={saveUpdates}
          className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors"
        >
          Save Updates
        </button>
      </div>
    );
  };

  // -------------------------------
  // Price Impact Analysis Component
  // -------------------------------
  const ImpactAnalysis = () => {
    const basePrice = 100;
    const predictedPrice = simulateImpact(basePrice);

    return (
      <div className="p-6 bg-white rounded-lg shadow mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Price Impact Analysis</h3>
        <div className="mb-4">
          <label htmlFor="impact-range" className="block text-sm font-medium text-gray-800 mb-1">
            Adjustment (in Rs.)
          </label>
          <input
            id="impact-range"
            type="range"
            min="-10"
            max="10"
            step="0.5"
            value={impactData.adjustment}
            onChange={(e) => setImpactData({ adjustment: Number(e.target.value) })}
            className="w-full focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors"
            aria-label="Price adjustment range"
          />
          <div className="text-sm text-gray-800 mt-1">Adjustment: Rs. {impactData.adjustment}</div>
        </div>
        <div className="p-4 bg-gray-50 rounded border">
          <p className="text-base text-gray-800">
            Base Price: <span className="font-semibold">Rs. {basePrice}</span>
          </p>
          <p className="text-base text-gray-800">
            Predicted Price after Adjustment: <span className="font-semibold">Rs. {predictedPrice}</span>
          </p>
        </div>
        <div className="mt-6">
          <svg width="100%" height="100" viewBox="0 0 300 100">
            <line x1="0" y1="50" x2="300" y2="50" stroke="#e5e7eb" strokeWidth="2" />
            <circle cx={150 + (impactData.adjustment * 10)} cy="50" r="8" fill="#4f46e5" />
          </svg>
        </div>
      </div>
    );
  };

  // -------------------------------
  // Main Render: Scrollable Vertical Layout
  // -------------------------------
  return (
    <div className="min-h-screen bg-gray-100 p-6 overflow-y-auto">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold mb-8 text-indigo-900">Fuel Rate Management</h1>
        <HistoricalTrends />
        <ScheduledUpdates />
        <UpdatePrice />
        <ImpactAnalysis />
      </div>
    </div>
  );
};

export default RateScreen;
