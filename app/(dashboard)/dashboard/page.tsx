'use client';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async (): Promise<void> => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-text-primary text-2xl font-bold">
        Welcome to the Dashboard
      </h1>
      <button
        onClick={handleLogout}
        className="px-6 py-2.5 rounded-[10px] bg-bg-card border border-border-default text-text-primary text-sm font-medium cursor-pointer hover:border-border-hover transition-colors duration-200"
      >
        Logout
      </button>
    </div>
  );
}
