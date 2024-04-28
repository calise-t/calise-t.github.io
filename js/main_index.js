const toggleSwitch = document.getElementById("flexSwitchCheckDefault");
function lightOrDark(){                             
    if(event.target.checked){
        document.documentElement.setAttribute("data-theme","dark");
    } else{
        document.documentElement.setAttribute("data-theme","light");
    }
}
toggleSwitch.addEventListener("change",lightOrDark);

const el = document.querySelector("#module");
el.addEventListener("mousemove", (e) => {
    el.style.backgroundPositionX = -e.offsetX + "px";
    el.style.backgroundPositionY = -e.offsetY + "px";
});
