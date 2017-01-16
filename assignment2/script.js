$(document).ready(function(){
	$("#btn").click(function(){
	$("#parent p").last().css({"height": "140px", "overflow": "scroll"})
	})
})





$(document).ready(function(){
	$("#btn_comm").click(function(){
	var a = $("#comment_field").val();
	
	$("#comment").append("<h3>Mr. Linkon commented : " + a + "</h3>");
	})
})





$(document).ready(function(){
	$("#btn_login").click(function(){
	var b = $("#name").val();
	var c = $("#password").val();
	
	if (b == "nahian" && c == "nahian12345") {
		$("#login_msg").text("LOGIN SUCCESSFUL !");
	}else{
		$("#login_msg").text("Wrong Username or Password." );
	}
	})
})




$(document).ready(function(){
	$("#web_btn").click(function(){
		$("div").filter(".web").show(2000,function(){
			$(".mobile").hide(2000);
		})
	
	})

	$("#mobile_btn").click(function(){
		$("div").filter(".mobile").show(2000,function(){
			$(".web").hide(2000);
		})
	
	})


	$("#all").click(function(){
		$("div").filter(".mobile").show(2000,function(){
			$(".web").show(2000);
		})
	
	})
})