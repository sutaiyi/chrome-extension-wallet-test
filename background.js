// TO DO...
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "TY",
  });
});