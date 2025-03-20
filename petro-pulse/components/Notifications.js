// components/Notifications.js
import React from 'react';

const Notifications = ({ isOpen, onClose }) => {
  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: 'Government Price Change',
      message: 'The government has updated fuel prices effective immediately.',
      date: '2023-10-15',
      read: false,
      type: 'urgent', // Added type for styling
    },
    {
      id: 2,
      title: 'System Maintenance',
      message: 'Scheduled maintenance on Oct 20, 2023, from 2:00 AM to 4:00 AM.',
      date: '2023-10-14',
      read: true,
      type: 'info',
    },
    {
      id: 3,
      title: 'New Feature Added',
      message: 'You can now track fuel consumption in real-time.',
      date: '2023-10-13',
      read: true,
      type: 'feature',
    },
    // Add more notifications to test scrolling
    {
      id: 4,
      title: 'New Update Available',
      message: 'A new version of the app is available for download.',
      date: '2023-10-12',
      read: false,
      type: 'info',
    },
    {
      id: 5,
      title: 'Price Drop Alert',
      message: 'Diesel prices have dropped by 5%.',
      date: '2023-10-11',
      read: false,
      type: 'urgent',
    },
  ];

  // Notification type colors
  const typeColors = {
    urgent: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
    feature: 'bg-green-100 text-green-800',
  };

  return (
    <>
      {/* Backdrop (optional) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={onClose}
        />
      )}

      {/* Notifications Panel */}
      {isOpen && (
        <div
          className="fixed top-4 right-4 w-96 bg-white shadow-2xl rounded-lg z-50"
          style={{ maxHeight: 'calc(100vh - 32px)' }}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-t-lg">
            <h2 className="text-lg font-bold text-white">Notifications</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Notification List */}
          <div className="overflow-y-auto" style={{ maxHeight: '400px' }}>
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b ${
                  notification.read ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                {/* Notification Type Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      typeColors[notification.type] || 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {notification.type === 'urgent' ? 'Urgent' : notification.type === 'info' ? 'Info' : 'New Feature'}
                  </span>
                  {!notification.read && (
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </div>

                {/* Notification Content */}
                <h3 className="font-semibold text-gray-800">{notification.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-2">{notification.date}</p>
              </div>
            ))}
          </div>

          {/* Footer (Optional) */}
          <div className="p-4 border-t">
            <button className="w-full text-center text-indigo-600 hover:text-indigo-700">
              Mark All as Read
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Notifications;