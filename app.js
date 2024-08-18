// Icon:

const icon1 = document.querySelector(".icon");
const icon2 = document.querySelector(".icon2");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const profileCards = document.querySelector(".profile-cards");
// const recentLogins=document.querySelector('.recent-logins')

card1.addEventListener("mouseenter", () => {
  icon1.style.backgroundColor = "white";
  icon1.style.padding = "4px";
  icon1.style.borderRadius = "50%";
  icon1.style.transform = "scale(0.98)";
});

card1.addEventListener("mouseleave", () => {
  icon1.style.backgroundColor = "transparent";
  icon1.style.padding = "0px";
  icon1.style.borderRadius = "0px";
  icon1.style.transform = "scale()";
});

//Second card:

card2.addEventListener("mouseenter", () => {
  icon2.style.backgroundColor = "white";
  icon2.style.padding = "4px";
  icon2.style.borderRadius = "50%";
  icon2.style.transform = "scale(0.98)";
});

card2.addEventListener("mouseleave", () => {
  icon2.style.backgroundColor = "transparent";
  icon2.style.padding = "0px";
  icon2.style.borderRadius = "0px";
  icon2.style.transform = "scale()";
});

//Redirecting to a new page:

profileCards.addEventListener("click", function (elem) {
  if (event.target.id === "image1") {
    window.location.href = "profile.html";
  }
});

profileCards.addEventListener("click", function (elem) {
  if (event.target.id === "image2") {
    window.location.href = "profile2.html";
  }
});
