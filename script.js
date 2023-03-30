let playOnce = true;

window.addEventListener("scroll", () => {
  // si on scroll de 50 vers le bas, la nav devient plus petite, sinon elle reprend sa taille //
  if (window.scrollY > 50) {
    navbar.style.height = "50px";
  } else {
    navbar.style.height = "90px";
  }

  // si on scroll à 300 vers le bas, l'image apparait et se désopacifie //

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }

  // faire apparaitre la popup

  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(400px)";
});
