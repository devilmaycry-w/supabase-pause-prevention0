// app/api/keep-alive/route.ts
import { supabase } from '@/utils/supabase/client'

export async function GET() {
  const { error } = await supabase
    .from('keep_alive')
    .update({ updated_at: new Date().toISOString() })
    .eq('name', 'heartbeat')

  if (error) {
    return new Response(`Failed: ${error.message}`, { status: 500 })
  }

  return new Response('Supabase kept alive ✅', { status: 200 })
}
