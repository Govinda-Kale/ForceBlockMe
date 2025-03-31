🚫 ForceBlockMe - The Ultimate Distraction Blocker
ForceBlockMe is a Chrome extension designed to help you stay focused and productive by blocking distracting websites. With customizable timers, focus modes, and category-based blocking, ForceBlockMe ensures that you stay on track and make the most of your time.

📂 Project Structure
arduino
Copy
Edit
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
✨ Features
Smart Timer Control:

Visual countdown with a progress ring

Predefined focus sessions (25, 50, 60, 90, 120 minutes)

Custom timer input (5-120 minutes)

Focus Mode Categories:

🎓 Study Mode (50 min, blocks social media)

💻 Deep Work (90 min, whitelists coding sites)

✍️ Writing Sprint (25 min Pomodoro)

Dynamic Status System:

Visual indicators for active, paused, and inactive states

Session analytics with streak tracking

Category-Based Blocking:

Preloaded blocklists: Social Media, Entertainment, News, Shopping

Toggle whole categories or individual sites

Safety Features:

Emergency pause (limited use)

Overtime warning

Undo and recovery options

Advanced Controls:

Session stacking

Auto-scheduled breaks

Focus stats tracking

🚀 Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/ForceBlockMe.git
cd ForceBlockMe
Install dependencies:

nginx
Copy
Edit
npm install
Build the extension:

arduino
Copy
Edit
npm run build
Load the unpacked extension in Chrome:

Open chrome://extensions/

Enable Developer mode

Click Load unpacked and select the dist/ folder

🛠️ Usage
Click the ForceBlockMe icon in your Chrome toolbar.

Choose a focus mode or set a custom timer.

Select categories to block.

Start your session!

Check session stats from the popup window.

📊 Contributing
Contributions are welcome!

Fork the repository.

Create a new branch:

css
Copy
Edit
git checkout -b feature/YourFeature
Make your changes and commit them:

sql
Copy
Edit
git commit -m "Add new feature"
Push to your branch:

perl
Copy
Edit
git push origin feature/YourFeature
Open a Pull Request.

✅ Testing
Run tests using:

bash
Copy
Edit
npm test
Testing includes unit tests for UI components and integration tests for the blocking logic.

🐛 Reporting Issues
If you encounter a bug or have a feature request, please open an issue on GitHub.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

💡 Acknowledgements
Thanks to all contributors and the open-source community for their invaluable support and ideas.
