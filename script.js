function redirectToThanks() {
    window.location.href = "thanks.html";
  }
  
  function moveDisagreeButton() {
    const btn = document.getElementById("disagreeBtn");
    const maxX = window.innerWidth - btn.clientWidth;
    const maxY = window.innerHeight - btn.clientHeight;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    btn.style.position = "absolute";
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
  }
  