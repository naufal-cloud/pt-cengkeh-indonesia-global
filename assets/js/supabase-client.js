(() => {
  'use strict';

  const config = window.CIG_SUPABASE_CONFIG;

  if (!config?.url || !config?.publishableKey) {
    console.error('Konfigurasi Supabase belum tersedia.');
    return;
  }

  if (!window.supabase?.createClient) {
    console.error('Library Supabase belum dimuat.');
    return;
  }

  window.CIG_SUPABASE = window.supabase.createClient(
    config.url,
    config.publishableKey,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    }
  );
})();
