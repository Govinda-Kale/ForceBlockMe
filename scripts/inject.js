// inject.js - Optional Content Script for DOM Manipulation

(function () {
    console.log("ForceBlockMe content script loaded.");
  
    // DOM injection to indicate focus mode on allowed sites
    chrome.storage.sync.get(["isFocusMode", "focusEndTime"], (data) => {
      if (data.isFocusMode && Date.now() < data.focusEndTime) {
        const banner = document.createElement("div");
        banner.id = "forceblockme-focus-banner";
        banner.textContent = "Focus Mode Active";
        banner.style.position = "fixed";
        banner.style.top = "0";
        banner.style.left = "0";
        banner.style.width = "100%";
        banner.style.backgroundColor = "rgba(0, 128, 0, 0.8)";
        banner.style.color = "#fff";
        banner.style.padding = "10px";
        banner.style.textAlign = "center";
        banner.style.zIndex = "9999";
        document.body.appendChild(banner);
      }
    });
  
    // Check for focus mode periodically
    setInterval(() => {
      chrome.storage.sync.get(["isFocusMode", "focusEndTime"], (data) => {
        const banner = document.getElementById("forceblockme-focus-banner");
        if (data.isFocusMode && Date.now() < data.focusEndTime) {
          if (!banner) {
            // Add the banner if not present
            const newBanner = document.createElement("div");
            newBanner.id = "forceblockme-focus-banner";
            newBanner.textContent = "Focus Mode Active";
            newBanner.style.position = "fixed";
            newBanner.style.top = "0";
            newBanner.style.left = "0";
            newBanner.style.width = "100%";
            newBanner.style.backgroundColor = "rgba(0, 128, 0, 0.8)";
            newBanner.style.color = "#fff";
            newBanner.style.padding = "10px";
            newBanner.style.textAlign = "center";
            newBanner.style.zIndex = "9999";
            document.body.appendChild(newBanner);
          }
        } else if (banner) {
          // Remove the banner if focus mode ends
          banner.remove();
        }
      });
    }, 3000);
  })();
  