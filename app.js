const backProject = document.querySelector(".back-project-btn");
const bookmarkChange = document.querySelector(".bookmark-change");
const bookmarkProject = document.querySelector(".bookmark-btn");
const bookmarkProject1 = document.querySelector(".bookmark-btn1");
const pledgePopup = document.querySelector(".support_pop");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const radio = document.querySelectorAll("input[type='radio']");
const pledgeCard = document.querySelectorAll(".pledge-card");

backProject.addEventListener("click", function () {
  pledgePopup.classList.remove("hide");
  overlay.classList.remove("hide");
});

bookmarkProject.addEventListener("click", function () {
  bookmarkProject.classList.add("hide");
  bookmarkProject1.classList.remove("hide");
});

bookmarkProject1.addEventListener("click", function () {
  bookmarkProject1.classList.add("hide");
  bookmarkProject.classList.remove("hide");
});

const array = [];

for (let i = 0; pledgeCard.length > i; i++) {
  array[i] = false;
  closeModal.addEventListener("click", function () {
    pledgePopup.classList.add("hide");
    overlay.classList.add("hide");
    radio.forEach((radio) => {
      if (radio.checked) {
        radio.checked = false;
        array[i] = false;
      }
    });
  });
  radio[i].addEventListener("click", function () {
    if (array[i] == true) {
      radio[i].checked = false;
      array[i] = false;
      return;
    } else {
      array.pop();
      array[i] = true;
    }
  });
}

///

const noRewardbtn = document.querySelector(".noreward-continue");
const bamboobtn = document.querySelector(".bamboo-continue");
const blackbtn = document.querySelector(".black-continue");
const thankYou = document.querySelector(".thank-you");
const gotbtn = document.querySelector(".got-it");
const totalFunds = document.querySelector(".funds");
const totalBackers = document.querySelector(".t-backers");

const bambooValue = document.querySelector(".bamboo-value");
const blackValue = document.querySelector(".black-value");

const bambooLeft = document.querySelector(".bamboo-left");
const blackLeft = document.querySelector(".black-left");

const bambooLeftHome = document.querySelector(".bamboo-left-home");
const blackLeftHome = document.querySelector(".black-left-home");

const bambooLeftMobile = document.querySelector(".bamboo-left-mobile");
const blackLeftMobile = document.querySelector(".black-left-mobile");

const fundsBar = document.querySelector(".bar-fill");

let funds = 89914;
let Backers = 5007;
let bamLeft = 101;
let blacLeft = 64;

noRewardbtn.addEventListener("click", function () {
  pledgePopup.classList.toggle("hide");
  thankYou.classList.toggle("hide");
  totalBackers.textContent = (Backers = Backers + 1).toLocaleString();
});

bamboobtn.addEventListener("click", function () {
  pledgePopup.classList.toggle("hide");
  thankYou.classList.toggle("hide");
  totalFunds.textContent = `$${(funds =
    funds + Number(bambooValue.value)).toLocaleString()}`;
  totalBackers.textContent = (Backers = Backers + 1).toLocaleString();
  bambooLeft.textContent = bamLeft = bamLeft - 1;
  bambooLeftHome.textContent = bamLeft;
  bambooLeftMobile.textContent = bamLeft;
  fundsBar.style.width = `${funds * 0.001}%`;
});

blackbtn.addEventListener("click", function () {
  pledgePopup.classList.toggle("hide");
  thankYou.classList.toggle("hide");
  totalFunds.textContent = `$${(funds =
    funds + Number(blackValue.value)).toLocaleString()}`;
  totalBackers.textContent = (Backers = Backers + 1).toLocaleString();
  blackLeft.textContent = blacLeft = blacLeft - 1;
  blackLeftHome.textContent = blacLeft;
  blackLeftMobile.textContent = blacLeft;
  fundsBar.style.width = `${funds * 0.001}%`;
});

gotbtn.addEventListener("click", function () {
  thankYou.classList.toggle("hide");
  overlay.classList.toggle("hide");
});

// select reward

const bambooSelectbtn = document.querySelector(".bamboo-select-reward");
const blackSelectbtn = document.querySelector(".black-select-reward");

bambooSelectbtn.addEventListener("click", function () {
  pledgePopup.classList.toggle("hide");
  overlay.classList.remove("hide");
  document.getElementById("pledge-2").checked = true;
});

blackSelectbtn.addEventListener("click", function () {
  pledgePopup.classList.toggle("hide");
  overlay.classList.remove("hide");
  document.getElementById("pledge-3").checked = true;
});

//mobile menu

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navItems = document.querySelector(".nav_list");

const mobileBookmark = document.querySelector(".bookmark_mobileicon");

mobileBookmark.addEventListener("click", function () {
  mobileBookmark.classList.toggle("bookmarked");
});

openMenu.addEventListener("click", function () {
  navItems.classList.remove("mobile-menu");
  openMenu.classList.add("hide");
  closeMenu.classList.remove("hide");
});

closeMenu.addEventListener("click", function () {
  navItems.classList.add("mobile-menu");
  openMenu.classList.remove("hide");
  closeMenu.classList.add("hide");
});
