$(document).ready(function () {
  // smooth scrolling for anchor links
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      800
    );
  });

  //   Photo gallery lightbox

  $(".photo-container img").on("click", function () {
    var imageUrl = $(this).attr("src");
    var imageAlt = $(this).attr("alt");

    var lightboxContent = `
    <div class = "lightbox">
        <img src = "${imageUrl}" alt = "${imageAlt}"/>
        <span class = "close">&times;</span>
    </div>
    `;
    $("body").append(lightboxContent);
  });

  //   Add responsiveness to the navigation menu
  $(".menu-icon").on("click", function () {
    $("nav").toggleClass("show");
  });

  //   event listener for random play button click
  var audioFiles = [
    "./Assets/Audio/01_nuvve_leni_nenu.mp3",
    "./Assets/Audio/02_Baitikochi Chuste.mp3",
    "./Assets/Audio/03_Adento_gani.mp3",
    "./Assets/Audio/04_Meghalu_lekunna.mp3",
    "./Assets/Audio/05_Sapta Sagaralu Dhaati.mp3",
  ];
  $("#playRandom").on("click", function () {
    var randomIndex = Math.floor(Math.random() * audioFiles.length);
    console.log(randomIndex);
    var randomAudio = audioFiles[randomIndex];

    $("#audioPlayer").attr("src", randomAudio);

    document.getElementById("audioPlayer").play();
  });
});
