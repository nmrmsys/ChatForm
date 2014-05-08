
//ボタン押下時イベント設定
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({"url": "ChatForm.html" });
});

