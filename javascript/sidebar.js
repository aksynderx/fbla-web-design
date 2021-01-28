let isOpen = false;

window.onload = function() {
    document.getElementById("sidebar").style.display = "none";
    isOpen = false;
}

function openSidebar() {
    document.getElementById("sidebar").style.display = "block";
    isOpen = true;
}

function closeSidebar() {
    document.getElementById("sidebar").style.display = "none";
    isOpen = false;
}

if (isOpen = true) {
    window.onclick = function(event) {
        sidebarWidth = document.getElementById("sidebar").getBoundingClientRect().width;
        if (event.clientX > sidebarWidth) {
            document.getElementById("sidebar").style.display = "none";
        }
    }
}