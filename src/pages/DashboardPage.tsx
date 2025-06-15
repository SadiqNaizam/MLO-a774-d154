import React from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Activity, CreditCard, DollarSign, Users, Bell, Settings } from 'lucide-react';

const DashboardPage = () => {
  console.log('DashboardPage loaded');

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=johndoe' // Placeholder avatar
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <NavigationMenu isAuthenticated={true} />
      <div className="flex flex-1 pt-16"> {/* pt-16 for fixed NavigationMenu height */}
        <Sidebar className="fixed top-16 left-0 h-[calc(100vh-4rem)] z-40" /> {/* Sidebar height adjusted */}
        <main className="flex-1 p-6 md:ml-64"> {/* ml-64 for fixed Sidebar width */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                </Button>
                <Button variant="ghost" size="icon">
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                </Button>
                 <Avatar>
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
            </div>
          </div>

          {/* Stats Cards */}
          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">+180.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">+19% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">+201 since last hour</p>
              </CardContent>
            </Card>
          </section>

          {/* More content sections */}
          <section className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>An overview of recent user activities.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder for recent activity list */}
                <ul className="space-y-2 text-sm">
                  <li>User John Doe signed up.</li>
                  <li>User Jane Smith upgraded to Pro.</li>
                  <li>New report 'Q3 Financials' generated.</li>
                </ul>
                <Button variant="link" className="mt-4">View all activity</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                 <CardDescription>Perform common tasks quickly.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col space-y-2">
                <Button>Create New Report</Button>
                <Button variant="outline">Manage Users</Button>
                <Button variant="secondary">System Settings</Button>
              </CardContent>
            </Card>
          </section>
          
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;