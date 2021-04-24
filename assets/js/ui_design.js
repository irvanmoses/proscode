// Modal : Method 1

var gambar = document.querySelectorAll(".myImg");
  gambar.forEach((element) => {
    element.addEventListener('click', () => {
      document.querySelector("#img01").src = element.src;
      document.querySelector("#modal01").style.display = "block";
      document.querySelector("#caption").innerHTML = element.alt;
  });
});


// Modal : Method 2

// var modal = document.querySelector('#modal01');
// var images = document.getElementsByClassName('myImg');
// var modalImg = document.querySelector('#img01');
// var captionText = document.querySelector('#caption');

// for (var i = 0; i < images.length; i++) {
//   var img = images[i];
//   img.onclick = function(evt) {
//     console.log(evt);
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt
//   }
// }