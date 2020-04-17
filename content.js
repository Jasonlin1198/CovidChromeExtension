//alert("hi");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const re = new RegExp("COVID-19", "gi");
  const matches = document.documentElement.innerHTML.match(re);

  sendResponse({ count: matches.length });
});
