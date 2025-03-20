import React, { useState } from 'react';
import { Eye, Pencil, X, Save, User, Briefcase, UserPlus, DollarSign, Calendar, CheckCircle, TrendingUp } from 'lucide-react';
import Card from '@/components/ui/Card';

export default function EmployeeContent(){
  const [employees, setEmployees] = useState([
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
    },
    { 
      id: 3, 
      name: 'Ayesha Omar Petrolia', 
      role: 'Manager', 
      shift: 'Night', 
      status: 'On Leave', 
      email: 'ayesha.omar@pump.com', 
      phone: '0333-9876543', 
      hireDate: '2020-11-01' 
    },
    { 
      id: 4, 
      name: 'Wasim Akram Fueler', 
      role: 'Maintenance Technician', 
      shift: 'Morning', 
      status: 'Active', 
      email: 'wasim.akram@pump.com', 
      phone: '0321-1122334', 
      hireDate: '2023-03-20' 
    },
    { 
      id: 5, 
      name: 'Mahira Tankwala', 
      role: 'Customer Service Representative', 
      shift: 'Evening', 
      status: 'Active', 
      email: 'mahira.tank@pump.com', 
      phone: '0345-5566778', 
      hireDate: '2022-08-12' 
    },
    { 
      id: 6, 
      name: 'Shoaib Malik Diesel', 
      role: 'Security Guard', 
      shift: 'Night', 
      status: 'Active', 
      email: 'shoaib.malik@pump.com', 
      phone: '0301-9988776', 
      hireDate: '2021-12-25' 
    },
    { 
      id: 7, 
      name: 'Fawad Khan Pumpstar', 
      role: 'Inventory Manager', 
      shift: 'Morning', 
      status: 'On Leave', 
      email: 'fawad.khan@pump.com', 
      phone: '0332-4433221', 
      hireDate: '2020-09-14' 
    },
    { 
      id: 8, 
      name: 'Sana Mir Octane', 
      role: 'Shift Supervisor', 
      shift: 'Evening', 
      status: 'Active', 
      email: 'sana.mir@pump.com', 
      phone: '0312-7788990', 
      hireDate: '2023-01-05' 
    },
    { 
      id: 9, 
      name: 'Ali Zafar Fuelstar', 
      role: 'Lube Technician', 
      shift: 'Night', 
      status: 'Active', 
      email: 'ali.zafar@pump.com', 
      phone: '0305-6655443', 
      hireDate: '2022-06-30' 
    },
    { 
      id: 10, 
      name: 'Meera Jetpump', 
      role: 'Customer Service Representative', 
      shift: 'Morning', 
      status: 'Active', 
      email: 'meera.jet@pump.com', 
      phone: '0344-1234567', 
      hireDate: '2021-04-18' 
    },
  ]);
  
  // State for modals
  const [viewModal, setViewModal] = useState({ open: false, employee: null });
  const [editModal, setEditModal] = useState({ open: false, employee: null });
  const [editForm, setEditForm] = useState({});

  // Employee Modules Data
  const employeeModules = [
    {
      title: 'Add / Remove Employees',
      description: 'Manage employee records by adding new hires or removing departed staff.',
      icon: <UserPlus size={24} className="text-indigo-600" />,
      actionText: 'Manage Employees'
    },
    {
      title: 'Salary Management',
      description: 'Set and update salaries, benefits, and deductions.',
      icon: <DollarSign size={24} className="text-green-600" />,
      actionText: 'Set Salaries'
    },
    {
      title: 'Shift Scheduling & Attendance',
      description: 'Assign shifts, track attendance, and monitor overtime.',
      icon: <Calendar size={24} className="text-blue-600" />,
      actionText: 'Schedule Shifts'
    },
    {
      title: 'Leave Management',
      description: 'Review and approve leave requests seamlessly.',
      icon: <CheckCircle size={24} className="text-yellow-600" />,
      actionText: 'Manage Leave'
    },
    {
      title: 'Performance Reviews & KPIs',
      description: 'Evaluate performance and monitor key metrics.',
      icon: <TrendingUp size={24} className="text-purple-600" />,
      actionText: 'Review Performance'
    },
  ];

  // Open view modal
  const handleView = (employee) => {
    setViewModal({ open: true, employee });
  };

  // Open edit modal
  const handleEdit = (employee) => {
    setEditModal({ open: true, employee });
    setEditForm({ ...employee });
  };

  // Close any modal
  const closeModal = () => {
    setViewModal({ open: false, employee: null });
    setEditModal({ open: false, employee: null });
  };

  // Handle form changes
  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  // Save changes
  const saveChanges = () => {
    setEmployees(employees.map(emp => 
      emp.id === editForm.id ? editForm : emp
    ));
    closeModal();
  };

  // Count active employees
  const activeEmployees = employees.filter(emp => emp.status === 'Active').length;
  const onDutyEmployees = 32; // Replace with actual calculation if needed

  return (
    // Outer container with min-h-screen and overflow-y-auto for vertical scrolling
    <div className="overflow-y-auto bg-gray-100 p-4">
      <div className="text-white">
        <h2 className="text-indigo-900 text-xl font-semibold mb-4">Employee Management</h2>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4 flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Active Employees</p>
              <h2 className="text-2xl font-bold text-indigo-900 mt-1">{activeEmployees}</h2>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <User className="text-green-600" size={24} />
            </div>
          </Card>
          <Card className="p-4 flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">On Duty</p>
              <h2 className="text-2xl font-bold text-indigo-900 mt-1">{onDutyEmployees}</h2>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Briefcase className="text-blue-600" size={24} />
            </div>
          </Card>
        </div>
        
        {/* Employee Table */}
        <div className="rounded-lg overflow-hidden mb-8">
          <div className="max-h-[400px] overflow-y-auto">
            <table className="w-full text-left bg-white text-indigo-900">
              <thead>
                <tr className="bg-gray-200 sticky top-0 z-10">
                  <th className="p-3">ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Shift</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id} className="border-t border-gray-400 hover:bg-gray-600 hover:text-white">
                    <td className="p-3">{employee.id}</td>
                    <td className="p-3">{employee.name}</td>
                    <td className="p-3">{employee.role}</td>
                    <td className="p-3">{employee.shift}</td>
                    <td className="p-3">
                      <span className={`text-white px-2 py-1 rounded text-xs ${employee.status === 'Active' ? 'bg-green-700' : 'bg-yellow-700'}`}>
                        {employee.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleView(employee)}
                        className="text-blue-400 hover:text-blue-300 p-1"
                        aria-label="View employee"
                      >
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={() => handleEdit(employee)} 
                        className="text-green-400 hover:text-green-300 p-1 ml-2"
                        aria-label="Edit employee"
                      >
                        <Pencil size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* View Modal */}
        {viewModal.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 backdrop-blur-sm" onClick={closeModal}></div>
            <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md relative z-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Employee Details</h3>
                <button onClick={closeModal} className="p-1 hover:text-gray-400">
                  <X size={20} />
                </button>
              </div>
              {viewModal.employee && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400">Name</p>
                      <p>{viewModal.employee.name}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400">ID</p>
                      <p>{viewModal.employee.id}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400">Role</p>
                      <p>{viewModal.employee.role}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400">Shift</p>
                      <p>{viewModal.employee.shift}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400">Status</p>
                      <p>{viewModal.employee.status}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400">Hire Date</p>
                      <p>{viewModal.employee.hireDate}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400">Email</p>
                      <p>{viewModal.employee.email}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400">Phone</p>
                      <p>{viewModal.employee.phone}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Edit Modal */}
        {editModal.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 backdrop-blur-sm" onClick={closeModal}></div>
            <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md relative z-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Edit Employee</h3>
                <button onClick={closeModal} className="p-1 hover:text-gray-400">
                  <X size={20} />
                </button>
              </div>
              {editForm && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={editForm.name || ''} 
                        onChange={handleChange}
                        className="w-full bg-gray-700 p-2 rounded"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400">Role</label>
                      <input 
                        type="text" 
                        name="role" 
                        value={editForm.role || ''} 
                        onChange={handleChange}
                        className="w-full bg-gray-700 p-2 rounded"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400">Shift</label>
                      <input 
                        type="text" 
                        name="shift" 
                        value={editForm.shift || ''} 
                        onChange={handleChange}
                        className="w-full bg-gray-700 p-2 rounded"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400">Status</label>
                      <select 
                        name="status" 
                        value={editForm.status || 'Active'} 
                        onChange={handleChange}
                        className="w-full bg-gray-700 p-2 rounded"
                      >
                        <option value="Active">Active</option>
                        <option value="On Leave">On Leave</option>
                        <option value="Terminated">Terminated</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={editForm.email || ''} 
                        onChange={handleChange}
                        className="w-full bg-gray-700 p-2 rounded"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400">Phone</label>
                      <input 
                        type="text" 
                        name="phone" 
                        value={editForm.phone || ''} 
                        onChange={handleChange}
                        className="w-full bg-gray-700 p-2 rounded"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400">Hire Date</label>
                      <input 
                        type="date" 
                        name="hireDate" 
                        value={editForm.hireDate || ''} 
                        onChange={handleChange}
                        className="w-full bg-gray-700 p-2 rounded"
                      />
                    </div>
                  </div>
    
                  <div className="mt-6 flex justify-end">
                    <button 
                      onClick={closeModal} 
                      className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500 mr-2"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={saveChanges} 
                      className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 flex items-center"
                    >
                      <Save size={16} className="mr-1" /> Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* New Section: Employee Modules at Bottom */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Employee Modules</h3>
          {/* Horizontal scroll container */}
          <div className="w-full overflow-x-auto">
            <div style={{ minWidth: '1200px' }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {employeeModules.map((module, idx) => (
                <Card key={idx} className="p-6 flex flex-col justify-between hover:shadow-xl transition-shadow bg-white">
                  <div>
                    <div className="mb-2">
                      {module.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{module.title}</h2>
                    <p className="text-gray-600">{module.description}</p>
                  </div>
                  <button className="mt-4 bg-indigo-600 text-white font-medium px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                    {module.actionText}
                  </button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}