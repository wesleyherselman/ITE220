var myWindow = {
	screenX: window.screenX,
	screenY: window.screenY,
	location: window.location.pathname,

	render: function() {
		var ele = document.getElementById("location");
		ele.value = this.location;

		ele = document.getElementById("sx");
		ele.value = this.screenX;
	}
};


myWindow.render();