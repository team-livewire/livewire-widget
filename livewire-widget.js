//Edit this to match your username
var username = "livewire";


window.onload = function() {
	//set the liveurl
	var url = "https://livewire.live/"+username;

	//the widget images
	var desktop_img = "https://s26.postimg.org/mqx5b523d/live-chat-desktop.png"
	var mobile_img = "https://s26.postimg.org/g1qlv4grd/live-chat-mobile.png"
	
	//create the anchor
	var link = document.createElement('a');
	
	//create an image
	var img = document.createElement("img");
	
	//media query to check if mobile screen or not
	var mediaQuery = window.matchMedia("(max-width: 768px)");
	if(mediaQuery.matches){
		img.setAttribute('src', mobile_img);
	}else{
		img.setAttribute('src', desktop_img);
	}
	img.setAttribute('alt', 'livewire widget');
	
	//add the image inside the anchor
	link.appendChild(img);

	//set the anchor properties
	link.title = "Video Chat";
	link.href = url;
	link.target="_blank";
	link.style.position = "fixed";
	link.style.bottom = "0";
	link.style.right = "0";
	link.style.zIndex = "1000";

	//add the anchor to the page
	document.body.appendChild(link);


	//used to update the image based on screen size
	window.addEventListener('resize', function(event){
  		var mediaQuery = window.matchMedia("(max-width: 768px)");
		
		if(mediaQuery.matches){
			img.setAttribute('src', mobile_img);
		}else{
			img.setAttribute('src', desktop_img);
		}
	});
  
};
