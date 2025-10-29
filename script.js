document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar a").forEach(a => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });
});

document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});