/* Steventechno's Towns & Cities! — showcase site helpers
 *
 * Screenshots: every <figure class="shot" data-shot="ID" data-what="..."> is a
 * placeholder. Drop a file named ID.jpg, ID.png or ID.webp into img/shots/ and
 * it replaces the placeholder automatically. No HTML editing needed.
 * See SCREENSHOTS.md for the full list of IDs.
 *
 * Slide shows: add ID-2.jpg, ID-3.jpg ... next to ID.jpg (same folder and
 * extension) and the figure cycles through them, with dots to pick a frame.
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
        var m = tries[i].match(/^(.*)\.(\w+)$/);
        findFrames(fig, frame, img, m[1], m[2], alt);
      };
      img.onerror = function () { tryExt(i + 1); };
      img.src = tries[i];
    })(0);
  }

  // Look for ID-2, ID-3 ... and turn the figure into a slide show.
  function findFrames(fig, frame, first, base, ext, alt) {
    var imgs = [first];
    (function next(n) {
      var img = new Image();
      img.alt = alt + " (" + n + ")";
      img.onload = function () { imgs.push(img); next(n + 1); };
      img.onerror = function () { if (imgs.length > 1) slideShow(fig, frame, imgs); };
      img.src = base + "-" + n + "." + ext;
    })(2);
  }

  function slideShow(fig, frame, imgs) {
    fig.classList.add("slides");
    var dots = document.createElement("div");
    dots.className = "dots";
    var cur = 0, timer = null, still = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    imgs.forEach(function (img, k) {
      if (k) frame.insertBefore(img, imgs[k - 1].nextSibling);
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Show picture " + (k + 1) + " of " + imgs.length);
      b.addEventListener("click", function () { show(k); restart(); });
      dots.appendChild(b);
    });
    frame.appendChild(dots);
    function show(k) {
      cur = k;
      imgs.forEach(function (img, j) { img.classList.toggle("on", j === k); });
      [].forEach.call(dots.children, function (d, j) { d.classList.toggle("on", j === k); });
    }
    function restart() {
      clearInterval(timer);
      if (!still) timer = setInterval(function () { show((cur + 1) % imgs.length); }, 3500);
    }
    frame.addEventListener("mouseenter", function () { clearInterval(timer); });
    frame.addEventListener("mouseleave", restart);
    show(0);
    restart();
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
