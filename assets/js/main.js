//change the language and flag
function changeLanguage(langCode, flagSrc) {
  document.querySelector(".language-flag").src = flagSrc;
  console.log("Language changed to:", langCode);
  document.getElementById("languageModal").classList.remove("show");
  document.querySelector(".modal-backdrop").remove();
}

AOS.init({
  duration: 1200,
});
