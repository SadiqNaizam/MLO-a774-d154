import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mail, Lock, UserPlus, AlertTriangle, Eye, EyeOff } from 'lucide-react';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  console.log('RegistrationPage loaded');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    // Simulate API call for registration
    console.log('Registration attempt:', { email, password });
    setSuccess('Registration successful! Please log in.');
    // setTimeout(() => navigate('/login'), 2000); // Redirect after a short delay
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
         <div className="text-center">
            <UserPlus className="mx-auto h-12 w-auto text-green-400" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-300">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-green-400 hover:text-green-300">
                    Sign in
                </Link>
            </p>
        </div>
        <Card className="bg-white/10 backdrop-blur-md shadow-2xl border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Register</CardTitle>
            <CardDescription className="text-gray-300">Create a new account to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive" className="bg-red-500/20 border-red-500 text-red-300">
                  <AlertTriangle className="h-4 w-4 !text-red-300" />
                  <AlertTitle>Registration Failed</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {success && (
                <Alert variant="default" className="bg-green-500/20 border-green-500 text-green-300">
                  <UserPlus className="h-4 w-4 !text-green-300" />
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="email-register" className="text-gray-200">Email address</Label>
                 <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                        id="email-register"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="pl-10 bg-gray-800/50 border-gray-600 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
                    />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-register" className="text-gray-200">Password</Label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                        id="password-register"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                        className="pl-10 pr-10 bg-gray-800/50 border-gray-600 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200">
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-gray-200">Confirm Password</Label>
                 <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                        id="confirm-password"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        autoComplete="new-password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10 bg-gray-800/50 border-gray-600 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
                    />
                     <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200">
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                </div>
              </div>
              <div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 focus:ring-green-500 text-white">
                  <UserPlus className="mr-2 h-5 w-5" /> Create Account
                </Button>
              </div>
            </form>
          </CardContent>
           <CardFooter className="flex justify-center text-sm">
            <p className="text-gray-400">Already have an account?</p>
            <Link to="/login" className="ml-1 font-medium text-green-400 hover:text-green-300">
              Sign In
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegistrationPage;