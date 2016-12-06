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
var el = new Everlive('6e19r6m447rk5yqq');
var image1 ="";
var image2 ="";
var image3 ="";
var image4 ="";
function onPhotoDataSuccess1(imageData) {
    debugger;
    var data = el.data('DamagedData');
    var file = {
        Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
        ContentType: "image/jpeg",
        base64: imageData,
    };
    el.Files.create(file, function(response) {
         image1 = response.result.Uri;
    }, function(err) {
        navigator.notification.alert("Unfortunately the upload failed: " + err.message);
    });
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
    var data = el.data('DamagedData');
    var file = {
        Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
        ContentType: "image/jpeg",
        base64: imageData,
    };
    el.Files.create(file, function(response) {
        image2 = response.result.Uri;
    }, function(err) {
        navigator.notification.alert("Unfortunately the upload failed: " + err.message);
    });
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
    var data = el.data('DamagedData');
    var file = {
        Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
        ContentType: "image/jpeg",
        base64: imageData,
    };
    el.Files.create(file, function(response) {
        image3 = response.result.Uri;
    }, function(err) {
        navigator.notification.alert("Unfortunately the upload failed: " + err.message);
    });
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
    var data = el.data('DamagedData');
    var file = {
        Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
        ContentType: "image/jpeg",
        base64: imageData,
    };
    el.Files.create(file, function(response) {
        image4 = response.result.Uri;
    }, function(err) {
        navigator.notification.alert("Unfortunately the upload failed: " + err.message);
    });
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


function onFail(message) {
    alert('Failed because: ' + message);
}

function mailImages(){
    var ReklamationMessage = localStorage.getItem('ReklamationMessage')
    localStorage.removeItem('ReklamationMessage');
    var DamagedMessage = document.getElementById("damagedMessage").value;
    var barcodelink = localStorage.getItem('BarCodeUri');
    var email = 'kris.sistrunk@gmail.com'; // please insert the customer email address
    var subject = 'Kunde Reklamation';
    //var emailBody = 'sdfsdff';
    var emailBody = 'Reklamation Comment: ' +ReklamationMessage + '%0D%0A'+'%0D%0A'+  'Barcode Link: '+ barcodelink + '%0D%0A'+'%0D%0A'+  'Damaged Comment: '+DamagedMessage +  '%0D%0A'+'%0D%0A'+ ' Image1 = '+ image1 + '%0D%0A'+'%0D%0A'+ ' Image2 = '+image2 + '%0D%0A'+'%0D%0A'+ ' image3 = '+ image3 + '%0D%0A'+'%0D%0A' + 'and image4 = ' + image4;
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;

};
// END_CUSTOM_CODE_requestViewModel