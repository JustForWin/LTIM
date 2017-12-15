$(function(){
	//UIkit.icon('.toprightico').svg.then(function(svg) { svg.querySelector('path').style.stroke = 'white'; })
	
	$('#loginbtn').click(function(){
		window.location.href = "http://localhost:8080/LTIMServer?name="+$('#num').val()+"&psw="+$("#pwd").val();
	})
})
