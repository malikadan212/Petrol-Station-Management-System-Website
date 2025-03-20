import React from 'react';
import { useState } from 'react';
import {
    LayoutDashboard,
    Database,
    Users,
    UserCircle,
    Settings,
    FileText,
    HelpCircle,
} from 'lucide-react'; 

function Sidebar({ sidebarOpen }) {
    const [activeTab, setActiveTab] = useState('Dashboard');

    const renderContent = () => {
        switch (activeTab) {
            case 'Dashboard':
                return <div>Dashboard Content</div>;
            case 'Station':
                return <div>Station Content</div>;
            case 'Employee':
                return <div>Employee Content</div>;
            case 'Customer':
                return <div>Customer Content</div>;
            case 'Rate(Petrol/Diesel)':
                return <div>Rate Content</div>;
            case 'Reports':
                return <div>Reports Content</div>;
            case 'Help':
                return <div>Help Content</div>;
            default:
                return <div>Select a tab</div>;
        }
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <nav className="flex-1 px-2 py-4">
                <ul>
                    {[
                        { name: 'Dashboard', icon: <LayoutDashboard size={18} /> },
                        { name: 'Station', icon: <Database size={18} /> },
                        { name: 'Employee', icon: <Users size={18} /> },
                        { name: 'Customer', icon: <UserCircle size={18} /> },
                        { name: 'Rate(Petrol/Diesel)', icon: <Settings size={18} /> },
                        { name: 'Reports', icon: <FileText size={18} /> },
                        { name: 'Help', icon: <HelpCircle size={18} /> }
                    ].map((item, index) => (
                        <li key={index} className="mb-1">
                            <button
                                onClick={() => setActiveTab(item.name)}
                                className={`flex items-center px-4 py-3 text-sm rounded-lg ${
                                    activeTab === item.name
                                        ? 'bg-indigo-900 text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                <span className="mr-3">{item.icon}</span>
                                {sidebarOpen && <span>{item.name}</span>}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Main Content */}
            <div className="flex-1 p-4">
                {renderContent()}
            </div>
        </div>
    );
}

export default Sidebar;
