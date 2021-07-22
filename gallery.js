

let html = '';

for (let index = 1; index <= 15; index++) {
    html  += `
        <div class="img" >
            <img src="images/${index}.jpg" alt="" onclick="openGallery(this)">
        </div>
    `;
}
document.getElementById('gallery').innerHTML = html;

/*
var doc = document.querySelector(".img img");
console.log(doc.length);
*/

function openGallery(image){
	
	var expandArea = document.getElementById("expadedImage");
	expandArea.src = image.src;
	
	expandArea.parentElement.style.display = "block";
	
	document.getElementById("gallery").style.visibility = "hidden";
	//alert(image);
};

function closeGalleryView(){
	document.getElementById("galleryView").style.display = "none";
	document.getElementById("gallery").style.visibility = "visible";
}