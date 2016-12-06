'use strict';

app.requestView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('requestView');

// START_CUSTOM_CODE_requestView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_requestView
(function(parent) {
    var
    /// start global model properties
    /// end global model properties
        requestViewModel = kendo.observable({
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
            /// start add form data init
            /// end add form data init
        });
        /// start add form show
        /// end add form show
    });
    parent.set('requestViewModel', requestViewModel);
})(app.requestView);

// START_CUSTOM_CODE_requestViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
var pictureSource; // picture source
var destinationType; // sets the format of returned value 
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

function onPhotoDataSuccess1(imageData) {
    // Uncomment to view the base64 encoded image data
    // console.log(imageData);

    // Get image handle
    //
    var smallImage1 = document.getElementById('smallImage1');

    // Unhide image elements
    //
    smallImage1.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    smallImage1.src = "data:image/jpeg;base64," + imageData;
}
function onPhotoDataSuccess2(imageData) {
    // Uncomment to view the base64 encoded image data
    // console.log(imageData);

    // Get image handle
    //
    var smallImage2 = document.getElementById('smallImage2');

    // Unhide image elements
    //
    smallImage2.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    smallImage2.src = "data:image/jpeg;base64," + imageData;
}
function onPhotoDataSuccess3(imageData) {
    // Uncomment to view the base64 encoded image data
    // console.log(imageData);

    // Get image handle
    //
    var smallImage3 = document.getElementById('smallImage3');

    // Unhide image elements
    //
    smallImage3.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    smallImage3.src = "data:image/jpeg;base64," + imageData;
}
function onPhotoDataSuccess4(imageData) {
    // Uncomment to view the base64 encoded image data
    // console.log(imageData);

    // Get image handle
    //
    var smallImage4 = document.getElementById('smallImage4');

    // Unhide image elements
    //
    smallImage4.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    smallImage4.src = "data:image/jpeg;base64," + imageData;
}

// // Called when a photo is successfully retrieved
// //
// function onPhotoURISuccess(imageURI) {
//     // Uncomment to view the image file URI 
//     // console.log(imageURI);

//     // Get image handle
//     //
//     var largeImage = document.getElementById('largeImage');

//     // Unhide image elements
//     //
//     largeImage.style.display = 'block';

//     // Show the captured photo
//     // The inline CSS rules are used to resize the image
//     //
//     largeImage.src = imageURI;
// }

// A button will call this function
//
function capturePhoto1() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess1, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL
    });
}
function capturePhoto2() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess2, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL
    });
}
function capturePhoto3() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess3, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL
    });
}
function capturePhoto4() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess4, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL
    });
}

// A button will call this function
//
// function capturePhotoEdit() {
//     // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
//     navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
//         quality: 20,
//         allowEdit: true,
//         destinationType: destinationType.DATA_URL
//     });
// }

// // A button will call this function
// //
// function getPhoto(source) {
//     // Retrieve image file location from specified source
//     navigator.camera.getPicture(onPhotoURISuccess, onFail, {
//         quality: 50,
//         destinationType: destinationType.FILE_URI,
//         sourceType: source
//     });
// }

// Called if something bad happens.
// 
function onFail(message) {
    alert('Failed because: ' + message);
}
// END_CUSTOM_CODE_requestViewModel