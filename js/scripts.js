const menuBtn = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const menuList = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', showMenu);

function showMenu(){
    menuBtn.classList.toggle('is-active');
    menuBar.classList.toggle('is-active');
    menuList.classList.toggle('is-active');
}

const translations = {
    en: {
        salutation: "Hello!",
        name: "My name is <span class='name-highlight'>Alan Palmas</span>.",
        declaration: "Software QA Engineer passionate about software quality",
        about: "About Me",
        projects: "Projects",
        contactHeading: "Contact Me",
        contactDescription: "Send me an email and I will be happy to answer your questions or discuss job opportunities and collaboration.",
        contactButton: "Send me an email",
        languageToggle: "Español"
    },
    es: {
        salutation: "¡Hola!",
        name: "Mi nombre es <span class='name-highlight'>Alan Palmas</span>.",
        declaration: "Software QA Engineer apasionado por la calidad del software",
        about: "Sobre mí",
        projects: "Proyectos",
        contactHeading: "¡No dudes en contactarme!",
        contactDescription: "Envíame un correo electrónico y estaré encantado de responder a tus preguntas o discutir oportunidades laborales y de colaboración.",
        contactButton: "Envíame un correo",
        languageToggle: "English"
    }
};

const languageToggleBtn = document.getElementById("language-toggle");
let currentLanguage = "es";

languageToggleBtn.addEventListener("click", () => {
    currentLanguage = currentLanguage === "es" ? "en" : "es";
    updateLanguage();
});

function updateLanguage() {
    document.querySelector(".salutation").textContent = translations[currentLanguage].salutation;
    document.querySelector("h1").innerHTML = translations[currentLanguage].name;
    document.querySelector(".declaration").textContent = translations[currentLanguage].declaration;
    document.querySelector("#about .separator h2").textContent = translations[currentLanguage].about;
    document.querySelector("#projects .separator h2").textContent = translations[currentLanguage].projects;
    document.querySelector("#contact h4").textContent = translations[currentLanguage].contactHeading;
    document.querySelector("#contact p").textContent = translations[currentLanguage].contactDescription;
    document.querySelector("#contact .cta2").textContent = translations[currentLanguage].contactButton;
    languageToggleBtn.textContent = translations[currentLanguage].languageToggle;
}

updateLanguage();