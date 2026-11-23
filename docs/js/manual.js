/* Player manual page: renders manual/MANUAL.md into manual.html.
 *
 * To update the manual, replace docs/manual/MANUAL.md. No HTML editing needed.
 *
 * Screenshot placeholders in the manual are lines like
 *   > 📷 **Screenshot needed:** `screenshots/<id>.png`. What to capture.
 * They show as the same placeholder frames as the rest of the site. Drop
 * <id>.png (or .jpg/.webp) into docs/manual/screenshots/ and it appears.
 * If a picture with the same id is in docs/img/shots/, that is used too,
 * so one screenshot can serve both the feature pages and the manual.
 */
(function () {
  var SRC = "manual/MANUAL.md";

  // GitHub-style heading ids, so links like (#11-dependencies-and-optional-packs) work.
  function slug(text, used) {
    var s = text.toLowerCase().trim()
      .replace(/<[^>]+>/g, "")
      .replace(/[^\p{L}\p{N}\s_-]/gu, "")
      .replace(/\s/g, "-");
    var base = s, n = 1;
    while (used[s]) s = base + "-" + n++;
    used[s] = true;
    return s;
  }

  function render(md) {
    var root = document.getElementById("manual");
    root.innerHTML = window.marked.parse(md);

    // Screenshot placeholders -> site placeholder figures.
    var quotes = root.querySelectorAll("blockquote");
    for (var i = 0; i < quotes.length; i++) {
      var q = quotes[i];
      var text = q.textContent;
      if (text.indexOf("Screenshot needed") === -1) continue;
      var code = q.querySelector("code");
      var m = code && code.textContent.match(/([^\/]+)\.(png|jpe?g|webp)$/i);
      if (!m) continue;
      var what = text.split(code.textContent).pop().replace(/^[\s.]+/, "").trim();
      var fig = document.createElement("figure");
      fig.className = "shot";
      fig.setAttribute("data-shot", m[1]);
      fig.setAttribute("data-dirs", "manual/screenshots,img/shots");
      fig.setAttribute("data-what", what);
      q.parentNode.replaceChild(fig, q);
      window.STShots.build(fig);
    }

    // Real images in the markdown are relative to manual/.
    var imgs = root.querySelectorAll("img");
    for (var j = 0; j < imgs.length; j++) {
      var src = imgs[j].getAttribute("src") || "";
      if (!/^(https?:|\/|data:)/.test(src)) imgs[j].setAttribute("src", "manual/" + src);
    }

    // Tables get the site's table style and scroll on small screens.
    var tables = root.querySelectorAll("table");
    for (var k = 0; k < tables.length; k++) {
      var t = tables[k];
      t.className = "spec";
      var wrap = document.createElement("div");
      wrap.className = "table-scroll";
      t.parentNode.insertBefore(wrap, t);
      wrap.appendChild(t);
    }

    // Heading ids + contents list (h2 sections, h3 sub-entries).
    var used = {};
    var toc = document.getElementById("toc");
    var list = document.createElement("ol");
    var current = null;
    var heads = root.querySelectorAll("h1, h2, h3");
    for (var h = 0; h < heads.length; h++) {
      var el = heads[h];
      el.id = slug(el.textContent, used);
      if (el.tagName === "H1") { el.classList.add("manual-title"); continue; }
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + el.id;
      a.textContent = el.textContent;
      li.appendChild(a);
      if (el.tagName === "H2") {
        list.appendChild(li);
        current = document.createElement("ol");
        li.appendChild(current);
      } else if (current) {
        current.appendChild(li);
      }
    }
    toc.appendChild(list);

    // Jump to the hash now that the ids exist.
    if (location.hash) {
      var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) target.scrollIntoView({ behavior: "instant" });
    }

    // Highlight the section being read.
    var links = toc.querySelectorAll("a");
    var byId = {};
    for (var l = 0; l < links.length; l++) byId[links[l].getAttribute("href").slice(1)] = links[l];
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var prev = toc.querySelector("a.active");
          if (prev) prev.classList.remove("active");
          if (byId[e.target.id]) byId[e.target.id].classList.add("active");
        });
      }, { rootMargin: "-80px 0px -70% 0px" });
      root.querySelectorAll("h2, h3").forEach(function (el) { io.observe(el); });
    }

    // Mobile: collapsible contents.
    var aside = document.querySelector(".manual-toc");
    aside.querySelector(".toc-toggle").addEventListener("click", function () { aside.classList.toggle("open"); });
    toc.addEventListener("click", function (e) { if (e.target.tagName === "A") aside.classList.remove("open"); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    fetch(SRC, { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(render)
      .catch(function () {
        document.getElementById("manual").innerHTML =
          '<div class="note"><b>The manual could not be loaded.</b> If you opened this file straight from disk, ' +
          'browsers block that. Run <code>python -m http.server</code> in the <code>docs</code> folder and open ' +
          '<code>http://localhost:8000/manual.html</code>, or read <a href="manual/MANUAL.md">MANUAL.md</a> directly.</div>';
      });
  });
})();
