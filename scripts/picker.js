function onThemeChange()
{
	let lightSelected = document.getElementById("light").checked
	
	if (lightSelected) document.getElementById("theme").setAttribute("href", "css/light.css"); 
	else document.getElementById("theme").setAttribute("href", "css/dark.css"); 
}

function onColourChange()
{
	let red = document.getElementById("red").value
	let green = document.getElementById("green").value
	let blue = document.getElementById("blue").value
	
	let cssStr = "rgb(" + red + "," + green + "," + blue + ")"
	let fillArea = document.getElementById("fillArea")
	fillArea.style.backgroundColor = cssStr
}