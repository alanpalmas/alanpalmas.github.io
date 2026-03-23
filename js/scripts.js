const menuBtn = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const menuList = document.querySelector('.nav-menu');
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        scrollTopBtn.classList.add('show-scroll-top');
    } else {
        scrollTopBtn.classList.remove('show-scroll-top');
    }
})

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
        declaration: "Senior QA Engineer · FinTech & Banking · Test Automation · AI QA Tools",
        introduction: "With 5+ years in manual and automated testing for FinTech and banking products, I specialize in end-to-end test strategies, API testing, automation, and building AI-powered internal QA tools. Currently at SoFi Technologies / Galileo / Technisys.",
        about: "About Me",
        aboutText: `I am a <span>Senior Software QA Engineer</span> with 5+ years of experience in manual and automated testing for <span>FinTech and banking products</span>. I specialize in end-to-end test strategies across mobile (iOS/Android), web, and desktop platforms, with deep expertise in <span>Selenium, Appium, Postman, SoapUI, JMeter, JIRA, and Zephyr</span>.
            <br /><br />
            I currently contribute to high-scale banking platforms at <span>SoFi Technologies / Galileo / Technisys</span>, working on projects for <span>Banco Macro, Banco Nación, and Banco Patagonia</span>. I achieved a <span>15% reduction in production defects</span> by improving critical test coverage and root cause analysis (RCA).
            <br /><br />
            I built internal <span>AI-powered QA tools</span> — including a multi-format test case generator with <span>Figma MCP integration</span> and an automated <span>Zephyr</span> report analyzer — measurably reducing test design and delivery cycle times.
            <br /><br />
            I hold a <span>Higher Technical Degree in Software Analysis, Development & Programming</span> and am currently pursuing a <span>Bachelor's Degree in Digital Technologies</span> at UNICABA. I continuously upskill in automation, CI/CD, and mobile development with Kotlin and Flutter.
            <br /><br />
            Here are some of the tools and technologies I work with:`,
        projects: "Some Projects",
        project1: {
            title: "Project #1 - Urban Routes",
            subtitle: "Web Testing",
            description: "This QA project for the Urban Routes website involved: validating designs against Figma specifications, creating test cases, executing manual UI tests, end-user and new functionality tests. I identified and reported over 50 bugs in Jira."
        },
        project2: {
            title: "Project #2 - ABM Dealership",
            subtitle: "Software Development",
            description: "This project focused on developing a management application for a car dealership. Using C#, the interface was designed and the application was developed in Visual Studio with Windows Forms, and a robust database was created with SQL Server. The system allows for the addition, removal, and modification of vehicles, filtering between used vehicles, new vehicles, cars, trucks, 4x4, hatchback, sedan, brands among other data, ensuring efficient and secure information management."
        },
        project3: {
            title: "Project #3 - API Testing",
            subtitle: "API Testing",
            description: "In this project, I performed API tests for an e-commerce application called 'Urban Grocers', focusing on ensuring the quality and functionality of key endpoints used for managing users, products, and orders. I used advanced tools and methodological approaches to carry out exhaustive tests that guarantee optimal performance and seamless integration."
        },
        project4: {
            title: "Project #4 - Login Automation",
            subtitle: "Automation with Selenium and Python",
            description: "In this project, I automated the login process in a web application using Selenium, Python, and Pytest. The project's goal was to ensure that the login functionality works correctly under different scenarios, including valid and invalid credentials, and error message management."
        },
        project5: {
            title: "Project #5 - Movie Ticket Purchase",
            subtitle: "Desktop Application Development",
            description: "In this project, I developed a desktop application in C# using Visual Studio to simulate the complete process of buying movie tickets. The application consists of several forms guiding the user through each step: from selecting the movie and date/time, to choosing seats and managing payment."
        },
        project6: {
            title: "Project #6 - AI QA Test Case Generator",
            subtitle: "Internal AI Tool · SoFi Technologies",
            description: "Internal AI-powered test case generation platform built at SoFi Technologies. Processes multiple input formats (plain text, PDF, DOCX, HTML, screenshots, MP4 videos, Excel test suites) with Figma MCP integration. Enables automated generation, editing, and export of structured test cases and stakeholder-ready QA scope reports, directly cutting test design cycle times."
        },
        project7: {
            title: "Project #7 - Zephyr QA Reporting Tool",
            subtitle: "QA Report Automation · SoFi Technologies",
            description: "Internal tool developed at SoFi Technologies that automatically parses exported Zephyr test cycle data and generates detailed QA metrics reports. Eliminated manual reporting effort, significantly reduced delivery times, and improved quality status visibility for the team and stakeholders."
        },
        contactTitle: "Interested in my profile?",
        contactHeading: "Don't hesitate to contact me!",
        contactDescription: "Send me an email or a WhatsApp message and I will be happy to answer your questions, discuss job opportunities or collaborations.",
        contactButton: "Send me an email",
        ctaContact: "Contact",
        ctaCV: "My Resume",
        languageToggle: "Español",
        nav: {
            about: "About Me",
            projects: "Projects",
            contact: "Contact",
            cv: "Resume"
        }
    },
    es: {
        salutation: "¡Hola!",
        name: "Mi nombre es <span class='name-highlight'>Alan Palmas</span>.",
        declaration: "Senior QA Engineer · FinTech & Banking · Automatización · AI QA Tools",
        introduction: "Con más de 5 años en testing manual y automatizado para productos FinTech y bancarios, me especializo en estrategias de prueba end-to-end, API testing, automatización y desarrollo de herramientas internas de QA potenciadas con IA. Actualmente en SoFi Technologies / Galileo / Technisys.",
        about: "Sobre mí",
        aboutText: `Soy <span>Senior Software QA Engineer</span> con más de 5 años de experiencia en testing manual y automatizado para <span>productos FinTech y bancarios</span>. Me especializo en estrategias de prueba end-to-end en plataformas mobile (iOS/Android), web y desktop, con dominio de <span>Selenium, Appium, Postman, SoapUI, JMeter, JIRA y Zephyr</span>.
            <br /><br />
            Actualmente contribuyo en <span>SoFi Technologies / Galileo / Technisys</span> a plataformas bancarias de alta escala para clientes como <span>Banco Macro, Banco Nación y Banco Patagonia</span>. Logré una <span>reducción del 15% en defectos en producción</span> mejorando la cobertura de casos críticos y el análisis de causa raíz (RCA).
            <br /><br />
            Desarrollé herramientas internas de QA potenciadas con <span>Inteligencia Artificial</span> — incluyendo un generador de casos de prueba multi-formato con integración <span>Figma MCP</span> y un analizador automático de reportes <span>Zephyr</span> — reduciendo significativamente los tiempos de diseño y entrega de pruebas.
            <br /><br />
            Soy <span>Técnico Superior en Análisis, Desarrollo y Programación de Software</span> y actualmente curso la <span>Licenciatura en Tecnologías Digitales</span> en UNICABA. Me capacito continuamente en automatización, CI/CD y desarrollo mobile con Kotlin y Flutter.
            <br /><br />
            Estas son algunas herramientas y tecnologías con las que trabajo:`,
        projects: "Proyectos",
        project1: {
            title: "Proyecto #1 - Urban Routes",
            subtitle: "Web Testing",
            description: "Este proyecto de QA para el sitio web de Urban Routes involucró: validación de diseños contra especificaciones de Figma, creación de casos de prueba, ejecución de pruebas manuales de UI, usuario final y nuevas funcionalidades. Identifiqué y reporté más de 50 bugs en Jira."
        },
        project2: {
            title: "Proyecto #2 - ABM Concesionaria",
            subtitle: "Desarrollo de Software",
            description: "Este proyecto se centró en el desarrollo de una aplicación de gestión para una concesionaria de automóviles. Utilizando el lenguaje C#, se diseñó la interfaz y se desarrolló la aplicación en Visual Studio con Windows Forms, y se creó una base de datos robusta con SQL Server. El sistema permite el alta, baja y modificación de vehículos, filtrado entre vehiculos usados, 0km, autos, camioneas, 4x4, hatchback, sedan, marcas entre otros datos, asegurando una gestión eficiente y segura de la información."
        },
        project3: {
            title: "Proyecto #3 - Pruebas de API",
            subtitle: "Pruebas Api",
            description: "En este proyecto realicé pruebas de API para una aplicación de comercio electrónico llamada 'Urban Grocers', enfocándome en asegurar la calidad y funcionalidad de los endpoints clave utilizados para la gestión de usuarios, productos y pedidos. Utilicé herramientas avanzadas y enfoques metodológicos para llevar a cabo pruebas exhaustivas que garantizan un rendimiento óptimo y una integración perfecta."
        },
        project4: {
            title: "Proyecto #4 - Automatización de inicio de sesión",
            subtitle: "Automatizacion con Selenium y Python",
            description: "En este proyecto Automaticé el proceso de inicio de sesión en una aplicación web utilizando Selenium, Python y Pytest. El objetivo del proyecto fue asegurar que la funcionalidad de inicio de sesión opere correctamente bajo diferentes escenarios, incluyendo credenciales válidas e inválidas, y la gestión de mensajes de error."
        },
        project5: {
            title: "Proyecto #5 - Compra de Entradas de Cine",
            subtitle: "Desarrollo de Aplicación de Escritorio",
            description: "En este proyecto desarrollé una aplicación de escritorio en C# utilizando Visual Studio para simular el proceso completo de compra de entradas de cine. La aplicación consta de varios formularios que guían al usuario a través de cada paso: desde la selección de la película y la fecha/hora, hasta la selección de asientos y la gestión del pago."
        },
        project6: {
            title: "Proyecto #6 - AI QA Test Case Generator",
            subtitle: "Herramienta Interna con IA · SoFi Technologies",
            description: "Plataforma interna de generación de casos de prueba potenciada con IA, desarrollada en SoFi Technologies. Procesa múltiples formatos de entrada (texto, PDF, DOCX, HTML, capturas, videos MP4, planillas Excel) con integración Figma MCP. Permite generar, editar y exportar casos de prueba estructurados e informes de alcance para stakeholders, reduciendo significativamente los ciclos de diseño de pruebas."
        },
        project7: {
            title: "Proyecto #7 - Zephyr QA Reporting Tool",
            subtitle: "Automatización de Reportes QA · SoFi Technologies",
            description: "Herramienta interna desarrollada en SoFi Technologies que parsea automáticamente los exports de ciclos de prueba de Zephyr y genera reportes detallados de métricas QA. Eliminó el trabajo manual de reporting, redujo significativamente los tiempos de entrega y mejoró la visibilidad del estado de calidad para el equipo y stakeholders."
        },
        contactTitle: "¿Te interesó mi perfil?",
        contactHeading: "¡No dudes en contactarme!",
        contactDescription: "Envíame un correo electrónico o un mensaje por WhatsApp y estaré encantado de responder a tus preguntas, discutir oportunidades laborales o de colaboración.",
        contactButton: "Envíame un correo",
        ctaContact: "Contacto",
        ctaCV: "Mi CV",
        languageToggle: "English",
        nav: {
            about: "Sobre mí",
            projects: "Proyectos",
            contact: "Contacto",
            cv: "Mi CV"
        }
    }
};

