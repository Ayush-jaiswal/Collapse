$("ducument").ready(function(){

	$("#button1").click(function(){
		$("#lower1").slideToggle(300);
		let b=$("#lower2").css("display");
		let c=$("#lower3").css("display");

		if(b==="block"){
			$("#lower2").slideToggle(300);
		}
		if(c==="block"){
			$("#lower3").slideToggle(300);
		}

	});

	$("#button2").click(function(){
		$("#lower2").slideToggle(300);
		let b=$("#lower1").css("display");
		let c=$("#lower3").css("display");

		if(b==="block"){
			$("#lower1").slideToggle(300);
		}
		if(c==="block"){
			$("#lower3").slideToggle(300);
		}

		
	});

	$("#button3").click(function(){
		$("#lower3").slideToggle(300);
		let b=$("#lower2").css("display");
		let c=$("#lower1").css("display");

		if(b==="block"){
			$("#lower2").slideToggle(300);
		}
		if(c==="block"){
			$("#lower1").slideToggle(300);
		}

		
	});





});

