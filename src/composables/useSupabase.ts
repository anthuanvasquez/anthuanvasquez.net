import { createClient } from '@supabase/supabase-js';

export const useSupabase = () => {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.SUPABASE_URL as string;
  const supabaseKey = config.public.SUPABASE_KEY as string;

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    return { supabase };
  } catch (error) {
    return { supabase: null };
  }
};
