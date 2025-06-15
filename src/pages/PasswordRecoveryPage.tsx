import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mail, KeyRound, AlertTriangle, CheckCircle, ArrowLeft } from 'lucide-react';

const PasswordRecoveryPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  console.log('PasswordRecoveryPage loaded');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    // Simulate API call for password recovery
    console.log('Password recovery attempt for:', email);
    setSuccess(`If an account exists for ${email}, a password reset link has been sent.`);
    setEmail(''); // Clear the input field
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
            <KeyRound className="mx-auto h-12 w-auto text-yellow-400" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                Forgot Your Password?
            </h2>
            <p className="mt-2 text-center text-sm text-gray-300">
                No problem. Enter your email address and we'll send you a reset link.
            </p>
        </div>
        <Card className="bg-white/10 backdrop-blur-md shadow-2xl border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Password Recovery</CardTitle>
            <CardDescription className="text-gray-300">Enter your email to receive a reset link.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive" className="bg-red-500/20 border-red-500 text-red-300">
                  <AlertTriangle className="h-4 w-4 !text-red-300" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {success && (
                <Alert variant="default" className="bg-blue-500/20 border-blue-500 text-blue-300">
                  <CheckCircle className="h-4 w-4 !text-blue-300" />
                  <AlertTitle>Instructions Sent</AlertTitle>
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="email-recovery" className="text-gray-200">Email address</Label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                        id="email-recovery"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="pl-10 bg-gray-800/50 border-gray-600 focus:ring-yellow-500 focus:border-yellow-500 text-white placeholder-gray-400"
                    />
                </div>
              </div>
              <div>
                <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 text-white">
                  <KeyRound className="mr-2 h-5 w-5" /> Send Reset Link
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link to="/login" className="text-sm font-medium text-yellow-400 hover:text-yellow-300 flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PasswordRecoveryPage;