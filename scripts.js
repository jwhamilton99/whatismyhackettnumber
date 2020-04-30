var bHN = 0
var eHN = 0

function compute() {
	var idArr = ["numPeople","numDesktops","numNotebooks","numiPads","numNewtons","numiPhones","numiPods"];
	for(var i = 0; i < idArr.length; i++) {
		document.getElementById(idArr[i]).style.borderColor = "black";
	}
	for(var i = 0; i < idArr.length; i++) {
		if(isNaN(parseInt(document.getElementById(idArr[i]).value))) {
			document.getElementById(idArr[i]).style.borderColor = "red";
		}
	}
	document.getElementById("bOutput").innerHTML = computeBase();
	document.getElementById("eOutput").innerHTML = computeExtended();
}

function computeBase() {
	var nPeople = parseInt(document.getElementById("numPeople").value);
	var nDesktops = parseInt(document.getElementById("numDesktops").value);
	var nNotebooks = parseInt(document.getElementById("numNotebooks").value);
	var niPads = parseInt(document.getElementById("numiPads").value);
	if(isNaN(nPeople) || isNaN(nDesktops) || isNaN(nNotebooks) || isNaN(niPads) || nPeople == 0) {
		document.getElementById("dOutput").innerHTML = "";
		return "Please enter your data.";
	} else {
		bHN = (Math.round(((nDesktops+nNotebooks+niPads)/nPeople)*10)/10);
		var pf = "s";
		var hr = (Math.round((bHN/20.6)*10)/10);
		if(bHN/20.6 == 1) {
			pf = "";
		}
		document.getElementById("dOutput").innerHTML = "This means that your household has <b>"+bHN+"</b> computers for every person living there. That's "+hr+" Hackett"+pf+".";
		return "Your Hackett Number is: <b>"+bHN+"</b>";
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
		eHN = (Math.round(((nDesktops+nNotebooks+niPads+nNewtons+niPhones+niPods)/nPeople)*10)/10);
		return "Your extended Hackett Number is: <b>"+eHN+"</b>";
	}
}
