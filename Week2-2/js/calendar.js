// display the calendar here
var hotelTable = document.getElementById("hotelCalendarTable");
var defaultData = hotelTable.innerHTML;
var stringHTML = "";
var hotel = {
	name: "Wesley's Hotel",
	rooms: 40,
	booked: 25,
	checkAvailability: function() {
		return this.rooms - this.booked;
	}
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();


    for (var i = 1; i <= 31; i++) 
    {
        if (i % 7 == 1) 
        {
    		stringHTML += "</tr><tr>";
  		}

  		stringHTML += "<td>" + i + "</td>"; 		
    };
    
    hotelTable.innerHTML += stringHTML;