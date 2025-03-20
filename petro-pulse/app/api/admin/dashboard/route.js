// app/api/admin/dashboard/route.js

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // This is a placeholder for database connection and query
    // When database is ready, uncomment and modify as needed
    
    /*
    // Database connection
    import { db } from '@/lib/db';
    
    // Get dashboard statistics
    const totalMachines = await db.machine.count();
    const totalEmployees = await db.employee.count();
    
    // Get today's sales and expenses
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const todaySales = await db.transaction.aggregate({
      _sum: {
        amount: true
      },
      where: {
        type: 'SALE',
        createdAt: {
          gte: today,
          lt: tomorrow
        }
      }
    });
    
    const todayExpenses = await db.transaction.aggregate({
      _sum: {
        amount: true
      },
      where: {
        type: 'EXPENSE',
        createdAt: {
          gte: today,
          lt: tomorrow
        }
      }
    });
    
    // Get yearly sales and expenses for comparison
    const lastYearSameDay = new Date(today);
    lastYearSameDay.setFullYear(lastYearSameDay.getFullYear() - 1);
    
    const currentYearSales = await db.transaction.aggregate({
      _sum: {
        amount: true
      },
      where: {
        type: 'SALE',
        createdAt: {
          gte: new Date(today.getFullYear(), 0, 1)
        }
      }
    });
    
    const previousYearSales = await db.transaction.aggregate({
      _sum: {
        amount: true
      },
      where: {
        type: 'SALE',
        createdAt: {
          gte: new Date(today.getFullYear() - 1, 0, 1),
          lt: new Date(today.getFullYear(), 0, 1)
        }
      }
    });
    
    const currentYearExpenses = await db.transaction.aggregate({
      _sum: {
        amount: true
      },
      where: {
        type: 'EXPENSE',
        createdAt: {
          gte: new Date(today.getFullYear(), 0, 1)
        }
      }
    });
    
    const previousYearExpenses = await db.transaction.aggregate({
      _sum: {
        amount: true
      },
      where: {
        type: 'EXPENSE',
        createdAt: {
          gte: new Date(today.getFullYear() - 1, 0, 1),
          lt: new Date(today.getFullYear(), 0, 1)
        }
      }
    });
    
    // Calculate percent changes
    const salesPercentChange = ((currentYearSales._sum.amount - previousYearSales._sum.amount) / previousYearSales._sum.amount) * 100;
    const expensesPercentChange = ((currentYearExpenses._sum.amount - previousYearExpenses._sum.amount) / previousYearExpenses._sum.amount) * 100;
    
    // Get new employees (added in the last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const newEmployees = await db.employee.findMany({
      where: {
        createdAt: {
          gte: thirtyDaysAgo
        }
      },
      select: {
        id: true,
        name: true,
        contactNumber: true,
        nozzleAssigned: true,
        status: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    // Get monthly revenue data
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentYear = today.getFullYear();
    
    const revenueData = await Promise.all(
      months.map(async (_, index) => {
        const startDate = new Date(currentYear, index, 1);
        const endDate = new Date(currentYear, index + 1, 0);
        
        const monthlySales = await db.transaction.aggregate({
          _sum: {
            amount: true
          },
          where: {
            type: 'SALE',
            createdAt: {
              gte: startDate,
              lte: endDate
            }
          }
        });
        
        const monthlyExpenses = await db.transaction.aggregate({
          _sum: {
            amount: true
          },
          where: {
            type: 'EXPENSE',
            createdAt: {
              gte: startDate,
              lte: endDate
            }
          }
        });
        
        return {
          month: months[index],
          sales: monthlySales._sum.amount || 0,
          expenses: monthlyExpenses._sum.amount || 0
        };
      })
    );
    
    // Calculate efficiency metrics
    const totalRevenue = revenueData.reduce((sum, month) => sum + month.sales, 0);
    const totalExpenses = revenueData.reduce((sum, month) => sum + month.expenses, 0);
    const totalOthers = totalRevenue * 0.15; // Example: 15% goes to other costs
    
    const totalSum = totalRevenue + totalExpenses + totalOthers;
    
    const efficiency = {
      newSales: Math.round((totalRevenue / totalSum) * 100),
      expenses: Math.round((totalExpenses / totalSum) * 100),
      others: Math.round((totalOthers / totalSum) * 100)
    };
    
    // Assemble dashboard data
    const dashboardData = {
      name: 'Uday Singh',
      role: 'Admin',
      greeting: getGreeting(),
      totalMachines,
      totalEmployees,
      todaySales: todaySales._sum.amount || 0,
      todayExpenses: todayExpenses._sum.amount || 0,
      sales: {
        current: currentYearSales._sum.amount || 0,
        previous: previousYearSales._sum.amount || 0,
        percentChange: parseFloat(salesPercentChange.toFixed(1)),
        trend: salesPercentChange >= 0 ? 'up' : 'down'
      },
      expenses: {
        current: currentYearExpenses._sum.amount || 0,
        previous: previousYearExpenses._sum.amount || 0,
        percentChange: parseFloat(Math.abs(expensesPercentChange).toFixed(1)),
        trend: expensesPercentChange >= 0 ? 'up' : 'down'
      },
      newEmployees: newEmployees.map(emp => ({
        id: emp.id,
        name: emp.name,
        contact: emp.contactNumber,
        nozzleAssigned: emp.nozzleAssigned,
        status: emp.status
      })),
      revenue: {
        type: 'Monthly',
        data: revenueData.slice(0, 6) // Just show first 6 months
      },
      efficiency
    };
    
    return NextResponse.json(dashboardData);
    */
    
    // Mock data for development until database is ready
    const mockData = {
      name: 'Uday Singh',
      role: 'Admin',
      greeting: getGreeting(),
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
        { id: 1, name: 'Mukesh Patidar', contact: '9555508100', nozzleAssigned: 'N 1', status: 'Active' },
        { id: 2, name: 'Sunil Yadav', contact: '8655508122', nozzleAssigned: 'N 2', status: 'Active' },
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
    };

    return NextResponse.json(mockData);
  } catch (error) {
    console.error('Dashboard data error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}

// Helper function to get appropriate greeting based on time of day
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning, Uday';
  if (hour < 18) return 'Good Afternoon, Uday';
  return 'Good Evening, Uday';
}