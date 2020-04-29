function compute() {
	document.getElementById("bOutput").innerHTML = computeBase();
	document.getElementById("eOutput").innerHTML = computeExtended();
}

function computeBase() {
	var nPeople = parseInt(document.getElementById("numPeople").value);
	var nDesktops = parseInt(document.getElementById("numDesktops").value);
	var nNotebooks = parseInt(document.getElementById("numNotebooks").value);
	var niPads = parseInt(document.getElementById("numiPads").value);
	if(isNaN(nPeople) || isNaN(nDesktops) || isNaN(nNotebooks) || isNaN(niPads) || nPeople == 0) {
		return "Please enter your data.";
	} else {
		return "Your Hackett Number is: <b>"+(Math.round(((nDesktops+nNotebooks+niPads)/nPeople)*10)/10)+"</b>";
	}
	
}

function computeExtended() {
	var nPeople = parseInt(document.getElementById("numPeople").value);
	var nDesktops = parseInt(document.getElementById("numDesktops").value);
	var nNotebooks = parseInt(document.getElementById("numNotebooks").value);
	var niPads = parseInt(document.getElementById("numiPads").value);
	var nNewtons = parseInt(document.getElementById("numNewtons").value);
	var niPhones = parseInt(document.getElementById("numiPhones").value);
	var niPods = parseInt(document.getElementById("numiPods").value);
	if(isNaN(nPeople) || isNaN(nDesktops) || isNaN(nNotebooks) || isNaN(niPads) || isNaN(nNewtons) || isNaN(niPhones) || isNaN(niPods) || nPeople == 0) {
		return "Please enter your data.";
	} else {
		return "Your extended Hackett Number is: <b>"+(Math.round(((nDesktops+nNotebooks+niPads+nNewtons+niPhones+niPods)/nPeople)*10)/10)+"</b>";
	}
}
