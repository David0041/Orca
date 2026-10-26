
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("orca-container");
  const particles = document.getElementById("ocean-particles");

  if (!container || !particles) return;


const orcas = [
  {
    image: "images/orca-1.png",
    size: 350,
    top: 20,
    duration: 75,
    delay: -20,
    opacity: 0.8,
    blur: 0,
    reverse: false
  },
  {
    image: "images/orca-2.png",
    size: 260,
    top: 45,
    duration: 100,
    delay: -50,
    opacity: 0.5,
    blur: 1,
    reverse: true
  },
  {
    image: "images/orca-3.png",
    size: 190,
    top: 65,
    duration: 120,
    delay: -75,
    opacity: 0.3,
    blur: 2,
    reverse: false
  },
  {
    image: "images/orca-4.png",
    size: 300,
    top: 80,
    duration: 90,
    delay: -35,
    opacity: 0.6,
    blur: 0.5,
    reverse: true
  }
];

orcas.forEach(orca => {
  const el = document.createElement("div");
  el.className = "orca" + (orca.reverse ? " reverse" : "");

  const img = document.createElement("img");
  img.src = orca.image;
  img.alt = "";
  img.draggable = false;

  el.appendChild(img);

  el.style.setProperty("--size", `${orca.size}px`);
  el.style.setProperty("--top", `${orca.top}%`);
  el.style.setProperty("--duration", `${orca.duration}s`);
  el.style.setProperty("--delay", `${orca.delay}s`);
  el.style.setProperty("--opacity", orca.opacity);
  el.style.setProperty("--blur", `${orca.blur}px`);
  el.style.setProperty(
    "--direction",
    orca.reverse ? -1 : 1
  );

  container.appendChild(el);
});


  // Unterschiedliche Tiere und Tiefen
  const orcas = [
    { size: 250, top: 22, duration: 65, delay: -20, opacity: .75, blur: 0, reverse: false },
    { size: 160, top: 48, duration: 90, delay: -60, opacity: .40, blur: 1, reverse: true },
    { size: 110, top: 70, duration: 115, delay: -30, opacity: .24, blur: 2, reverse: false },
    { size: 195, top: 84, duration: 80, delay: -45, opacity: .55, blur: .5, reverse: true }
  ];

  orcas.forEach(orca => {
    const el = document.createElement("div");

    el.className = "orca" + (orca.reverse ? " reverse" : "");
    el.innerHTML = orcaSVG;

    el.style.setProperty("--size", `${orca.size}px`);
    el.style.setProperty("--top", `${orca.top}%`);
    el.style.setProperty("--duration", `${orca.duration}s`);
    el.style.setProperty("--delay", `${orca.delay}s`);
    el.style.setProperty("--opacity", orca.opacity);
    el.style.setProperty("--blur", `${orca.blur}px`);
    el.style.setProperty("--direction", orca.reverse ? -1 : 1);

    container.appendChild(el);
  });

  // Schwebende Wasserpartikel
  for (let i = 0; i < 35; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration =
      `${12 + Math.random() * 18}s`;
    particle.style.animationDelay =
      `${-Math.random() * 30}s`;

    particles.appendChild(particle);
  }
});

