document.addEventListener("DOMContentLoaded", function() {
    const mainText = document.querySelector(".main-text");
    const mainVisual = document.querySelector(".mainVisual");

    function resizeTheHeight() {
        if (mainText && mainVisual) {
            let textsHeight = mainText.offsetHeight;
            let newHeight = textsHeight + textsHeight / 5;
            mainVisual.style.height = newHeight + "px";
        }
    }

    resizeTheHeight();
    window.addEventListener("resize", resizeTheHeight);
});