/*! Wesley */
$(function(){
	$("a").on("click", function(e){
		e.preventDefault();
		//alert(this.text);
		var city = this.text.toLowerCase();
		$.ajax({
			type: 'Get',
			url: 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=2de143494c0b295cca9337e1e96b00e0',
			success: function(data){
				//console.log(data.name);
				function Celsius(temp) {
 					temp = Math.round(temp - 273.15);
 					return (temp  + " &deg;C");
 				};
 				function Farenheit(temp) {
 					temp = Math.round((temp * 9/5)-459.67);
 					return (temp  + " &deg;F");
 				};
				$("#container").html(data.name +": "+ data.main.temp);
				$("#celsius").click(function(){
 					$("#blank").html(data.name +": " + Celsius(data.main.temp));
 				});
 				$("#fahrenheit").click(function(){
 					$("#blank").html(data.name +": " + Farenheit(data.main.temp));
 				});
			}
		});
	});
});




