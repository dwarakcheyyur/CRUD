
jQuery(document).ready(function($) {
"use strict";
    event.preventDefault();
    event.stopPropagation();
    var $form = $('form.formCreate');
    //Contact
    //$('form.contactForm').submit(function(event){
      $('#submit').click(function(event){  
        console.log("Hi");
         var str = $form.serializeObject();            
            $.ajax({
                type: "GET",
				headers: {'Access-Control-Allow-Origin': '*'},
                dataType: "json",
                url: "https://script.google.com/a/education.cloudreign.in/macros/s/AKfycbzVjDYJNfGFKmBHGePKGWNQHFd4oAWiI0bWSWJgnQofWuM7w2c/exec",
                data: str,
                success: function(msg){
                    console.log(msg.result);
                    if(msg.result == "success") {
                        console.log("success");
                        console.log("OK")
                        $("#result").html("Insert Successful");
                    }
                    else {
                        console.log("NOT OK")
                        $("#result").html("Insert Failed");
                    }
                    
                }
            });            
            return false;
    });
});

