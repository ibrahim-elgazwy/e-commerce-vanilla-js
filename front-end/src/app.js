import homeScreen from './screens/home-screen.js';

const router = () => {
    const main = document.getElementById("main-container");
    main.innerHTML = homeScreen();
}

window.addEventListener('load', router);