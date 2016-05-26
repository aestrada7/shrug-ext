chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {'message': 'clicked_browser_action'});
  });
});

chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.update({}, function(tab) {
    if(command === 'pressed_browser_hotkey') {
      chrome.tabs.sendMessage(tab.id, {'message': 'pressed_hotkey_action'});
    }
  });
});