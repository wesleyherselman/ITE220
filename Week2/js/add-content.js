var products = ["Stamford T-Shirt", "Stamford Notebook", "Stamford Wristband"];
var price = [10,5,1];
var total1 = 0;
total = 0;
var i = 0;


var productList = document.getElementById("productList");
var date = document.getElementById("date");
var myDate = new Date();

	if ( myDate.getHours() < 12 ) {
		date.textContent = "Good Morning!"; 
    }
    else  if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 ) { 
    	date.textContent = "Good Afternoon!"; 
    } 
    else if ( myDate.getHours() > 17 && myDate.getHours() <= 24 ) {
        date.textContent = "Good Evening!"; 
    }
    

while (i<3){
productList.innerHTML += "<li>" +products[i] +": $" + price[i] + "</li>";
i++;
}

total1 = price[0] + price[1] + price[2];

total = total1 * 0.8;

var totalPriceEle = document.getElementById("totalPrice");
totalPriceEle.textContent = "$" + total;

var nameEle = document.getElementById("name");
nameEle.textContent = "Wesley";

