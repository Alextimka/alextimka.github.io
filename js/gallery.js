if (localStorage.getItem("currentPhoto") == null){
	localStorage.setItem("currentPhoto", 1);
}
let leftbtn = document.getElementById("leftbtn");
let rightbtn = document.getElementById("rightbtn");
let gallery  = document.getElementById("gallery")
let photo = parseInt(localStorage.getItem("currentPhoto"));
gallery.style = `background-image: url(./src/photos/${photo}.png);`;
let max = 14;
leftbtn.addEventListener("click", ()=>{
	photo--;
	if(photo<1) photo = max;
	gallery.style = `background-image: url(./src/photos/${photo}.png);`;
	localStorage.setItem("currentPhoto", photo);
});
rightbtn.addEventListener("click", ()=>{
	photo++;
	if(photo>max) photo = 1;
	gallery.style = `background-image: url(./src/photos/${photo}.png);`;
	localStorage.setItem("currentPhoto", photo);
});