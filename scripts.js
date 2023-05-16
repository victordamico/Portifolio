const changeThemeBtn = document.querySelector("#change-theme");

changeThemeBtn.addEventListener("change", function () {
    document.querySelector("body").classList.toggle("dark");
});