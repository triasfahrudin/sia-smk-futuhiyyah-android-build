/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...


var rootWebService = "http://localhost/sia-smk-futuhiyyah/webservice.php?cmd=";
 

//======================onesignal============================
//https://documentation.onesignal.com/docs/intel-xdk-setup
// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.

document.addEventListener('deviceready', function () {
        

}, false);

//===================/onesignal=================================

function cekLogin_index() {
   
    if (localStorage.getItem('status_login') !== null) {
        window.location = 'menu.html';
    }
}

function cekLogin() {
    if (localStorage.getItem('status_login') === null) {
        window.location = 'index.html';
    }
}

function signout() {
    //localStorage.clear();
    //window.location = "index.html";
}

/*jshint browser:true */
/*global $ */
(function () {
    "use strict";
    /*
      hook up event handlers
    */
    function register_event_handlers() {


        /* button  #back */
        $(document).on("click", "#back", function (evt) {
            /* your code goes here */
            window.history.back();
        });

        $(document).on("click", ".uib_w_2", function(evt){
            window.location = "menu.html";
        });

    }
    document.addEventListener("app.Ready", register_event_handlers, false);
})();
