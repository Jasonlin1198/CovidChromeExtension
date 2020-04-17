var count = 0;

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.querySelector("button").addEventListener("click", onClick, false);
    function onClick() {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, "string", setCount);
      });
    }
    function setCount(res) {
      const div = document.createElement("div");

      if (res == null) {
        div.textContent = "No occurence of COVID-19";
      } else {
        div.textContent = res.count + " occurences of COVID-19";
      }
      if (count == 0) {
        document.body.appendChild(div);
      }
      count++;
    }
  },
  false
);
