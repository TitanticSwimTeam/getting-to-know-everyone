window.onload = function() {
    document.getElementById("toad").onclick = () => alert("Surprise XSS! (don't worry this doesn't do anything :P )");
}