## 🧊 Supabase Pause Prevention

Prevents your Supabase free-tier project from pausing due to 7-day inactivity by pinging it periodically via Vercel CRON.

### ✅ Features
- Keeps Supabase project alive on the free tier.
- Pings one or multiple Supabase endpoints via CRON.
- Lightweight and serverless – runs on Vercel.
- Optional insert/delete support to simulate activity.

### 🛠 How It Works
- Vercel CRON hits the `/api/keep-alive` endpoint.
- The endpoint makes a minimal DB call to Supabase.
- This activity keeps the database from being paused.

### ⚙️ Setup Summary
1. Fork or clone this repo.
2. Deploy to Vercel.
3. Add your Supabase project info as environment variables.
4. Configure CRON job in Vercel to hit `/api/keep-alive`.

### 🔁 Example CRON
```cron
0 5 * * 0,3,5
# Runs 5AM UTC on Sun, Wed, Fri
```
---

Originally developed by 🙏 [travisvn/supabase-pause-prevention](https://github.com/travisvn/supabase-pause-prevention)

Modified and reused under MIT License
