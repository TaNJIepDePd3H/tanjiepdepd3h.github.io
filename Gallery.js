function upDate(previewPic) {
    var mainImage = document.getElementById('image');
    mainImage.style.backgroundImage = "url('" + previewPic.src + "')";
    mainImage.innerHTML = previewPic.alt;
}

function unDo() {
    var mainImage = document.getElementById('image');
    mainImage.style.backgroundImage = "none";
    mainImage.innerHTML = "Hover over an image below to display here.";
}
