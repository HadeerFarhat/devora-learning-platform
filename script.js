const $ = (s) => document.querySelector(s);
const ic = (n) => `<span class="material-symbols-outlined">${n}</span>`;
const ar = (n) => n.toLocaleString("ar-EG");
const onHome = !!$("#trail"),
  H = onHome ? "" : "index.html";

document.body.insertAdjacentHTML(
  "afterbegin",
  `<header class="hd" id="hd"><div class="hd-in">
<a class="brand" href="${onHome ? "#" : "index.html"}"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnUufxqKIGxa3Tim9-JxiQslQMqD5dZoc7w3PfxriM3JKCyzK4iJ7sMk6IX5mnRFQGKWleFsVII6gP4POvtsv6Xn6SxZAd8KsVvfuJ6gObPpFDgpZpftQS318x_Ai6I06MWk0mTj0mmoH0Tdqx2R88g9VeWG3oQDbSEqKoyMRq7BFxmLgJR9mIDUNk0b8P1vU195yST2b0OgemejC62HOJS-6wCwFPRk4uVxIwsQT1" alt=""><span>Devora</span><em class="ver">v0.1</em></a>
<nav class="nav" id="nav"><a href="${H}#map">الأساسيات</a><a href="${H}#tracks">التراكات</a><a href="${H}#community">المجتمع</a></nav>
<div class="act"><a class="start" href="${H}#map">ابدأ مجاناً</a>
<div class="user"><button aria-label="الحساب">${ic("person")}</button><span class="tip">الحسابات في النسخة الجاية</span></div>
<button class="burger" id="bg" aria-label="القائمة" aria-expanded="false">${ic("menu")}</button></div></div></header>`,
);
document.body.insertAdjacentHTML(
  "beforeend",
  `<footer>Devora v0.1 · نحو تجربة تعلم أفضل 🚀</footer>`,
);
const hd = $("#hd"),
  bg = $("#bg");
const setMenu = (o) => {
  hd.classList.toggle("open", o);
  bg.setAttribute("aria-expanded", o);
  bg.innerHTML = ic(o ? "close" : "menu");
};
bg.onclick = () => setMenu(!hd.classList.contains("open"));
$("#nav").onclick = (e) => {
  if (e.target.closest("a")) setMenu(false);
};

if (onHome) {
  const chips = (s) =>
    Object.keys(TYPES)
      .filter((k) => s.items.some((x) => x.t === k))
      .map((k) => `<span>${ic(TYPES[k][0])}${TYPES[k][1]}</span>`)
      .join("");
  $("#trail").innerHTML =
    STAGES.map(
      (
        s,
        i,
      ) => `<li class="step c${i + 1}"><div class="node">${ic(s.icon)}</div>
<article class="card"><span class="lbl">المرحلة ${ar(i + 1).padStart(2, "٠")}</span><h3>${s.title}</h3><p>${s.desc}</p>
<div class="chips">${chips(s)}</div><a class="go" href="stage.html?id=${i + 1}">افتح المرحلة ${ic("arrow_back")}</a></article></li>`,
    ).join("") +
    `<li class="step goal c6"><div class="node">${ic("emoji_events")}</div><article class="card"><span class="lbl">الهدف</span><h3>جاهز تختار تراكك</h3>
<p>بعد الأساسيات تبقى جاهز تدخل أي باب تحبه بثقة.</p><a class="go" href="#tracks">شوف التراكات ${ic("arrow_back")}</a></article></li>`;
  const WORLD_IMAGES = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    "https://images.unsplash.com/photo-1558655146-d09347e92766",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  ];

  $("#trackGrid").innerHTML = TRACKS.map(
    (t, i) => `
    <a
      class="world-card"
      href="${t.u}"
      target="_blank"
      rel="noopener"
    >
      <div class="world-image">
        <img
          src="${WORLD_IMAGES[i % WORLD_IMAGES.length]}?auto=format&fit=crop&w=900&q=85"
          alt="${t.n}"
          loading="lazy"
        >
      </div>

      <div class="world-content">
        <span class="world-number">
          ${ic(t.icon)}
          العالم ${ar(i + 1)}
        </span>

        <h3>${t.n}</h3>

        <p>${t.d}</p>

        <span class="world-link">
          استكشف العالم
          ${ic("arrow_back")}
        </span>
      </div>
    </a>
  `,
  ).join("");
  $("#pills").innerHTML = COMMUNITY.map(
    (c) => `<a href="${c.u}">${ic(c.icon)}${c.n}</a>`,
  ).join("");
}

if ($("#stage")) {
  const N = STAGES.length,
    id = Math.min(
      Math.max(+new URLSearchParams(location.search).get("id") || 1, 1),
      N,
    ),
    s = STAGES[id - 1];
  document.title = `${s.title} | Devora`;
  const groups = Object.keys(TYPES)
    .map((k) => {
      const its = s.items.filter((x) => x.t === k);
      if (!its.length) return "";
      return (
        `<div class="gt"><span>${ic(TYPES[k][0])}</span>${TYPES[k][1]}</div><div class="rl">` +
        its
          .map((x) =>
            x.url
              ? `<a class="res" href="${x.url}" target="_blank" rel="noopener"><span>${ic(TYPES[k][0])}</span><span><b>${x.title}</b><small>${x.src}</small></span>${ic("open_in_new")}</a>`
              : `<div class="res off"><span>${ic(TYPES[k][0])}</span><span><b>${x.title}</b><small>${x.src} · قريبًا</small></span></div>`,
          )
          .join("") +
        "</div>"
      );
    })
    .join("");
  $("#stage").className = `wrap c${id}`;
  $("#stage").innerHTML =
    `<a class="back" href="index.html#map">${ic("arrow_forward")} رجوع للمسار</a>
<div class="st-hero"><div class="st-art">${s.img ? `<img src="${s.img}" alt="">` : ic(s.icon)}</div>
<div><span class="lbl">المرحلة ${ar(id)} من ${ar(N)}</span><h1>${s.title}</h1><p>${s.intro}</p></div></div>${groups}
<div class="pager">${id > 1 ? `<a href="stage.html?id=${id - 1}">${ic("arrow_forward")} ${STAGES[id - 2].title}</a>` : "<span></span>"}
${id < N ? `<a class="nx" href="stage.html?id=${id + 1}">${STAGES[id].title} ${ic("arrow_back")}</a>` : `<a class="nx" href="index.html#tracks">اختار تراكك ${ic("arrow_back")}</a>`}</div>`;
}
