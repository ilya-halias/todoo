
const themeContainer = document.querySelector("body");
const toggleButton = document.createElement("button-theme");
toggleButton.textContent = "theme";

themeContainer.append(toggleButton);


const changeTheme = () => {
toggleButton.addEventListener("click", () => {
    const themeName = document.body.getAttribute("data-theme");
    const nextThemeName = themeName === "light" ? "dark" : "light";

    document.body.setAttribute("data-theme", nextThemeName);
    localStorage.setItem("theme" , nextThemeName)


})}
changeTheme()

let themeFromStorage = localStorage.getItem("theme")
document.body.setAttribute("data-theme", themeFromStorage)




