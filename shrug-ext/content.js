chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.message === 'clicked_browser_action') {
    var currentValue = document.activeElement.value;
    document.activeElement.value = currentValue + '¯\\_(ツ)_/¯';
  }
});