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
        contact: "Contact",
        cv: "My CV",
        contactHeading: "Contact Me",
        contactDescription: "Send me an email or a WhatsApp message, and I will be happy to answer your questions, discuss job opportunities or collaboration.",
        contactButton: "Send me an email",
        languageToggle: "Español"
    },
    es: {
        salutation: "¡Hola!",
        name: "Mi nombre es <span class='name-highlight'>Alan Palmas</span>.",
        declaration: "Software QA Engineer apasionado por la calidad del software",
        about: "Sobre mí",
        projects: "Proyectos",
        contact: "Contacto",
        cv: "Mi CV",
        contactHeading: "¡No dudes en contactarme!",
        contactDescription: "Envíame un correo electrónico o un mensaje por WhatsApp y estaré encantado de responder a tus preguntas, discutir oportunidades laborales o de colaboración.",
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
    document.querySelector(".nav-menu .nav-link a[href='#about']").textContent = translations[currentLanguage].about;
    document.querySelector(".nav-menu .nav-link a[href='#projects']").textContent = translations[currentLanguage].projects;
    document.querySelector(".nav-menu .nav-link a[href='#contact']").textContent = translations[currentLanguage].contact;
    document.querySelector(".nav-menu .nav-link a[href*='drive.google.com']").textContent = translations[currentLanguage].cv;
    document.querySelector("#contact h4").textContent = translations[currentLanguage].contactHeading;
    document.querySelector("#contact p").textContent = translations[currentLanguage].contactDescription;
    document.querySelector("#contact .cta2").textContent = translations[currentLanguage].contactButton;
    languageToggleBtn.textContent = translations[currentLanguage].languageToggle;
}

updateLanguage();
