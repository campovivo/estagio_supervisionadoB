const mySiema = new Siema({
    loop: true,
});

setInterval(() => mySiema.next(), 4000);

new fullpage('#fullpage', {
    licenseKey: null,
    scrollBar: true,
    onLeave: function(origin, destination, direction){
		var leavingSection = this;

		if(origin.index == 0 && direction =='down'){
			console.log("Going to section 2!");
		}

		else if(origin.index == 2 && direction == 'up'){
			console.log("Going to section 2!");
		}
	}
});