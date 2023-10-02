var images = [
    "./img/banner/propaganda1.jpg",
    "./img/banner/propaganda2.jpg",
    "./img/banner/propaganda3.jpg"
  ];
  
  var index = 0;
  var bannerImage = document.querySelector("#banner-image");
  var prevButton = document.querySelector("#prev-button");
  var nextButton = document.querySelector("#next-button");
  
  setInterval(function() {
    index = (index + 1) % images.length;
    bannerImage.src = images[index];
    //bannerImage.style.transform = "translateX(-" + (100 * index) + "%)";
  }, 5000);
  
  prevButton.addEventListener("click", function() {
    index = (index + images.length - 1) % images.length;
    bannerImage.src = images[index];
    //bannerImage.style.transform = "translateX(-" + (100 * index) + "%)";
  });
  
  nextButton.addEventListener("click", function() {
    index = (index + 1) % images.length;
    bannerImage.src = images[index];
    //bannerImage.style.transform = "translateX(-" + (100 * index) + "%)";
  });

  const iconWhatsapp = document.querySelector("#icon-whatsapp");

iconWhatsapp.addEventListener("mouseover", function() {
  iconWhatsapp.classList.remove("heart-beat");
});

iconWhatsapp.addEventListener("mouseout", function() {
  iconWhatsapp.classList.add("heart-beat");
});

  