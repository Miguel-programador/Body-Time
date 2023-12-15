document.getElementById("languages").addEventListener("change", function () {
  var selectedLanguage = this.value;
  window.location.href = "/" + selectedLanguage + window.location.pathname;
});
