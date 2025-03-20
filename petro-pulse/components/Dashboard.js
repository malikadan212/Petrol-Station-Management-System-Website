// components/Dashboard.js
'use client';

import { 
  DatabaseIcon,
  Users,
  MoreHorizontal,
  ChevronDown,
} from 'lucide-react';
import Card from '@/components/ui/Card';


const Dashboard = ({ adminData }) => {
  return (
    <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Total Machines */}
        <Card className="p-4 flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-sm font-medium">Total Machines</p>
            <h2 className="text-3xl font-bold text-indigo-900 mt-1">{adminData.totalMachines}</h2>
          </div>
          <div className="bg-indigo-100 p-3 rounded-md">
            <DatabaseIcon className="text-indigo-600" size={24} />
          </div>
        </Card>

        {/* Total Employees */}
        <Card className="p-4 flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-sm font-medium">Total Employees</p>
            <h2 className="text-3xl font-bold text-indigo-900 mt-1">{adminData.totalEmployees}</h2>
          </div>
          <div className="bg-indigo-100 p-3 rounded-md">
            <Users className="text-indigo-600" size={24} />
          </div>
        </Card>

        {/* Today's Sales */}
        <Card className="p-4">
          <p className="text-gray-600 text-sm font-medium">Today's Sales</p>
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold text-indigo-900 mt-1">Rs. {adminData.todaySales.toLocaleString()}</h2>
            <div className="w-24 h-12 relative">
              <svg viewBox="0 0 100 40" className="w-full h-full text-green-500">
                <path 
                  d="M0,35 L10,30 L20,32 L30,25 L40,28 L50,20 L60,15 L70,18 L80,10 L90,5 L100,8" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
                <path 
                  d="M0,35 L10,30 L20,32 L30,25 L40,28 L50,20 L60,15 L70,18 L80,10 L90,5 L100,8 L100,40 L0,40 Z" 
                  fill="currentColor" 
                  fillOpacity="0.1"
                />
              </svg>
            </div>
          </div>
        </Card>

        {/* Today's Expenses */}
        <Card className="p-4">
          <p className="text-gray-600 text-sm font-medium">Today's Expenses</p>
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold text-indigo-900 mt-1">Rs. {adminData.todayExpenses.toLocaleString()}</h2>
            <div className="w-24 h-12 relative">
              <svg viewBox="0 0 100 40" className="w-full h-full text-red-500">
                <path 
                  d="M0,10 L10,15 L20,8 L30,20 L40,15 L50,25 L60,20 L70,28 L80,25 L90,32 L100,28" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
                <path 
                  d="M0,10 L10,15 L20,8 L30,20 L40,15 L50,25 L60,20 L70,28 L80,25 L90,32 L100,28 L100,40 L0,40 Z" 
                  fill="currentColor" 
                  fillOpacity="0.1"
                />
              </svg>
            </div>
          </div>
        </Card>

        {/* Sales Card */}
        <Card className="p-4">
          <h3 className="text-gray-600 font-medium mb-2">Sales</h3>
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-indigo-900">Rs. {adminData.sales.current.toLocaleString()}</h2>
            <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
              adminData.sales.trend === 'up' 
                ? 'bg-green-100 text-green-600' 
                : 'bg-red-100 text-red-600'
            }`}>
              {adminData.sales.percentChange}% {adminData.sales.trend === 'up' ? '↑' : '↓'}
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Compared to ({adminData.sales.previous.toLocaleString()} last year)
          </p>
        </Card>
        
        {/* Expenses Card */}
        <Card className="p-4">
          <h3 className="text-gray-600 font-medium mb-2">Expenses</h3>
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-indigo-900">Rs. {adminData.expenses.current.toLocaleString()}</h2>
            <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
              adminData.expenses.trend === 'down' 
                ? 'bg-green-100 text-green-600' 
                : 'bg-red-100 text-red-600'
            }`}>
              {adminData.expenses.percentChange}% {adminData.expenses.trend === 'down' ? '↓' : '↑'}
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Compared to ({adminData.expenses.previous.toLocaleString()} last year)
          </p>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Revenue Chart */}
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-800 font-medium">Revenue</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal size={18} />
            </button>
          </div>
          
          <div className="flex items-center mb-4">
            <span className="text-sm font-medium">{adminData.revenue.type}</span>
            <ChevronDown size={16} className="ml-1" />
          </div>
          
          <div className="h-64">
            <div className="h-full w-full flex">
              {adminData.revenue.data.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col justify-end items-center space-y-2">
                  <div className="relative w-full flex justify-center">
                    {item.month === 'Mar' && (
                      <div className="absolute -top-8 bg-indigo-900 text-white text-xs px-2 py-1 rounded">
                        Rs. 465
                      </div>
                    )}
                    <div 
                      className="w-6 bg-indigo-900" 
                      style={{ height: `${(item.sales / 500) * 100}%` }}
                    ></div>
                  </div>
                  <div 
                    className="w-6 bg-red-400" 
                    style={{ height: `${(item.expenses / 500) * 100}%` }}
                  ></div>
                  <span className="text-xs text-gray-500">{item.month}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-4 space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-indigo-900 mr-2"></div>
              <span className="text-xs text-gray-600">Sales</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
              <span className="text-xs text-gray-600">Expense</span>
            </div>
          </div>
        </Card>
        
        {/* Efficiency Chart */}
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-800 font-medium">Efficiency</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal size={18} />
            </button>
          </div>
          
          <div className="h-64 flex justify-center items-center">
            <div className="relative h-48 w-48">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ec6362" strokeWidth="20" strokeDasharray="251.2 251.2" strokeDashoffset="0" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b3fe7" strokeWidth="20" strokeDasharray="251.2 251.2" strokeDashoffset="62.8" transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f97315" strokeWidth="20" strokeDasharray="251.2 251.2" strokeDashoffset="188.4" transform="rotate(-90 50 50)" />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-indigo-900"></div>
            </div>
          </div>
          
          <div className="flex justify-between mt-4">
            <div className="text-center">
              <div className="text-lg font-bold text-indigo-900">{adminData.efficiency.newSales}%</div>
              <div className="text-xs text-indigo-900">New Sales</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-red-500">{adminData.efficiency.expenses}%</div>
              <div className="text-xs text-red-500">Expenses</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-orange-500">{adminData.efficiency.others}%</div>
              <div className="text-xs text-orange-500">Others</div>
            </div>
          </div>
        </Card>
      </div>
      
      {/* New Employees Table */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-gray-800 font-medium">New Employees</h3>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S. No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {adminData.newEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {employee.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;