function upDate(previewPic){
    document.getElementById('message').style.cssText = `background-image: url('${previewPic.src}');background-size:cover;color:black`;
    document.getElementById('message').innerHTML = previewPic.alt;
}
function unDo(){
    document.getElementById('message').innerHTML = "Hover over an image to display the alt text.";
    document.getElementById('message').style = `background-image:none`;
}
function setImages(){
    currentImages = document.querySelectorAll(".preview");
    for(let i = 0; i<currentImages.length;i++){
        console.log(i);
        currentImages[i].setAttribute("tabindex","0");
        currentImages[i].addEventListener("focus",function(){upDate(currentImages[i])});
    }
}
