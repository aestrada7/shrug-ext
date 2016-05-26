chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.message === 'clicked_browser_action' || request.message === 'pressed_hotkey_action') {
    addShrug();
  }
});

function addShrug() {
  var currentValue = document.activeElement.value;
  document.activeElement.value = currentValue + '¯\\_(ツ)_/¯';
}