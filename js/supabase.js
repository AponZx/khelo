// REPLACE THESE WITH YOUR KEYS FROM SUPABASE DASHBOARD -> SETTINGS -> API
const SUPABASE_URL = 'https://gjeykhdxzdfzqgvskwhv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqZXlraGR4emRmenFndnNrd2h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4MTYxMjYsImV4cCI6MjA4NzM5MjEyNn0.kKuv51e71dMxB21w7LmyXj5EmZbSHFKFQ__HbfAv5qQ';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Helper: Check if admin
async function checkAdmin() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) window.location.href = '/';
  
  const { data } = await supabase.from('users').select('role').eq('id', user.id).single();
  if (!data || data.role !== 'admin') {
    alert("Access Denied");
    window.location.href = '/';
  }
}