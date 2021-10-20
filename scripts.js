function changeMode() { // Chamando as funções
    changeClasses();
    changeText();
}

function changeClasses() { // Classes
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() { // Textos
    const LightMode = "Light Mode";
    const darkMode = "Dark-Mode";

    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = LightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    // Invertendo as cores do button
    button.innerHTML = darkMode;
    h1.innerHTML = LightMode + " ON";
}

const darkModeClass = 'Dark-Mode';
const button = document.getElementById('mode-selector'); // Elemento button do html
const h1 = document.getElementById('page-title'); // Elemento h1 do html
const body = document.getElementsByTagName('body')[0]; // Elemento body do html
const footer = document.getElementsByTagName('footer')[0]; // Elemento footer do html

button.addEventListener('click', changeMode)
