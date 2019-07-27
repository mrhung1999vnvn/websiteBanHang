var d = 0;
function showMessage() {
    d++;
    var text = document.getElementById("key2");
    var background=document.getElementById("backgrounder");
    var header1 = document.getElementById("keyHeader");
    if (d % 2 != 0) {
        text.style.opacity = 1;
        background.style.background="rgba(192,192,192,0.7)";
        text.style.color="black";
    }
    else{
        text.style.opacity=0;
        background.style.background="transparent";
    }
}