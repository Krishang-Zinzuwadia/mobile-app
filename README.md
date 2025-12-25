# Audio Lore - React Native Audiobook App

A beautiful React Native mobile application for managing and listening to audiobooks.

## Features

- **Bookshelf Grid Layout**: Browse your audiobook collection in a beautiful 2-column grid layout
- **Playback Controls**: Play/pause, speed control (0.75x - 2x), and progress tracking
- **Real-time Transcripts**: Follow along with synchronized text transcripts
- **Dark Theme**: Eye-friendly dark interface with custom purple accent color
- **Settings**: Manage uploads, appearance preferences, and playback settings
- **Bottom Navigation**: Easy navigation between Home, Listen, and Settings screens

## Tech Stack

- React Native with Expo
- TypeScript
- React Navigation (Bottom Tabs)
- Expo Linear Gradient for beautiful gradients
- Expo Vector Icons for iconography

## Color Palette

- Primary Purple: `#3713ec`
- Background Light: `#f6f6f8`
- Dark Background: `#131022`
- Secondary Dark: `#1d1c27`
- White: `#ffffff`

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo Go app on your mobile device (for testing)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the Expo development server:
```bash
npm start
```

3. Scan the QR code with Expo Go app (Android) or Camera app (iOS)

### Running on Specific Platforms

```bash
# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web
```

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── BookCard.tsx
│   ├── BottomTabBar.tsx
│   ├── PlaybackControls.tsx
│   └── TranscriptDisplay.tsx
├── screens/            # Main application screens
│   ├── HomeScreen.tsx
│   ├── ListenScreen.tsx
│   └── SettingsScreen.tsx
├── constants/          # App-wide constants
│   ├── colors.ts
│   ├── spacing.ts
│   └── typography.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── data/               # Mock data
│   └── mockData.ts
└── assets/             # Images and other assets
```

## Screens

### Home Screen
- Displays audiobooks in a 2-column grid bookshelf layout
- Sections: "Ready to Listen" and "My Uploads"
- Shows book covers with progress indicators
- Tap any book to navigate to the Listen screen

### Listen Screen
- Displays currently playing audiobook
- Playback controls (play/pause, skip, speed adjustment)
- Real-time transcript display with highlighted current text
- Progress bar with time indicators

### Settings Screen
- Upload audiobook functionality (UI only)
- Theme preferences (Dark/Light mode toggle)
- Playback settings (auto-play, Wi-Fi downloads)
- About section with app information

## Mock Data

The app includes 10 sample audiobooks with:
- Diverse titles and authors
- Various durations and progress states
- Color-coded book covers
- Sample transcript segments

## Notes

- This is a UI-only implementation
- No actual audio playback functionality yet
- No backend integration
- File uploads are placeholder UI only
- All data is mock data for demonstration

## Future Enhancements

- [ ] Actual audio playback with Expo AV
- [ ] Backend integration for user accounts
- [ ] Real file upload functionality
- [ ] Bookmarks and notes
- [ ] Sleep timer
- [ ] Offline downloads
- [ ] Search and filtering
- [ ] Multiple playlists

## License

MIT
