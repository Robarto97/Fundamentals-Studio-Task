const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const navigation = document.querySelector("#nav");

openMenu.addEventListener("click", () => {
  if (navigation.style.display === "none") {
    navigation.style.display = "block";
  } else {
    navigation.style.display = "none";
  }
});
closeMenu.addEventListener("click", () => {
  navigation.style.display = "none";
});
