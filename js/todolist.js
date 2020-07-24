function setrem(){
	var allwidth = window.innerWidth;
	
	var rem = allwidth/3.75;
	
	var html = document.querySelector('html')
	html.style.fontSize = rem + 'px'
}