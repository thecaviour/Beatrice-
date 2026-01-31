const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 80);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  document.getElementById("question").style.display = "none";
  document.getElementById("result").style.display = "block";
});
