import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Supabase 설정이 없으면 더미 클라이언트 생성
const createDummyClient = () => {
  const dummyResponse = { data: null, error: { message: 'Supabase not configured' } };
  const dummyAuth = {
    getSession: async () => ({ data: { session: null }, error: null }),
    signInWithPassword: async () => dummyResponse,
    signUp: async () => dummyResponse,
    signOut: async () => ({ error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
  };
  const dummyQuery = {
    select: () => dummyQuery,
    eq: () => dummyQuery,
    order: () => dummyQuery,
    insert: () => dummyQuery,
    delete: () => dummyQuery,
    single: () => Promise.resolve(dummyResponse),
    then: (resolve: (value: typeof dummyResponse) => void) => Promise.resolve(dummyResponse).then(resolve),
  };
  const dummyStorage = {
    from: () => ({
      upload: async () => dummyResponse,
      getPublicUrl: () => ({ data: { publicUrl: '' } }),
    }),
  };
  return {
    auth: dummyAuth,
    from: () => dummyQuery,
    storage: dummyStorage,
  } as unknown as SupabaseClient;
};

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createDummyClient();

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

// 타입 정의
export type Database = {
  public: {
    Tables: {
      prefectures: {
        Row: {
          id: string;
          name_ko: string;
          name_ja: string;
          region: string;
        };
      };
      sakes: {
        Row: {
          id: string;
          name_ko: string;
          name_ja: string;
          prefecture_id: string;
          brewery: string;
          type: string;
          description: string | null;
          image_url: string | null;
          avg_rating: number | null;
          created_at: string;
          created_by: string | null;
        };
        Insert: {
          id?: string;
          name_ko: string;
          name_ja: string;
          prefecture_id: string;
          brewery: string;
          type: string;
          description?: string | null;
          image_url?: string | null;
          created_by?: string | null;
        };
      };
      reviews: {
        Row: {
          id: string;
          sake_id: string;
          user_id: string;
          rating: number;
          comment: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          sake_id: string;
          user_id: string;
          rating: number;
          comment?: string | null;
        };
      };
    };
  };
};
