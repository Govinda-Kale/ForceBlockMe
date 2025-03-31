// background.js

// Persistent storage keys
const BLOCKED_SITES_KEY = 'blockedSites';
const ACTIVE_SESSION_KEY = 'activeSession';
const FOCUS_MODE_KEY = 'focusMode';
const FOCUS_TIME_KEY = 'focusTime';
const BREAK_TIME_KEY = 'breakTime';

// Initialize data
let blockedSites = [];
let focusMode = false;
let focusTime = 0;
let breakTime = 0;

// Load blocked sites from storage
function loadBlockedSites() {
    chrome.storage.sync.get([BLOCKED_SITES_KEY], (result) => {
        if (result[BLOCKED_SITES_KEY]) {
            blockedSites = result[BLOCKED_SITES_KEY];
        }
    });
}

// Save blocked sites to storage
function saveBlockedSites() {
    chrome.storage.sync.set({ [BLOCKED_SITES_KEY]: blockedSites });
}

// Block site if in the blocked list
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        const url = new URL(details.url);
        if (blockedSites.includes(url.hostname)) {
            return { redirectUrl: chrome.runtime.getURL('blockpage/block.html') };
        }
    },
    { urls: ['<all_urls>'] },
    ['blocking']
);

// Handle focus mode
function startFocusMode(duration) {
    focusMode = true;
    focusTime = duration;
    chrome.storage.sync.set({ [FOCUS_MODE_KEY]: focusMode, [FOCUS_TIME_KEY]: focusTime });
    setFocusAlarm();
}

function stopFocusMode() {
    focusMode = false;
    focusTime = 0;
    chrome.storage.sync.set({ [FOCUS_MODE_KEY]: focusMode, [FOCUS_TIME_KEY]: focusTime });
    clearFocusAlarm();
}

// Set an alarm for focus session
function setFocusAlarm() {
    chrome.alarms.create('focusAlarm', { delayInMinutes: focusTime });
}

// Clear the focus alarm
function clearFocusAlarm() {
    chrome.alarms.clear('focusAlarm');
}

// Alarm listener to end focus mode
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'focusAlarm') {
        stopFocusMode();
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icons/icon48.png',
            title: 'Focus Mode Complete',
            message: 'Your focus session has ended!'
        });
    }
});

// Handle errors and initialization
chrome.runtime.onStartup.addListener(loadBlockedSites);
chrome.runtime.onInstalled.addListener(() => {
    loadBlockedSites();
    chrome.storage.sync.get([FOCUS_MODE_KEY, FOCUS_TIME_KEY], (result) => {
        focusMode = result[FOCUS_MODE_KEY] || false;
        focusTime = result[FOCUS_TIME_KEY] || 0;
        if (focusMode) setFocusAlarm();
    });
});

console.log('Background script loaded successfully.');
