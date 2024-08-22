function searchImages() {
    var input, filter, images, altText, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    images = document.querySelectorAll(".gameimages .image");

    for (i = 0; i < images.length; i++) {
        altText = images[i].alt.toUpperCase();
        if (altText.indexOf(filter) > -1) {
            images[i].style.display = "";
        } else {
            images[i].style.display = "none";
        }
    }
}
