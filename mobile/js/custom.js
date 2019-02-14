$("#contact_frm").submit(function(event) {
        var sname = $("#name").val(),
        	semail = $("#email_id").val(),
        	scomment = $("#comment").val(),
			process = true;
			
        if (sname == "") {
            $("#name").redField();
            process = false;
        }
        if (semail == "") {
            $("#email_id").redField();
            process = false;
        }
       
        if (scomment == "") {
            $("#comment").redField();
            process = false;
        }
		
        if (process) {
            var sdata = {
                name: sname,
                email: semail,
                message: scomment
            };		
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: sdata,
                success: function(d) {
                    $("#contact_frm")[0].reset();
                    //$("#contact_frm").css("display", "none");
					$(".success").css("display","");
                }
            });
        }

        event.preventDefault();
    });

