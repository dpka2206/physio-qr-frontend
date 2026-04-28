'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const endpoint = isLogin ? '/auth/login' : '/auth/register';
            const res = await fetch(`${API_URL}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, full_name: 'Dr. Physio' }) // sending a default name for register since schema might require it, or it will be set in settings
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.detail || data.message || "Authentication failed");
            }

            if (data.access_token) {
                localStorage.setItem('supabase_token', data.access_token);
                router.push('/dashboard');
            } else {
                // For register, it might require email confirmation
                setError('Registration successful! Check your email to confirm, then log in.');
                setIsLogin(true);
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center flex-col py-12 sm:px-6 lg:px-8 overflow-hidden hero-gradient">
            {/* Background elements to match the Hero */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/40 pointer-events-none" />
            <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-drift-slow" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-3xl animate-drift-slower" />

            <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md text-center">
                <Link href="/" className="inline-flex items-center gap-2 mb-6">
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-white/10">
                        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><rect width="8" height="8" x="7" y="7" /><line x1="17" y1="17" x2="17" y2="17" /><line x1="13" y1="13" x2="13" y2="13" /></svg>
                    </span>
                    <span className="font-display text-2xl text-white">PhysioQR</span>
                </Link>
                <h2 className="text-3xl font-display text-white tracking-tight">
                    {isLogin ? 'Welcome back' : 'Create your account'}
                </h2>
                <p className="mt-2 text-sm text-white/60">
                    {isLogin ? 'Sign in to access your prescriptions.' : 'Start prescribing exercises instantly.'}
                </p>
            </div>

            <div className="relative z-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="glass-dark py-8 px-4 sm:rounded-3xl border border-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className={`p-3 rounded-lg text-sm font-medium border backdrop-blur-md ${error.includes('successful') ? 'bg-secondary/10 text-secondary border-secondary/20' : 'bg-destructive/10 text-red-300 border-destructive/20'}`}>
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-white/80">Email address</label>
                            <div className="mt-1.5">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl shadow-inner placeholder-white/30 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all sm:text-sm"
                                    placeholder="doctor@clinic.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white/80">Password</label>
                            <div className="mt-1.5">
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl shadow-inner placeholder-white/30 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all sm:text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-sm font-semibold text-ink bg-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ink focus:ring-secondary transition-colors disabled:opacity-50"
                            >
                                {loading ? 'Authenticating...' : (isLogin ? 'Sign in to dashboard' : 'Register securely')}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-center border-t border-white/10 pt-6">
                        <button
                            onClick={() => { setIsLogin(!isLogin); setError(''); }}
                            className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                        >
                            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