const languageToggleBtn = document.getElementById("language-toggle");
let currentLanguage = "es";

languageToggleBtn.addEventListener("click", () => {
    currentLanguage = currentLanguage === "es" ? "en" : "es";
    updateLanguage();
});

function updateLanguage() {
    document.getElementById("salutation").textContent = translations[currentLanguage].salutation;
    document.getElementById("name").innerHTML = translations[currentLanguage].name;
    document.getElementById("declaration").textContent = translations[currentLanguage].declaration;
    document.getElementById("introduction").textContent = translations[currentLanguage].introduction;
    document.getElementById("about-title").textContent = translations[currentLanguage].about;
    document.getElementById("about-text").innerHTML = translations[currentLanguage].aboutText;
    document.getElementById("projects-title").textContent = translations[currentLanguage].projects;

    document.getElementById("project1-title").textContent = translations[currentLanguage].project1.title;
    document.getElementById("project1-subtitle").textContent = translations[currentLanguage].project1.subtitle;
    document.getElementById("project1-description").textContent = translations[currentLanguage].project1.description;

    document.getElementById("project2-title").textContent = translations[currentLanguage].project2.title;
    document.getElementById("project2-subtitle").textContent = translations[currentLanguage].project2.subtitle;
    document.getElementById("project2-description").textContent = translations[currentLanguage].project2.description;

    document.getElementById("project3-title").textContent = translations[currentLanguage].project3.title;
    document.getElementById("project3-subtitle").textContent = translations[currentLanguage].project3.subtitle;
    document.getElementById("project3-description").textContent = translations[currentLanguage].project3.description;

    document.getElementById("project4-title").textContent = translations[currentLanguage].project4.title;
    document.getElementById("project4-subtitle").textContent = translations[currentLanguage].project4.subtitle;
    document.getElementById("project4-description").textContent = translations[currentLanguage].project4.description;

    document.getElementById("project5-title").textContent = translations[currentLanguage].project5.title;
    document.getElementById("project5-subtitle").textContent = translations[currentLanguage].project5.subtitle;
    document.getElementById("project5-description").textContent = translations[currentLanguage].project5.description;

    document.getElementById("project6-title").textContent = translations[currentLanguage].project6.title;
    document.getElementById("project6-subtitle").textContent = translations[currentLanguage].project6.subtitle;
    document.getElementById("project6-description").textContent = translations[currentLanguage].project6.description;

    document.getElementById("project7-title").textContent = translations[currentLanguage].project7.title;
    document.getElementById("project7-subtitle").textContent = translations[currentLanguage].project7.subtitle;
    document.getElementById("project7-description").textContent = translations[currentLanguage].project7.description;

    document.getElementById("contact-title").textContent = translations[currentLanguage].contactTitle;
    document.getElementById("contact-heading").textContent = translations[currentLanguage].contactHeading;
    document.getElementById("contact-description").textContent = translations[currentLanguage].contactDescription;
    document.getElementById("contact-button").textContent = translations[currentLanguage].contactButton;

    document.getElementById("cta-contact").textContent = translations[currentLanguage].ctaContact;

    document.getElementById("nav-about").textContent = translations[currentLanguage].nav.about;
    document.getElementById("nav-projects").textContent = translations[currentLanguage].nav.projects;
    document.getElementById("nav-contact").textContent = translations[currentLanguage].nav.contact;
    document.getElementById("nav-cv").textContent = translations[currentLanguage].nav.cv;

    languageToggleBtn.textContent = translations[currentLanguage].languageToggle;
}

updateLanguage();
