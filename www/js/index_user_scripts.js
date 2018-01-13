/*jshint browser:true */
/*global $ */
(function () {
    "use strict";
    /*
      hook up event handlers 
    */
    function register_event_handlers() {

            
/* button  #btnLogin */
            $(document).on("click", "#btnLogin", function (evt) {

                $.post(rootWebService + "login", {
                    nisn: $('#nisn').val(),
                    password: $('#password').val()
                    
                }, 'json')
                .done(function (data) {

                    if (data.status === 'not_found') {
                        $('#wrong_password').show();
                    } else {
                        localStorage.setItem('status_login', 'logged_in');
                        localStorage.setItem('id_siswa', data.id_siswa);
                        localStorage.setItem('nisn',data.nisn);
                        localStorage.setItem('kode_kelas',data.kode_kelas);
                        localStorage.setItem('kode_jurusan',data.kode_jurusan);
                        //$.mobile.changePage($(document.location.href = "dashboard.html"), 'slide');
                        window.location = "menu.html";
                    }

                })          
            
            
        });
        

    
    
    }
    document.addEventListener("app.Ready", register_event_handlers, false);
})();