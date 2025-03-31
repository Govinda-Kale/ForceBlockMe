Here’s the **README** content in a format that supports HTML-like syntax (such as in GitHub's Markdown):

```markdown
# 🚫 ForceBlockMe - The Ultimate Distraction Blocker

ForceBlockMe is a Chrome extension designed to help you stay focused and productive by blocking distracting websites. With customizable timers, focus modes, and category-based blocking, ForceBlockMe ensures that you stay on track and make the most of your time.

## 📂 Project Structure

```
ForceBlockMe/
├── .github/
├── assets/
├── dist/
├── docs/
├── public/
├── src/
│   ├── background/
│   ├── content/
│   ├── popup/
│   ├── blockpage/
│   ├── icons/
│   ├── scripts/
│   └── manifest.json
├── test/
├── .gitignore
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── package.json
└── webpack.config.js
```

## ✨ Features

- **Smart Timer Control:**
  - Visual countdown with a progress ring
  - Predefined focus sessions (25, 50, 60, 90, 120 minutes)
  - Custom timer input (5-120 minutes)

- **Focus Mode Categories:**
  - 🎓 Study Mode (50 min, blocks social media)
  - 💻 Deep Work (90 min, whitelists coding sites)
  - ✍️ Writing Sprint (25 min Pomodoro)

- **Dynamic Status System:**
  - Visual indicators for active, paused, and inactive states
  - Session analytics with streak tracking

- **Category-Based Blocking:**
  - Preloaded blocklists: Social Media, Entertainment, News, Shopping
  - Toggle whole categories or individual sites

- **Safety Features:**
  - Emergency pause (limited use)
  - Overtime warning
  - Undo and recovery options

- **Advanced Controls:**
  - Session stacking
  - Auto-scheduled breaks
  - Focus stats tracking

## 🚀 Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/ForceBlockMe.git
   ```
2. Navigate to the project directory:  
   ```bash
   cd ForceBlockMe
   ```
3. Install dependencies:  
   ```bash
   npm install
   ```
4. Build the extension:  
   ```bash
   npm run build
   ```
5. Load the unpacked extension in Chrome:
   - Open `chrome://extensions/`
   - Enable **Developer mode**
   - Click **Load unpacked** and select the `dist/` folder

## 🛠️ Usage

Click the **ForceBlockMe** icon in your Chrome toolbar. Choose a focus mode or set a custom timer. Select categories to block and start your session! Check session stats from the popup window.

## 📊 Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:  
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit:  
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:  
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request.

## ✅ Testing

Run tests using:  
```bash
npm test
```

## 🐛 Reporting Issues

If you encounter a bug or have a feature request, please open an issue on GitHub.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 💡 Acknowledgements

Thanks to all contributors and the open-source community for their invaluable support and ideas.
```

This format is suitable for Markdown files and supports HTML-like syntax when displayed on platforms like GitHub. Let me know if you need any more adjustments!
