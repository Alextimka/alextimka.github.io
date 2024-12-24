// it's time for awful programmin
let tabList = ["tabAbout", "tabProjects"];
let activeTab = "tabAbout";
let tabs = document.getElementsByClassName("clicktab");
for(let i = 0;i<tabs.length;i++){
	tabs[i].addEventListener("click",(event)=>{
		if(event.target.id == activeTab) return
		let active = document.getElementById(activeTab);
		active.className = active.className.slice(0,-9);
		document.getElementById(activeTab+"Content").hidden = true;

		event.target.className += " selected";
		activeTab = event.target.id;
		document.getElementById(activeTab+"Content").hidden = false;
	});
};