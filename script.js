var container = document.querySelector("#container")
var icon = document.querySelector("#container i")

container.addEventListener("dblclick", function () {
    icon.style.transform = "translate(-50%, -50%) scale(1)";
    icon.style.opacity = 0.8;

    setTimeout(function () {
        icon.style.opacity = 0;
    }, 1000);
    
    setTimeout(function () {
        icon.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000);
});
