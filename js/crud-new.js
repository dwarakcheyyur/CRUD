
jQuery(document).ready(function($) {
	"use strict";
    event.preventDefault();
    event.stopPropagation();
    var $form = $('form.contactForm');
    //Contact
    //$('form.contactForm').submit(function(event){
      $('#submit').click(function(event){  
        console.log("Hi");
        var f = $form.find('.form-group'), 
        ferror = false, 
        emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

        f.children('input').each(function(){ // run all inputs

            var i = $(this); // current input
            var rule = i.attr('data-rule');

            if( rule !== undefined ){
            var ierror=false; // error flag for current input
            var pos = rule.indexOf( ':', 0 );
            if( pos >= 0 ){
                var exp = rule.substr( pos+1, rule.length );
                rule = rule.substr(0, pos);
            }else{
                rule = rule.substr( pos+1, rule.length );
            }
            
            switch( rule ){
                case 'required':
                if( i.val()==='' ){ ferror=ierror=true; }
                break;
                
                case 'minlen':
                if( i.val().length<parseInt(exp) ){ ferror=ierror=true; }
                break;

                case 'email':
                if( !emailExp.test(i.val()) ){ ferror=ierror=true; }
                break;

                case 'checked':
                if( !i.attr('checked') ){ ferror=ierror=true; }
                break;
                
                case 'regexp':
                exp = new RegExp(exp);
                if( !exp.test(i.val()) ){ ferror=ierror=true; }
                break;
            }
                i.next('.validation').html( ( ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '' ) ).show('blind');
            }
        });
        f.children('textarea').each(function(){ // run all inputs

            var i = $(this); // current input
            var rule = i.attr('data-rule');

            if( rule !== undefined ){
            var ierror=false; // error flag for current input
            var pos = rule.indexOf( ':', 0 );
            if( pos >= 0 ){
                var exp = rule.substr( pos+1, rule.length );
                rule = rule.substr(0, pos);
            }else{
                rule = rule.substr( pos+1, rule.length );
            }
            
            switch( rule ){
                case 'required':
                if( i.val()==='' ){ ferror=ierror=true; }
                break;
                
                case 'minlen':
                if( i.val().length<parseInt(exp) ){ ferror=ierror=true; }
                break;
            }
                i.next('.validation').html( ( ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '' ) ).show('blind');
            }
        });
        if( ferror ) return false; 
        else var str = $form.serializeObject();            
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://script.google.com/macros/s/AKfycby9Q2GY5JZAQcODdDpmBWNEvBcqTewQcuRjh9bVTi26EDocsw4/exec",
                data: str,
                success: function(msg){
                    console.log("Message result: "+msg.result);
                    if(msg.result == "success") {
                        console.log("success");
                        console.log("OK")
                        $("#sendmessage").addClass("show");			
                        $("#errormessage").removeClass("show");	
                        $('.contactForm').find("input, textarea").val("");
                    }
                    else {
                        console.log("NOT OK")
                        $("#sendmessage").removeClass("show");
                        $("#errormessage").addClass("show");
                        $('#errormessage').html(msg);
                    }
                    
                }
            });            
            return false;
    });
});

/*
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
                url: "https://script.google.com/a/macros/s/AKfycbzVjDYJNfGFKmBHGePKGWNQHFd4oAWiI0bWSWJgnQofWuM7w2c/exec",
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

*/