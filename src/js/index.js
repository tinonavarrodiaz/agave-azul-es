import { isMobile } from "./modules/isMobile";
import { slogan, menuToggle } from "./modules/header";
import { imgSlider, slider, sliderTequilas } from "./modules/slider";
import { menuAction } from "./modules/menu";
import { modal } from "./modules/modal";
import { sendForm, validateForm } from "./modules/form";

((d, w) => {
  const host = location.port;
  const access = sessionStorage.getItem("access");
  console.log(location);
  if (host !== "3000") {
    if (host !== "8080") {
      if (!access) location.href = "/";
    }
  }
})(document, window);

const body = document.body;

const stylesheet = document.getElementById("stylesheet");
console.log(stylesheet);

isMobile.mobilecheck()
  ? body.classList.add("mobile")
  : body.classList.add("desktop");
// if (isMobile.mobilecheck()) stylesheet.href="css/mobile.css"

const headerEl = document.getElementById("main-header");
const footerEl = document.getElementById("main-footer");
const sections = [...document.querySelectorAll("section")];

const toggle = document.querySelector(".main-header__toggle");
const nav = document.getElementById("main-nav");
if (isMobile.mobilecheck()) {
  slogan(headerEl);
  menuToggle(nav, toggle);
} else {
  toggle.remove();
}

if (headerEl && sections && footerEl)
  menuAction(headerEl, sections, footerEl, isMobile.mobilecheck());

const sliderEl = document.getElementById("inicio");

if (sliderEl) {
  imgSlider(sliderEl, isMobile.mobilecheck());
}
const gallery = document.getElementById("slider");

const form = document.forms[0];
// console.log(form)

// if (form) validateForm(form)
if (form) sendForm(form);

// if (form){
//   form.addEventListener('submit', e=>{
//     e.preventDefault()
//   })
// }

if (gallery) sliderTequilas(gallery, isMobile.mobilecheck());

if (gallery) modal(gallery);

window.addEventListener("load", e => {
  document.getElementById("modalLoading").remove();
  slider(sliderEl, 5000);
  $(".section__text, .textarea").niceScroll({
    autohidemode: "scroll",
    cursoropacitymin: 0,
    cursoropacitymax: 0,
    railoffset: { right: "-16px" }
    // railpadding: {left: '16px'},
    // background: "red",
    // cursorcolor:"#F11313",
  });
});



