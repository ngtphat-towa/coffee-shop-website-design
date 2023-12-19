//  MENU BTN
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  removeActive(navbar);
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// CART BTN
let cartItemContainer = document.querySelector(".cart-items-container");
let cartBtn = document.querySelector("#cart-btn");

cartBtn.onclick = () => {
  removeActive(cartItemContainer);
  cartItemContainer.classList.toggle("active");
};

// SEARCH
let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

searchBtn.onclick = () => {
  removeActive(searchForm);
  searchForm.classList.toggle("active");
};

function removeActive(activeElement) {
  let activeElements = [navbar, cartItemContainer, searchForm];
  activeElements.forEach((element) => {
    if (element !== activeElement && element.classList.contains("active")) {
      element.classList.remove("active");
    }
  });
}
