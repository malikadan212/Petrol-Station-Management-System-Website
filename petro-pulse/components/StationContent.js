import React, { useState } from 'react';

export default function StationContent() {
  // --------------------------------------------------------------------------
  // 6) Per Litre Profitability (Donut Charts)
  // --------------------------------------------------------------------------
  // Example data. Each item has:
  // - label (fuel type + percentage)
  // - cost (the cost in Rs.)
  // - slices: array of { label, value, color } for each sub-slice (HR, Electricity, etc.)
  // The sum of slice values should be 100 (or any total you like).
  const perLitreProfitabilityData = [
    {
      fuelType: 'Petrol',
      percentage: 13,
      cost: 12.0,
      slices: [
        { label: 'HR', value: 25, color: '#9A3412' },
        { label: 'Electricity', value: 25, color: '#F59E0B' },
        { label: 'Other', value: 25, color: '#10B981' },
        { label: 'Revenue', value: 25, color: '#3B82F6' },
      ]
    },
    {
      fuelType: 'Hi Octane',
      percentage: 3,
      cost: 10.0,
      slices: [
        { label: 'HR', value: 30, color: '#9A3412' },
        { label: 'Electricity', value: 20, color: '#F59E0B' },
        { label: 'Other', value: 20, color: '#10B981' },
        { label: 'Revenue', value: 30, color: '#3B82F6' },
      ]
    },
    {
      fuelType: 'Diesel',
      percentage: 12,
      cost: 15.0,
      slices: [
        { label: 'HR', value: 25, color: '#9A3412' },
        { label: 'Electricity', value: 25, color: '#F59E0B' },
        { label: 'Other', value: 25, color: '#10B981' },
        { label: 'Revenue', value: 25, color: '#3B82F6' },
      ]
    },
    {
      fuelType: 'Super Diesel',
      percentage: 11,
      cost: 13.0,
      slices: [
        { label: 'HR', value: 20, color: '#9A3412' },
        { label: 'Electricity', value: 20, color: '#F59E0B' },
        { label: 'Other', value: 30, color: '#10B981' },
        { label: 'Revenue', value: 30, color: '#3B82F6' },
      ]
    },
  ];

  // For hover tooltips
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    label: '',
    value: 0,
  });

  const showTooltip = (e, slice) => {
    // Position near the mouse
    setTooltip({
      visible: true,
      x: e.clientX + 10,
      y: e.clientY + 10,
      label: slice.label,
      value: slice.value
    });
  };

  const hideTooltip = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  // Donut sub-component
  const DonutChart = ({ fuelType, percentage, cost, slices }) => {
    // We assume the sum of slices = 100 (or any total you define).
    const total = slices.reduce((acc, s) => acc + s.value, 0);
    const radius = 45;       // radius of the donut
    const circumference = 2 * Math.PI * radius;
    let cumulativeOffset = 0; // used to position each slice

    return (
      <div className="relative flex flex-col items-center">
        <svg width="275" height="180" viewBox="0 0 120 120">
          <g transform="translate(60,60)"> 
            {/* Background circle */}
            <circle
              r={radius}
              fill="none"
              stroke="#e5e7eb" 
              strokeWidth="10"
            />
            {/* Each slice */}
            {slices.map((slice, index) => {
              const sliceFraction = slice.value / total;
              const sliceCircumference = sliceFraction * circumference;

              const strokeDasharray = `${sliceCircumference} ${circumference}`;
              const strokeDashoffset = -cumulativeOffset;

              // Update offset for next slice
              cumulativeOffset += sliceCircumference;

              return (
                <circle
                  key={index}
                  r={radius}
                  fill="none"
                  stroke={slice.color}
                  strokeWidth="10"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="butt"
                  onMouseMove={(e) => showTooltip(e, slice)}
                  onMouseLeave={hideTooltip}
                  style={{ cursor: 'pointer' }}
                />
              );
            })}
          </g>
          {/* Center text (percentage) */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="14"
            fill="#374151"
            fontWeight="bold"
          >
            {percentage}%
          </text>
        </svg>
        {/* Fuel type + cost label below the donut */}
        <div className="text-center mt-1 text-sm">
          <div className="font-bold text-2xl text-indigo-900">{fuelType}</div>
          <div className="text-gray-500 text-md">Cost Rs. {cost.toFixed(2)}</div>
        </div>
      </div>
    );
  };
  
    // Complete historical data for prediction
  const historicalData = {
    'Petrol': [
      { day: 'Mon', value: 9500 },
      { day: 'Tue', value: 8200 },
      { day: 'Wed', value: 7100 },
      { day: 'Thu', value: 8800 },
      { day: 'Fri', value: 10200 },
      { day: 'Sat', value: 12500 },
      { day: 'Sun', value: 11500 }
    ],
    'Hi Octane': [
      { day: 'Mon', value: 8500 },
      { day: 'Tue', value: 9200 },
      { day: 'Wed', value: 7800 },
      { day: 'Thu', value: 8100 },
      { day: 'Fri', value: 9500 },
      { day: 'Sat', value: 10500 },
      { day: 'Sun', value: 9800 }
    ],
    'Diesel': [
      { day: 'Mon', value: 22000 },
      { day: 'Tue', value: 24500 },
      { day: 'Wed', value: 21000 },
      { day: 'Thu', value: 23000 },
      { day: 'Fri', value: 25500 },
      { day: 'Sat', value: 19500 },
      { day: 'Sun', value: 18500 }
    ],
    'Super Diesel': [
      { day: 'Mon', value: 9800 },
      { day: 'Tue', value: 10200 },
      { day: 'Wed', value: 9500 },
      { day: 'Thu', value: 10800 },
      { day: 'Fri', value: 11500 },
      { day: 'Sat', value: 12500 },
      { day: 'Sun', value: 11800 }
    ]
  };
  
  // Enhanced prediction logic
  const getPredictedData = (fuelType) => {
    if (fuelType === 'All') {
      // Aggregate all fuel types
      return historicalData['Petrol'].map((_, index) => ({
        day: historicalData['Petrol'][index].day,
        value: Object.values(historicalData).reduce((sum, fuelData) => {
          return sum + (fuelData[index]?.value || 0);
        }, 0)
      }));
    }
    return historicalData[fuelType] || [];
  };
  
  // Dynamic max value calculation for demand prediction
  const getMaxValue = () => {
    const currentData = getPredictedData(selectedFuel);
    const maxValue = Math.max(...currentData.map(item => item.value));
    return maxValue > 0 ? maxValue * 1.2 : 15000; // Add 20% padding
  };

  // Sample data from the image (bar chart for "Sale For The Day")
  const salesData = [
    { type: 'Petrol', amount: 1.023, unit: 'Mn' },
    { type: 'Hi Octane', amount: 2.025, unit: 'Mn' },
    { type: 'Diesel', amount: 2.764, unit: 'Mn' },
    { type: 'Super Diesel', amount: 2.164, unit: 'Mn' },
  ];

  // Data for "Available Fuel Capacity in L" (bar chart)
  const fuelCapacityData = [
    { 
      type: 'Petrol', 
      capacity: 11, 
      available: 3  // Low availability (3 or lower) - will be red
    },
    { 
      type: 'Hi Octane', 
      capacity: 6.6, 
      available: 3  // Low availability (3 or lower) - will be red
    },
    { 
      type: 'Diesel', 
      capacity: 11, 
      available: 9  // High availability (> 3) - will be blue
    },
    { 
      type: 'Super Diesel', 
      capacity: 11, 
      available: 7  // High availability (> 3) - will be blue
    }
  ];

  // Data for the "Total Stock Cost" & "Total Stock Value" cards
  const fuelTypeData = [
    { name: 'Petrol', percentage: '34%', costAmount: 'Rs. 500,000.00', valueAmount: 'Rs. 700,000.00', literAmount: '5,000', salesAmount: 'Rs. 700,000.00' },
    { name: 'Hi Octane', percentage: '24%', costAmount: 'Rs. 300,000.00', valueAmount: 'Rs. 400,000.00', literAmount: '30,000', salesAmount: 'Rs. 400,000.00' },
    { name: 'Diesel', percentage: '34%', costAmount: 'Rs. 500,000.00', valueAmount: 'Rs. 800,000.00', literAmount: '5,000', salesAmount: 'Rs. 800,000.00' },
    { name: 'S Deisel', percentage: '24%', costAmount: 'Rs. 300,000.00', valueAmount: 'Rs. 500,000.00', literAmount: '3,000', salesAmount: 'Rs. 500,000.00' }
  ];

  // Orders (table) + New order form
  const [orders, setOrders] = useState([
    { id: '23123123', type: 'Petrol', date: '2025-01-13', liters: '6,600', received: false },
    { id: '2342423', type: 'Hi Octane', date: '2025-01-12', liters: '6,600', received: true },
    { id: '34234324', type: 'Diesel', date: '2025-01-11', liters: '9,300', received: true },
    { id: '342342', type: 'Super Diesel', date: '2025-01-10', liters: '11,000', received: true },
  ]);

  const [newOrder, setNewOrder] = useState({
    type: 'Petrol',
    liters: '',
    date: new Date().toISOString().split('T')[0] // YYYY-MM-DD
  });

  const fuelTypes = ['Petrol', 'Hi Octane', 'Diesel', 'Super Diesel'];

  const handleNewOrder = (e) => {
    e.preventDefault();
    const orderId = Math.floor(10000000 + Math.random() * 90000000); // Generate random ID
    
    setOrders([...orders, {
      id: orderId.toString(),
      type: newOrder.type,
      date: newOrder.date,
      liters: Number(newOrder.liters).toLocaleString(),
      received: false
    }]);

    // Reset form
    setNewOrder({
      type: 'Petrol 95',
      liters: '',
      date: new Date().toLocaleDateString('en-GB')
    });
  };

  const [selectedFuel, setSelectedFuel] = useState('All');

  // Calculate maximum values for scaling the first two bar charts
  const maxSaleValue = Math.max(...salesData.map(item => item.amount));
  const maxCapacityValue = Math.max(...fuelCapacityData.map(item => item.capacity));

  // --------------------------------------------------------------------------------------
  // Helper function to generate the SVG path for the line chart
  // --------------------------------------------------------------------------------------
  const generateLinePath = (data, chartWidth, chartHeight, maxValue) => {
    if (!data || data.length === 0) return '';

    // We want to leave a bit of horizontal padding for aesthetic
    const paddingLeft = 30;
    const paddingRight = 30;
    const paddingTop = 20;
    const paddingBottom = 30;

    const usableWidth = chartWidth - paddingLeft - paddingRight;
    const usableHeight = chartHeight - paddingTop - paddingBottom;

    return data
      .map((point, i) => {
        // x position (spread evenly across the width)
        const x = paddingLeft + (i * (usableWidth / (data.length - 1)));
        // y position (inverted because SVG y=0 is top)
        const y = paddingTop + (usableHeight - (point.value / maxValue) * usableHeight);

        return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
      })
      .join(' ');
  };

  // --------------------------------------------------------------------------------------
  // Rendering the component
  // --------------------------------------------------------------------------------------
  return (
    <div className="h-screen overflow-y-auto">
      <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Sale For The Day</h2>
              <select
                name="status"
                className="w-24 bg-gray-700 p-2 rounded text-white"
              >
                <option value="PKR">PKR</option>
                <option value="Litre">Litres</option>
              </select>
            </div>
            
            <div className="w-full h-64 relative">
              {/* Grid lines */}
              <div className="absolute w-full h-full flex flex-col justify-between">
                <div className="border-t border-gray-200"></div>
                <div className="border-t border-gray-200"></div>
                <div className="border-t border-gray-200"></div>
                <div className="border-t border-gray-200"></div>
              </div>
              
              {/* Chart bars */}
              <div className="absolute bottom-0 w-full flex justify-around">
                {salesData.map((item, index) => {
                  const capacityHeight = 3;
                  return (
                    <div key={index} className="flex flex-col items-center" style={{ width: '13%' }}>
                      <div className="text-blue-500 text-xs mb-1">
                        {item.amount}
                      </div>
                      <div className="flex items-end space-x-1 h-56">
                        <div 
                          className="w-10 bg-blue-200"
                          style={{ height: `${(item.amount/capacityHeight)*200}px` }}
                        ></div>
                      </div>
                      <div className="text-gray-600 text-xs mt-2">
                        {item.type}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Fuel Capacity Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Available Fuel Capacity in L</h2>
            
            <div className="w-full h-64 relative">
              {/* Grid lines */}
              <div className="absolute w-full h-full flex flex-col justify-between">
                <div className="border-t border-gray-200"></div>
                <div className="border-t border-gray-200"></div>
                <div className="border-t border-gray-200"></div>
                <div className="border-t border-gray-200"></div>
              </div>
              
              {/* Chart bars */}
              <div className="absolute bottom-0 w-full flex justify-around">
                {fuelCapacityData.map((item, index) => {
                  const capacityHeight = Math.max(4, (item.capacity / maxCapacityValue) * 200);
                  const availableHeight = Math.max(4, (item.available / maxCapacityValue) * 200);
                  const isLowAvailability = item.available <= 3;
                  
                  return (
                    <div key={index} className="flex flex-col items-center" style={{ width: '13%' }}>
                      <div className="text-blue-500 text-xs mb-1">
                        {item.capacity > 0 ? `${item.capacity} K` : ''}
                      </div>
                      <div className="flex items-end space-x-1 h-56">
                        {item.capacity > 0 && (
                          <div 
                            className="w-3 bg-indigo-900"
                            style={{ height: `${capacityHeight}px` }}
                          ></div>
                        )}
                        {item.available > 0 && (
                          <div 
                            className={`w-3 ${isLowAvailability ? 'bg-red-500' : 'bg-blue-200'}`}
                            style={{ height: `${availableHeight}px` }}
                          ></div>
                        )}
                      </div>
                      <div className="text-gray-600 text-xs mt-2">
                        {item.type}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex justify-center mt-8 space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-indigo-900 mr-2"></div>
                <span className="text-xs text-gray-600">Capacity</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-200 mr-2"></div>
                <span className="text-xs text-gray-600">Available(High)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 mr-2"></div>
                <span className="text-xs text-gray-600">Available(Low)</span>
              </div>
            </div>
          </div>
        
          {/* Total Stock Cost */}
          <div className="bg-red-500 rounded-lg shadow p-6 text-white">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Total Stock Cost</h2>
              <span className="text-2xl font-bold">Rs. 12,500,000.00</span>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-36">
              {fuelTypeData.map((item, index) => (
                <div key={index} className="bg-red-400 rounded p-2 text-center text-xl w-28 h-28">
                  <div className="font-medium mb-2">{item.name}</div>
                  <div className="text-lg font-bold mb-2">{item.percentage}</div>
                  <div className="text-sm mb-2">{item.costAmount}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Total Stock Value */}
          <div className="bg-blue-500 rounded-lg shadow p-6 text-white">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Total Stock Value</h2>
              <span className="text-2xl font-bold">Rs. 28,500,000.00</span>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-36">
              {fuelTypeData.map((item, index) => (
                <div key={index} className="bg-blue-400 rounded p-2 text-center text-xl w-28 h-28">
                  <div className="font-medium mb-2">{item.name}</div>
                  <div className="text-lg font-bold mb-2">{item.percentage}</div>
                  <div className="text-sm mb-2">{item.valueAmount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Orders + New Order Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Order Table */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Pending Supply</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Order ID</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Fuel Type</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Order Date</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Liters</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Received</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-700">{order.id}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{order.type}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{order.date}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{order.liters} L</td>
                      <td className="py-3 px-4 text-sm">
                        {order.received ? '✅' : '❌'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* New Order Form */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Create New Order</h2>
            <form onSubmit={handleNewOrder} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Type</label>
                <select
                  value={newOrder.type}
                  onChange={(e) => setNewOrder({...newOrder, type: e.target.value})}
                  className="w-full p-2 border rounded-md text-black"
                  required
                >
                  {fuelTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Liters</label>
                <input
                  type="number"
                  value={newOrder.liters}
                  onChange={(e) => setNewOrder({...newOrder, liters: e.target.value})}
                  className="w-full p-2 border rounded-md text-black"
                  placeholder="Enter Quantity in Liters"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order Date</label>
                <input
                  type="date"
                  value={newOrder.date}
                  onChange={(e) => setNewOrder({...newOrder, date: e.target.value})}
                  className="w-full p-2 border rounded-md text-black"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>

        {/* Demand Prediction Section (Line Chart) */}
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">
              Demand Prediction for Next Week
            </h2>
            
            {/* Fuel Type Filters */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Petrol', 'Hi Octane', 'Diesel', 'Super Diesel'].map((fuel) => (
                <button
                  key={fuel}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedFuel === fuel 
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedFuel(fuel)}
                >
                  {fuel}
                </button>
              ))}
            </div>
          </div>

          {/* Chart Container */}
          <div className="w-full h-80 relative overflow-hidden">
            {/* We'll draw the chart using an SVG */}
            <svg className="w-full h-full">
              {/* Background grid lines (horizontal) */}
              {[...Array(5)].map((_, i) => {
                const y = (i / 4) * 100; // 0%, 25%, 50%, 75%, 100%
                return (
                  <line
                    key={i}
                    x1="0"
                    y1={`${y}%`}
                    x2="100%"
                    y2={`${y}%`}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                );
              })}

              {/* The line path */}
              <path
                d={generateLinePath(
                  getPredictedData(selectedFuel),
                  1170, 
                  320, 
                  getMaxValue()
                )}
                fill="none"
                stroke="#4f46e5"
                strokeWidth="2"
              />

              {/* Circles + labels for each data point */}
              {getPredictedData(selectedFuel).map((item, index, array) => {
                const chartWidth = 1170;
                const chartHeight = 320;
                const maxValue = getMaxValue();

                const paddingLeft = 30;
                const paddingRight = 30;
                const paddingTop = 20;
                const paddingBottom = 30;

                const usableWidth = chartWidth - paddingLeft - paddingRight;
                const usableHeight = chartHeight - paddingTop - paddingBottom;

                const x = paddingLeft + (index * (usableWidth / (array.length - 1)));
                const y = paddingTop + (usableHeight - (item.value / maxValue) * usableHeight);

                return (
                  <g key={index}>
                    {/* Circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r="5"
                      fill="#4f46e5"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    {/* Value label above the circle */}
                    <text
                      x={x}
                      y={y - 10}
                      textAnchor="middle"
                      fontSize="12"
                      fill="#4f46e5"
                      fontWeight="bold"
                    >
                      {item.value.toLocaleString()}
                    </text>
                    {/* Day label below (or around) the x-axis area */}
                    <text
                      x={x}
                      y={chartHeight - 5} // near bottom
                      textAnchor="middle"
                      fontSize="12"
                      fill="#6b7280"
                    >
                      {item.day}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>


        {/* 7) Per Litre Profitability (Donut Charts) */}
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Per Litre Profitability</h2>
          <div className="flex flex-wrap gap-6 justify-start">
            {perLitreProfitabilityData.map((item, idx) => (
              <DonutChart
                key={idx}
                fuelType={`${item.fuelType}`}
                percentage={item.percentage}
                cost={item.cost}
                slices={item.slices}
              />
            ))}
          </div>

         {/* Legend */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center w-full">
        <div className="flex items-center gap-2 mr-10">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#9A3412' }}></div>
            <span className="text-sm text-gray-700">HR</span>
        </div>
        <div className="flex items-center gap-2 mr-10">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#F59E0B' }}></div>
            <span className="text-sm text-gray-700">Electricity</span>
        </div>
        <div className="flex items-center gap-2 mr-10">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#10B981' }}></div>
            <span className="text-sm text-gray-700">Other</span>
        </div>
        <div className="flex items-center gap-2 mr-10">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#3B82F6' }}></div>
            <span className="text-sm text-gray-700">Revenue</span>
        </div>
        </div>
        </div>
        
        {/* Spacer */}
        <div className="h-8"></div>
      </div>
    </div>
  );
}
