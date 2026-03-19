# BehindtheO

An exclusive behind-the-scenes content platform for Ohio State University athletics. Built with React Native and Expo, BehindtheO lets fans discover authentic content from OSU athletes across all 36 athletic programs.

---

## Features

- **Feed** — A personalized stream of athlete posts with photos, captions, and likes
- **Explore** — Browse content filtered by sport across all 36 OSU athletic programs
- **Saved** — Bookmark favorite content for later (backend integration ready)
- **Like system** — Toggle likes on individual posts
- **Sport filtering** — Filter explore feed by any of 36 OSU sports

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React Native 0.83.2 + Expo SDK ~55.0.8 |
| Routing | Expo Router ~55.0.6 (file-based) |
| Language | TypeScript 5.9.2 (strict mode) |
| Styling | NativeWind 2.x + Tailwind CSS 3.3.2 |
| Backend | Supabase (auth + database) |
| Media Storage | Cloudinary (photos + videos) |
| Storage | AsyncStorage (session persistence) |

---

## Project Structure

```
BehindtheO/
├── app/
│   ├── _layout.tsx          # Root stack navigation
│   └── (tabs)/
│       ├── _layout.tsx      # Bottom tab navigation
│       ├── index.tsx        # Feed screen
│       ├── explore.tsx      # Explore by sport
│       └── saved.tsx        # Saved content
├── components/
│   ├── FeedCard.tsx         # Athlete post card
│   └── SportBadge.tsx       # Sport pill badge
├── constants/
│   ├── colors.ts            # OSU brand colors
│   └── sports.ts            # 36 OSU sports with metadata
├── lib/
│   ├── supabase.ts          # Supabase client
│   └── cloudinary.ts        # Cloudinary client (photos + videos)
├── global.css               # Tailwind directives
├── tailwind.config.js       # Custom OSU theme colors
├── babel.config.js          # Babel + NativeWind plugin
└── metro.config.js          # Metro bundler config
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Expo Go app on your phone, or an iOS/Android simulator

### Installation

```bash
git clone https://github.com/SamWangTW/BehindtheO.git
cd BehindtheO
npm install
```

### Environment Variables

Create a `.env` file in the root with your credentials:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
EXPO_PUBLIC_CLOUDINARY_API_KEY=your_api_key
EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

### Running the App

```bash
# Start Expo dev server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run in browser
npm run web
```

---

## Brand Colors

| Name | Hex |
|---|---|
| Scarlet | `#BB0000` |
| Scarlet Dark | `#8B0000` |
| OSU Gray | `#666666` |
| Light Gray | `#F5F5F5` |

These are available as Tailwind utilities: `bg-scarlet`, `text-scarlet-dark`, `text-osu-gray`, `bg-osu-light-gray`.

---

## Supabase Setup

The Supabase client in [lib/supabase.ts](lib/supabase.ts) is configured with:
- AsyncStorage for persistent auth sessions
- Auto token refresh enabled
- Ready for real-time subscriptions, auth, and database queries

The current feed and explore screens use mock data that can be swapped out for live Supabase queries.

---

## Cloudinary Setup

Cloudinary is used for hosting all athlete photos and videos. Media URLs are stored in Supabase and served via Cloudinary's CDN.

To set up:
1. Create a free [Cloudinary](https://cloudinary.com) account
2. Create an **unsigned upload preset** in your Cloudinary dashboard (Settings → Upload → Upload Presets)
3. Add your credentials to `.env` (see Environment Variables above)

Media is uploaded directly from the client using the unsigned preset, keeping the API secret off the device.
