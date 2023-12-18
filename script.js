$(document).ready(() => {
  const f_name = prompt("What does Vasu like to call you?");
  const name_element = document.getElementById("friend_name");
  name_element.innerText = `Dear ${f_name}`;

  // smooth scrolling for anchor links
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    const target = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      800
    );
  });

  // Photo gallery lightbox
  $(".photo-container img").on("click", function () {
    const imageUrl = $(this).attr("src");
    const imageAlt = $(this).attr("alt");

    const lightboxContent = `
      <div class="lightbox">
          <img src="${imageUrl}" alt="${imageAlt}"/>
          <span class="close">&times;</span>
      </div>
      `;
    $("body").append(lightboxContent);
  });

  // Add responsiveness to the navigation menu
  $(".menu-icon").on("click", () => {
    $("nav").toggleClass("show");
  });

  // event listener for random play button click
  const audioFiles = [
    {
      src: "./Assets/Audio/01_nuvve_leni_nenu.mp3",
      image: "./Assets/Images/Nuvve leni nenu.jpeg",
      title: "Nuvve leni nenu",
    },
    {
      src: "./Assets/Audio/02_Baitikochi Chuste.mp3",
      image: "./Assets/Images/Baitikocchi chusthey.jpeg",
      title: "Baitikocchi chusthey",
    },
    {
      src: "./Assets/Audio/03_Adento_gani.mp3",
      image: "./Assets/Images/Adhento_gani.jpeg",
      title: "Adento gani",
    },
    {
      src: "./Assets/Audio/04_Meghalu_lekunna.mp3",
      image: "./Assets/Images/meghalu_lekunna.jpeg",
      title: "Meghalu lekunna",
    },
    {
      src: "./Assets/Audio/05_Sapta Sagaralu Dhaati.mp3",
      image: "./Assets/Images/Saptha_sagaralu.jpg",
      title: "Sapta sagaralu",
    },
  ];

  $("#playRandom").on("click", () => {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const randomAudio = audioFiles[randomIndex];

    $("#audioPlayer").attr("src", randomAudio.src);
    $("#songImage").attr("src", randomAudio.image);
    $("#songTitle").text(randomAudio.title);

    document.getElementById("audioPlayer").play();
  });
});
