import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, BarChart, Users } from 'lucide-react';

const ApplicationHomePage = () => {
  console.log('ApplicationHomePage loaded');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800">
      <NavigationMenu isAuthenticated={false} />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-black/50 py-16 rounded-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Welcome to <span className="text-indigo-400">MyApp</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300">
              The ultimate solution for managing your workflows, projects, and team collaboration. Streamline your tasks and boost productivity.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <Button size="lg" onClick={() => navigate('/register')} className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/login')} className="bg-white/20 hover:bg-white/30 text-white border-white/50 shadow-lg backdrop-blur-sm">
                Sign In
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center dark:bg-slate-700 dark:border-slate-600">
                <CardHeader>
                  <Zap className="mx-auto h-12 w-12 text-indigo-500 dark:text-indigo-400 mb-4" />
                  <CardTitle className="dark:text-white">Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">Experience unparalleled speed and efficiency in all your operations.</p>
                </CardContent>
              </Card>
              <Card className="text-center dark:bg-slate-700 dark:border-slate-600">
                <CardHeader>
                  <BarChart className="mx-auto h-12 w-12 text-indigo-500 dark:text-indigo-400 mb-4" />
                  <CardTitle className="dark:text-white">Powerful Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">Gain deep insights with our comprehensive data visualization tools.</p>
                </CardContent>
              </Card>
              <Card className="text-center dark:bg-slate-700 dark:border-slate-600">
                <CardHeader>
                  <Users className="mx-auto h-12 w-12 text-indigo-500 dark:text-indigo-400 mb-4" />
                  <CardTitle className="dark:text-white">Team Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">Work together seamlessly with integrated communication features.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-indigo-600 dark:bg-indigo-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Elevate Your Productivity?</h2>
            <p className="text-indigo-200 dark:text-indigo-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust MyApp to simplify their work and achieve more.
            </p>
            <Button size="lg" variant="outline" onClick={() => navigate('/register')} className="bg-white text-indigo-600 hover:bg-gray-100 border-transparent shadow-lg">
              Sign Up Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationHomePage;