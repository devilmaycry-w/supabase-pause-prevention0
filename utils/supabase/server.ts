// utils/supabase/server.ts ✅ Clean, backend-safe version

import { createClient } from '@supabase/supabase-js'

export function createClient() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}
