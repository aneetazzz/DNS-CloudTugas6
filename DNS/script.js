const steps = [
  {
    id: "user",
    desc: "Pengguna mengetik domain seperti www.google.com di browser."
  },
  {
    id: "arrow1",
    desc: "Permintaan dikirim ke DNS Server..."
  },
  {
    id: "dns",
    desc: "DNS Server mencari alamat IP dari domain tersebut."
  },
  {
    id: "arrow2",
    desc: "Hasil ditemukan! Mengirim IP ke browser..."
  },
  {
    id: "ip",
    desc: "Alamat IP diterima oleh browser."
  },
  {
    id: "arrow3",
    desc: "Browser terhubung ke server website..."
  },
  {
    id: "website",
    desc: "Website tampil di layar pengguna 🎉"
  }
];

const desc = document.getElementById("desc");
const btn = document.getElementById("startBtn");

btn.addEventListener("click", () => {
  let i = 0;
  document.querySelectorAll(".stage").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".arrow").forEach(a => a.style.setProperty("--anim", "none"));
  desc.style.opacity = 0.6;
  
  const interval = setInterval(() => {
    if (i >= steps.length) {
      clearInterval(interval);
      desc.textContent = "✅ Proses selesai!";
      return;
    }

    const step = steps[i];
    desc.textContent = step.desc;
    desc.style.opacity = 1;

    if (step.id.includes("arrow")) {
      const arrow = document.getElementById(step.id);
      arrow.querySelector("::after"); // trigger
      arrow.style.setProperty("animation", "moveArrow 1s linear infinite");
      arrow.style.background = "rgba(0,212,255,0.4)";
      arrow.style.opacity = "1";
      arrow.style.position = "relative";
      arrow.classList.add("active");
      arrow.style.setProperty("animation", "moveArrow 1.5s linear");
      arrow.style.overflow = "hidden";
      arrow.style.setProperty("--anim", "moveArrow");
      arrow.style.position = "relative";
      arrow.style.background = "rgba(255,255,255,0.2)";
      arrow.style.animation = "moveArrow 1s linear";
      arrow.style.setProperty("animation-iteration-count", "1");
    } else {
      document.querySelectorAll(".stage").forEach(s => {
        if (s.classList.contains(step.id)) s.classList.add("active");
      });
    }

    i++;
  }, 1500);
});
