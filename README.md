<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ForceBlockMe - The Ultimate Distraction Blocker</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: auto;
            padding: 20px;
        }

        h1, h2, h3 {
            color: #333;
        }

        code {
            background-color: #f4f4f4;
            padding: 3px 6px;
            border-radius: 3px;
            font-size: 0.9em;
        }

        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow: auto;
        }

        ul, ol {
            margin: 10px 0 20px 20px;
        }

        blockquote {
            margin: 20px 0;
            padding: 10px;
            background-color: #f9f9f9;
            border-left: 5px solid #ccc;
        }
    </style>
</head>
<body>
    <h1>🚫 ForceBlockMe - The Ultimate Distraction Blocker</h1>
    <p>ForceBlockMe is a Chrome extension designed to help you stay focused and productive by blocking distracting websites. With customizable timers, focus modes, and category-based blocking, ForceBlockMe ensures that you stay on track and make the most of your time.</p>

    <h2>📂 Project Structure</h2>
    <pre>
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
    </pre>

    <h2>✨ Features</h2>
    <ul>
        <li><strong>Smart Timer Control:</strong>
            <ul>
                <li>Visual countdown with a progress ring</li>
                <li>Predefined focus sessions (25, 50, 60, 90, 120 minutes)</li>
                <li>Custom timer input (5-120 minutes)</li>
            </ul>
        </li>
        <li><strong>Focus Mode Categories:</strong>
            <ul>
                <li>🎓 Study Mode (50 min, blocks social media)</li>
                <li>💻 Deep Work (90 min, whitelists coding sites)</li>
                <li>✍️ Writing Sprint (25 min Pomodoro)</li>
            </ul>
        </li>
        <li><strong>Dynamic Status System:</strong>
            <ul>
                <li>Visual indicators for active, paused, and inactive states</li>
                <li>Session analytics with streak tracking</li>
            </ul>
        </li>
        <li><strong>Category-Based Blocking:</strong>
            <ul>
                <li>Preloaded blocklists: Social Media, Entertainment, News, Shopping</li>
                <li>Toggle whole categories or individual sites</li>
            </ul>
        </li>
        <li><strong>Safety Features:</strong>
            <ul>
                <li>Emergency pause (limited use)</li>
                <li>Overtime warning</li>
                <li>Undo and recovery options</li>
            </ul>
        </li>
        <li><strong>Advanced Controls:</strong>
            <ul>
                <li>Session stacking</li>
                <li>Auto-scheduled breaks</li>
                <li>Focus stats tracking</li>
            </ul>
        </li>
    </ul>

    <h2>🚀 Installation</h2>
    <ol>
        <li>Clone the repository: <pre>git clone https://github.com/yourusername/ForceBlockMe.git</pre></li>
        <li>Navigate to the project directory: <pre>cd ForceBlockMe</pre></li>
        <li>Install dependencies: <pre>npm install</pre></li>
        <li>Build the extension: <pre>npm run build</pre></li>
        <li>Load the unpacked extension in Chrome:
            <ol>
                <li>Open <code>chrome://extensions/</code></li>
                <li>Enable <strong>Developer mode</strong></li>
                <li>Click <strong>Load unpacked</strong> and select the <code>dist/</code> folder</li>
            </ol>
        </li>
    </ol>

    <h2>🛠️ Usage</h2>
    <p>Click the <strong>ForceBlockMe</strong> icon in your Chrome toolbar. Choose a focus mode or set a custom timer. Select categories to block and start your session! Check session stats from the popup window.</p>

    <h2>📊 Contributing</h2>
    <p>Contributions are welcome! Follow these steps:</p>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch: <code>git checkout -b feature/YourFeature</code></li>
        <li>Make your changes and commit: <code>git commit -m "Add new feature"</code></li>
        <li>Push to your branch: <code>git push origin feature/YourFeature</code></li>
        <li>Open a Pull Request.</li>
    </ol>

    <h2>✅ Testing</h2>
    <p>Run tests using:</p>
    <pre>npm test</pre>

    <h2>🐛 Reporting Issues</h2>
    <p>If you encounter a bug or have a feature request, please open an issue on GitHub.</p>

    <h2>📄 License</h2>
    <p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>

    <h2>💡 Acknowledgements</h2>
    <p>Thanks to all contributors and the open-source community for their invaluable support and ideas.</p>
</body>
</html>
