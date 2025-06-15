import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Mail, Lock, LogIn, AlertTriangle, UserPlus, KeyRound } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  console.log('LoginPage loaded');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    console.log('Login attempt:', { email, password, rememberMe });

    // Simulate API call
    if (email === 'user@example.com' && password === 'password') {
      // Simulate successful login
      console.log('Login successful');
      // In a real app, you'd set auth tokens here
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
            <LogIn className="mx-auto h-12 w-auto text-indigo-400" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-300">
                Or{' '}
                <Link to="/register" className="font-medium text-indigo-400 hover:text-indigo-300">
                    create a new account
                </Link>
            </p>
        </div>
        <Card className="bg-white/10 backdrop-blur-md shadow-2xl border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription className="text-gray-300">Enter your credentials to access your dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive" className="bg-red-500/20 border-red-500 text-red-300">
                  <AlertTriangle className="h-4 w-4 !text-red-300" />
                  <AlertTitle>Login Failed</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">Email address</Label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="pl-10 bg-gray-800/50 border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400"
                    />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-200">Password</Label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="pl-10 bg-gray-800/50 border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400"
                    />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    id="remember-me"
                    name="remember-me"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="h-4 w-4 text-indigo-500 border-gray-500 focus:ring-indigo-400 data-[state=checked]:bg-indigo-500 data-[state=checked]:text-white"
                  />
                  <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                    Remember me
                  </Label>
                </div>
                <div className="text-sm">
                  <Link to="/password-recovery" className="font-medium text-indigo-400 hover:text-indigo-300">
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div>
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white">
                  <LogIn className="mr-2 h-5 w-5" /> Sign in
                </Button>
              </div>
            </form>
            <Separator className="my-6 border-gray-600" />
            <div className="text-center">
                <p className="text-sm text-gray-300">Or continue with</p>
                <div className="mt-4 flex justify-center space-x-3">
                    {/* Placeholder for social login buttons */}
                    <Button variant="outline" className="w-full border-gray-600 hover:bg-gray-700/50 text-gray-300">
                        <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" alt="Google" className="mr-2 h-5 w-5"/>Google
                    </Button>
                    <Button variant="outline" className="w-full border-gray-600 hover:bg-gray-700/50 text-gray-300">
                         <img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="GitHub" className="mr-2 h-5 w-5"/>GitHub
                    </Button>
                </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center text-sm">
            <p className="text-gray-400">Don't have an account?</p>
            <Link to="/register" className="ml-1 font-medium text-indigo-400 hover:text-indigo-300">
              Sign up
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;