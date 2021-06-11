let themebtn = document.querySelector(".checkbox");
let themelabel = document.querySelector(".switch-toggle");
let box2sec = document.querySelector(".themetoggle");
themebtn.addEventListener("change", () => {
  document.body.classList.toggle("light");
  document.querySelector(".sec1").classList.toggle("light");
  document.querySelector(".sec2").classList.toggle("light");
  document.querySelector(".sec3").classList.toggle("light");
  document.querySelector(".sec4").classList.toggle("light");
  document.querySelector(".sec21").classList.toggle("light");
  document.querySelector(".sec22").classList.toggle("light");
  document.querySelector(".sec23").classList.toggle("light");
  document.querySelector(".sec24").classList.toggle("light");
  document.querySelector(".sec25").classList.toggle("light");
  document.querySelector(".sec26").classList.toggle("light");
  document.querySelector(".sec27").classList.toggle("light");
  document.querySelector(".sec28").classList.toggle("light");
  themelabel.classList.toggle("light");
});
