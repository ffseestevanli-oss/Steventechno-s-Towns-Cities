/* Steventechno's Towns & Cities! — showcase site helpers
 *
 * Screenshots: every <figure class="shot" data-shot="ID" data-what="..."> is a
 * placeholder. Drop a file named ID.jpg, ID.png or ID.webp into img/shots/ and
 * it replaces the placeholder automatically. No HTML editing needed.
 * See SCREENSHOTS.md for the full list of IDs.
 *
 * When every screenshot is in, add class="final" to <body> on each page to hide
 * any placeholder that is still empty.
 */
(function () {
  var EXT = ["jpg", "png", "webp"];

  function buildShot(fig) {
    var id = fig.getAttribute("data-shot");
    var what = fig.getAttribute("data-what") || "";
    var dirs = (fig.getAttribute("data-dirs") || "img/shots").split(",");
    var tries = [];
    for (var d = 0; d < dirs.length; d++)
      for (var e = 0; e < EXT.length; e++) tries.push(dirs[d] + "/" + id + "." + EXT[e]);
    var frame = document.createElement("div");
    frame.className = "frame";

    var ph = document.createElement("div");
    ph.className = "ph";
    ph.innerHTML =
      '<span class="tag">SCREENSHOT NEEDED</span>' +
      '<span class="id">' + dirs[0] + '/' + id + '.' + (dirs[0] === "img/shots" ? "jpg" : "png") + '</span>' +
      '<span class="what"></span>';
    ph.querySelector(".what").textContent = what;
    frame.appendChild(ph);
    fig.insertBefore(frame, fig.firstChild);

    var alt = (fig.querySelector("figcaption") || {}).textContent || what;
    (function tryExt(i) {
      if (i >= tries.length) return;
      var img = new Image();
      img.alt = alt;
      img.onload = function () {
        frame.insertBefore(img, ph);
        fig.classList.add("loaded");
      };
      img.onerror = function () { tryExt(i + 1); };
      img.src = tries[i];
    })(0);
  }

  window.STShots = { build: buildShot };

  document.addEventListener("DOMContentLoaded", function () {
    var shots = document.querySelectorAll("figure.shot[data-shot]");
    for (var i = 0; i < shots.length; i++) buildShot(shots[i]);

    var t = document.querySelector(".nav-toggle");
    var n = document.querySelector(".nav");
    if (t && n) t.addEventListener("click", function () { n.classList.toggle("open"); });
  });
})();
