let tabList = ["tabPhotos"];
if (localStorage.getItem("currentTab") == null){
	localStorage.setItem("currentTab", "tabAbout");
}
let activeTab = localStorage.getItem("currentTab");
document.getElementById(activeTab).className += " selected";
document.getElementById(activeTab+"Content").hidden = false;
let tabs = document.getElementsByClassName("tab");

if (window.innerHeight > window.innerWidth) {
	document.body.style = "zoom: 2";
}


for(let i = 0;i<tabs.length;i++){
	tabs[i].addEventListener("click",(event)=>{
		if(event.target.id == activeTab) return
		let active = document.getElementById(activeTab);
		active.className = active.className.slice(0,-9);
		document.getElementById(activeTab+"Content").hidden = true;
		event.target.className += " selected";
		activeTab = event.target.id;
		localStorage.setItem("currentTab", activeTab);
		document.getElementById(activeTab+"Content").hidden = false;
	});
};
