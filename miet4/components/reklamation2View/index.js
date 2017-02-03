'use strict';

app.reklamation2View = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('reklamation2View');

// START_CUSTOM_CODE_reklamation2View
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_reklamation2View
(function(parent) {
    var
    /// start global model properties
    /// end global model properties
        reklamation2ViewModel = kendo.observable({
        submit: function() {},
        /// start add model functions
        /// end add model functions

        cancel: function() {}
    });

    /// start form functions
    /// end form functions

    parent.set('onShow', function _onShow() {
        var that = parent;
        that.set('addFormData', {
            lname: '',
            fName: '',
            rekNotes: '',
            /// start add form data init
            /// end add form data init
        });
        /// start add form show
        /// end add form show
    });
    parent.set('reklamation2ViewModel', reklamation2ViewModel);
})(app.reklamation2View);

// START_CUSTOM_CODE_reklamation2ViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
var pictureSource; // picture source
var destinationType; // sets the format of returned value 
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}
function barcodeScan(){
    debugger;
    if (window.navigator.simulator === true) {
            alert("Not Supported in Simulator.");
        }
        else {
  cordova.plugins.barcodeScanner.scan(

    // success callback function
    function (result) {
        // wrapping in a timeout so the dialog doesn't free the app
        setTimeout(function() {
            // alert("We got a barcode\n" +
            //       "Result: " + result.text + "\n" +
            //       "Format: " + result.format + "\n" +
            //       "Cancelled: " + result.cancelled);
            alert("Barcode erkannt Drücken Sie OK um fortzufahren");
                //   $("#result").append('<div class="row"><div class="col u-text-right"><label class="u-text-bold">' + result.format + '</label></div><div class="col u-text-left"><span class="u-color-accent">' + result.text + '</span></div></div>');
localStorage.removeItem('BarcodeResult');
                localStorage.setItem("BarcodeResult","The barcode format is: "+ result.format +" and the text is: "+ result.text);
        }, 0);
    },

    // error callback function
    function (error) {
        alert("Scanning failed: " + error);
    },

    // options object
    {
        "preferFrontCamera" : false,
        "showFlipCameraButton" : true,
        "showTorchButton" : true,
        "orientation" : "landscape"
    })
        }
}
var el = new Everlive('6e19r6m447rk5yqq'); // App id Of telerik backend
var BarCodeUri = ""; //Will store live link of barcode in this variable

function onPhotoDataSuccess(imageData) {
 var file = {
        Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
        ContentType: "image/jpeg",
        base64: imageData,
        quality: 50,
        targetWidth: 400,
        targetHeight: 300
    };
    el.Files.create(file, function(response) {
         BarCodeUri = response.result.Uri;
         localStorage.removeItem('BarCodeUri');
         localStorage.setItem("BarCodeUri", BarCodeUri);
    }, function(err) {
        navigator.notification.alert("Unfortunately the upload failed: " + err.message);
    });
    // Uncomment to view the base64 encoded image data
    // console.log(imageData);

    // Get image handle
    //
    var smallImage = document.getElementById('largeImage');

    // Unhide image elements
    //
    smallImage.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    smallImage.src = "data:image/jpeg;base64," + imageData;
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
    var file = {
        Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
        ContentType: "image/jpeg",
        base64: imageURI,
        quality: 50,
        targetWidth: 400,
        targetHeight: 300
    };
    el.Files.create(file, function(response) {
        debugger;
        localStorage.removeItem('BarCodeUri');
         BarCodeUri = response.result.Uri;
         localStorage.setItem("BarCodeUri", BarCodeUri);
    }, function(err) {
        navigator.notification.alert("Unfortunately the upload failed: " + err.message);
    });
    // Uncomment to view the image file URI 
    // console.log(imageURI);

    // Get image handle
    //
    var largeImage = document.getElementById('largeImage');

    // Unhide image elements
    //
    largeImage.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    largeImage.src = imageURI;
}

// A button will call this function
//
function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL,
        targetWidth: 400,
        targetHeight: 300
    });
}

// A button will call this function
//
function capturePhotoEdit() {
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 20,
        allowEdit: true,
        destinationType: destinationType.DATA_URL
    });
}

// A button will call this function
//
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source
    });
}

// Called if something bad happens.
// 
function onFail(message) {
    alert('Failed because: ' + message);
}
function sendMessage(){
localStorage.removeItem('ReklamationMessage');
localStorage.removeItem('FirstName');
localStorage.removeItem('LastName');
    var FirstName = document.getElementById("FirstName").value;
    var LastName = document.getElementById("LastName").value;
    var message = document.getElementById("txtReklamationMessage").value;
    localStorage.setItem("FirstName", FirstName);
    localStorage.setItem("LastName", LastName);
         localStorage.setItem("ReklamationMessage", message);
         app.mobileApp.navigate('components/requestView/view.html');
}
// END_CUSTOM_CODE_reklamation2ViewModel