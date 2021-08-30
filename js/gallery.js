$(() => {

	let html = '';

	for (let index = 1; index <= 15; index++) {
		html  += `
			<div class="img" >
				<img src="images/${index}.jpg" href="images/${index}.jpg" alt="" >
			</div>
		`;
	}
	document.getElementById('gallery').innerHTML = html;

	/*
	var doc = document.querySelector(".img img");
	console.log(doc.length);
	*/


	$("#gallery").magnificPopup({
		animateOut: 'zoomOutDown',
        animateIn: 'zoomInDown',
       
		delegate: 'img',
		type:"image",
		gallery: {
			enabled: true,
		}
	});
	// function openGallery(image){
		
	// 	var expandArea = document.getElementById("expadedImage");
	// 	expandArea.src = image.src;
	// 	var gallery = document.getElementById("gallery");
	// 	expandArea.parentElement.style.display = "block";
		
	// 	gallery.style.visibility = "hidden";
		
	// 	//alert(image);
	// };

	function closeGalleryView(){
		document.getElementById("galleryView").style.display = "none";
		document.getElementById("gallery").style.visibility = "visible";
	}
});


let html = '';

for (let index = 1; index <= 15; index++) {
    html  += `
        <div class="img" >
            <img src="images/${index}.jpg" href="images/${index}.jpg" alt="" onclick="openGallery(this)">
        </div>
    `;
}
document.getElementById('gallery').innerHTML = html;

/*
var doc = document.querySelector(".img img");
console.log(doc.length);
*/

// function openGallery(image){
	
// 	var expandArea = document.getElementById("expadedImage");
// 	expandArea.src = image.src;
// 	var gallery = document.getElementById("gallery");
// 	expandArea.parentElement.style.display = "block";
	
// 	gallery.style.visibility = "hidden";
	
// 	//alert(image);
// };

function closeGalleryView(){
	document.getElementById("galleryView").style.display = "none";
	document.getElementById("gallery").style.visibility = "visible";
}