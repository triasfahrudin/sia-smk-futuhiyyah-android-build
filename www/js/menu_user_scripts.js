/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  .uib_w_4 */
    $(document).on("click", ".uib_w_4", function(evt)
    {
        /* your code goes here */ 
        
        window.location = "uts.html";
        
         //return false;
    });
    
        /* button  .uib_w_2 */
    $(document).on("click", ".uib_w_2", function(evt)
    {
        /* your code goes here */ 
//         return false;
         window.location = "bahan_tugas.html";
    });
    
        /* button  .uib_w_6 */
    $(document).on("click", ".uib_w_6", function(evt)
    {
        /* your code goes here */ 
//         return false;
		window.location = "pengumuman.html";
        
    });
    
        /* button  .uib_w_7 */
    $(document).on("click", ".uib_w_7", function(evt)
    {
        /* your code goes here */ 
         // return false;
         window.location = "jadwal_pelajaran.html";
    });
    
        /* button  .uib_w_5 */
    $(document).on("click", ".uib_w_5", function(evt)
    {
        /* your code goes here */ 
         // return false;
         window.location = "raport.html";
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
