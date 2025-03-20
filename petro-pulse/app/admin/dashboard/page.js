'use client';

import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  DatabaseIcon, 
  User,
  Users, 
  UserCircle, 
  Settings, 
  FileText, 
  HelpCircle,
  MoreHorizontal,
  Menu,
  Bell
} from 'lucide-react';
import Card from '@/components/ui/Card';
import EmployeeContent from '@/components/EmployeeContent';
import Dashboard from '@/components/Dashboard';
import StationContent from '@/components/StationContent';
import Notifications from '@/components/Notifications';
import RateScreen from '@/components/RateContent';
import HelpContent from '@/components/HelpContent'
import ReportsContent from '@/components/ReportContent'
import CustomerContent from '@/components/CustomerContent';


export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [adminData, setAdminData] = useState({
    name: 'Diljit Dosanjh',
    role: 'Admin',
    greeting: 'Good Morning, Diljit Paaji',
    totalMachines: 10,
    totalEmployees: 45,
    todaySales: 65000,
    todayExpenses: 5000,
    sales: {
      current: 500000,
      previous: 450000,
      percentChange: 12.5,
      trend: 'up'
    },
    expenses: {
      current: 50000,
      previous: 60000,
      percentChange: 20.5,
      trend: 'down'
    },
    newEmployees: [
      { 
        id: 1, 
        name: 'Shah Rukh Pumpwala', 
        role: 'Fuel Attendant', 
        shift: 'Morning', 
        status: 'Active', 
        email: 'srk@pump.com', 
        phone: '0300-1234567', 
        hireDate: '2021-05-10' 
      },
      { 
        id: 2, 
        name: 'Babar Nozzle', 
        role: 'Cashier', 
        shift: 'Evening', 
        status: 'Active', 
        email: 'babar.nozzle@pump.com', 
        phone: '0311-7654321', 
        hireDate: '2022-02-15' 
      }
    ],
    revenue: {
      type: 'Monthly',
      data: [
        { month: 'Jan', sales: 450, expenses: 200 },
        { month: 'Feb', sales: 350, expenses: 150 },
        { month: 'Mar', sales: 465, expenses: 220 },
        { month: 'Apr', sales: 150, expenses: 240 },
        { month: 'May', sales: 120, expenses: 190 },
        { month: 'Jun', sales: 430, expenses: 240 }
      ]
    },
    efficiency: {
      newSales: 28,
      expenses: 15,
      others: 13
    }
  });

  const renderContent = () => {
    switch(selectedSection) {
      case 'dashboard':
        return <Dashboard adminData={adminData} />;
      case 'station':
        return <StationContent />;
      case 'employee':
        return <EmployeeContent />;
      case 'customer':
        return <CustomerContent />;
      case 'rate':
        return <RateScreen />;
      case 'reports':
        return <ReportsContent />;
      case 'help':
        return <HelpContent />;
      default:
        return (
          <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {/* Default dashboard content */}
          </main>
        );
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navItems = [
    { key: 'dashboard', name: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { key: 'station', name: 'Station', icon: <DatabaseIcon size={18} /> },
    { key: 'employee', name: 'Employee', icon: <Users size={18} /> },
    { key: 'customer', name: 'Customer', icon: <UserCircle size={18} /> },
    { key: 'rate', name: 'Rate(Petrol/Diesel)', icon: <Settings size={18} /> },
    { key: 'reports', name: 'Reports', icon: <FileText size={18} /> },
    { key: 'help', name: 'Help', icon: <HelpCircle size={18} /> }
  ];

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Define toggleNotifications function
  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };


  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div 
        className={`fixed md:relative bg-white border-r border-gray-300 shadow-lg h-full transition-all duration-300 z-10 ${
          sidebarOpen ? 'w-64' : 'w-0 md:w-20 overflow-hidden'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="px-5 py-4 flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="Petrol Pump" className="h-12 w-9" />
              {sidebarOpen && (
                <span className="ml-8 text-blue-900 font-semibold">
                  Petro-Pulse
                </span>
              )}
            </div>
          </div>

          {/* User Profile */}
          <div className="mt-2 px-5 py-4 flex flex-col items-center border-b border-gray-200">
            <div 
              className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"
            >
              <User size={32} />
            </div>
            {sidebarOpen && (
              <div className="mt-2 text-center">
                <h3 className="text-gray-900 font-medium">{adminData.name}</h3>
                <p className="text-gray-500 text-sm">{adminData.role}</p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="mb-1">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedSection(item.key);
                    }}
                    className={`flex items-center px-4 py-3 text-sm rounded-lg ${
                      selectedSection === item.key 
                        ? 'bg-indigo-900 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {sidebarOpen && <span>{item.name}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={toggleSidebar}
              className="p-1 mr-4 rounded-md hover:bg-gray-300 focus:outline-none"
            >
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-indigo-900">{adminData.greeting}</h1>
              <p className="text-gray-500 text-sm">Welcome back, nice to see you again!</p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="relative">
              <span className="absolute right-0 top-0 h-2 w-2 bg-red-500 rounded-full"></span>
              <div className="relative">
                {/* Notification Button */}
                <button
                  onClick={toggleNotifications}
                  className="p-3 relative hover:bg-gray-100 rounded"
                >
                  <Bell size={28} className="text-gray-600" />
                  {/* Notification Badge */}
                  <span className="absolute top-2 right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
                    3
                  </span>
                </button>

                {/* Notifications Sidebar */}
                <Notifications isOpen={isNotificationsOpen} onClose={toggleNotifications} />
              </div>
            </div>
          </div>
        </header>

        {/* Render Content */}
        {renderContent()}
      </div>
    </div>
  );
}