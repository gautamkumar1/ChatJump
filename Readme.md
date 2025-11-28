# ChatJump

Quickly navigate to your messages in long ChatGPT conversations. ChatJump is a Chrome extension that helps you jump to any message in your ChatGPT conversation with a single click.

## Features

- **Quick Navigation**: Instantly jump to any message in your ChatGPT conversation
- **Message Preview**: See a preview of each message before jumping
- **Smart Highlighting**: Messages are highlighted when you jump to them
- **User-Friendly**: Clean, modern interface that matches ChatGPT's design
- **Lightweight**: Minimal performance impact

## Installation

### Prerequisites

- Google Chrome, Microsoft Edge, or any Chromium-based browser
- Git (to clone the repository)

### Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/gautamkumar1/ChatJump.git
```

### Step 2: Navigate to the Extension Directory

```bash
cd ChatJump
```

### Step 3: Load the Extension in Your Browser

#### For Google Chrome:

1. Open Chrome and navigate to `chrome://extensions/`
   - Alternatively, go to **Menu** (three dots) → **Extensions** → **Manage extensions**
2. Enable **Developer mode** (toggle in the top-right corner)
3. Click **Load unpacked**
4. Select the `ChatJump` folder you just cloned
5. The extension should now appear in your extensions list

#### For Microsoft Edge:

1. Open Edge and navigate to `edge://extensions/`
2. Enable **Developer mode** (toggle in the left sidebar)
3. Click **Load unpacked**
4. Select the `ChatJump` folder you just cloned
5. The extension should now appear in your extensions list

#### For Other Chromium-based Browsers:

1. Navigate to your browser's extensions page (usually `browser://extensions/`)
2. Enable Developer mode
3. Click "Load unpacked" or "Load extension"
4. Select the `ChatJump` folder

### Step 4: Hard Refresh ChatGPT Page

After loading the extension, perform a hard refresh on your ChatGPT page to ensure the extension loads properly:

- **Windows/Linux**: Press `Ctrl + Shift + R` or `Ctrl + F5`
- **Mac**: Press `Cmd + Shift + R`

Alternatively:
1. Open ChatGPT in a new tab
2. Or close and reopen your existing ChatGPT tab

### Step 5: Verify Installation

1. Look for the ChatJump icon in your browser's extensions toolbar
2. Navigate to [chat.openai.com](https://chat.openai.com) or [chatgpt.com](https://chatgpt.com)
3. Start or open a conversation
4. Click the ChatJump extension icon to see your messages

## Usage

1. **Open ChatGPT**: Navigate to [chat.openai.com](https://chat.openai.com) or [chatgpt.com](https://chatgpt.com)
2. **Start a Conversation**: Begin chatting or open an existing conversation
3. **Open ChatJump**: Click the ChatJump extension icon in your browser toolbar
4. **Select a Message**: Click on any message in the popup to jump directly to it
5. **Navigate**: The extension will smoothly scroll to the selected message and highlight it

## How It Works

- ChatJump scans the current ChatGPT page for user messages
- It displays them in a popup with previews
- When you click a message, it smoothly scrolls to that message in the conversation
- The target message is temporarily highlighted for easy identification

## Requirements

- Chromium-based browser (Chrome, Edge, Brave, etc.)
- Active ChatGPT conversation page (chat.openai.com or chatgpt.com)

## Project Structure

```
ChatJump/
├── manifest.json      # Extension configuration
├── popup.html         # Extension popup UI
├── popup.js           # Popup logic and message rendering
├── content.js         # Content script for ChatGPT page interaction
├── content.css        # Styles for content script
├── icon16.png         # Extension icon (16x16)
├── icon48.png         # Extension icon (48x48)
├── icon128.png        # Extension icon (128x128)
└── Readme.md          # This file
```

## Troubleshooting

### Extension Not Working?

1. **Check if you're on ChatGPT**: Make sure you're on `chat.openai.com` or `chatgpt.com`
2. **Hard Refresh the Page**: Perform a hard refresh on the ChatGPT page:
   - **Windows/Linux**: Press `Ctrl + Shift + R` or `Ctrl + F5`
   - **Mac**: Press `Cmd + Shift + R`
3. **Check Extension Status**: Go to `chrome://extensions/` and ensure ChatJump is enabled
4. **Reload Extension**: Click the reload icon on the extension card in `chrome://extensions/`

### No Messages Showing?

- Make sure you have an active conversation with at least one user message
- Try performing a hard refresh on the ChatGPT page (`Ctrl + Shift + R` on Windows/Linux, `Cmd + Shift + R` on Mac)
- Click the extension icon again to refresh the message list

## Development

### Making Changes

1. Edit the files in the `ChatJump` directory
2. Go to `chrome://extensions/`
3. Click the reload icon on the ChatJump extension card
4. Test your changes on a ChatGPT page

### Testing

1. Open a ChatGPT conversation with multiple messages
2. Click the extension icon
3. Verify that all user messages are listed
4. Click on different messages to test navigation

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available for use.

## Support

If you encounter any issues or have suggestions, please open an issue on the [GitHub repository](https://github.com/gautamkumar1/ChatJump).

---

**Enjoy navigating your ChatGPT conversations more efficiently! **
