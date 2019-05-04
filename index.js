const aside = document.getElementById("aside");
const bar = document.getElementById("bar");
const message = document.getElementById("table");
const resizer = document.getElementById("resizer");

resizer.addEventListener("mousedown", initResize, false);

function initResize(e) {
    window.addEventListener("mousemove", Resize, false);
    window.addEventListener("mouseup", stopResize, false);
}
function Resize(e) {
    aside.style.setProperty("flex-basis", `${event.clientX}px`);
    table.style.setProperty("flex-basis", `${event.clientY - 72}px`);
    bar.style.setProperty("flex-basis", `${event.clientY - 72}px`);
}
function stopResize(e) {
    window.removeEventListener("mousemove", Resize, false);
    window.removeEventListener("mouseup", stopResize, false);
}