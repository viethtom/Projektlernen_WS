(function () {
  var PASSWORD = "Kreuzgasse";
  var KEY = "ws_eduscrum_auth";
  var overlay = document.getElementById("gate-overlay");
  if (!overlay) return;
  var form = document.getElementById("gate-form");
  var input = document.getElementById("gate-input");
  var error = document.getElementById("gate-error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value === PASSWORD) {
      try { sessionStorage.setItem(KEY, "1"); } catch (err) {}
      overlay.remove();
    } else {
      error.hidden = false;
      input.value = "";
      input.focus();
    }
  });

  input.focus();
})();
