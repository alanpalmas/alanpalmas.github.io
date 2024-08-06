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
        introduction: "As a Software QA Engineer, my mission is to ensure that software products meet the highest quality standards. I have knowledge in QA/QC, Web Testing, API Testing, and Mobile Testing, both manual and with test automation tools, which allows me to efficiently detect and prevent defects.",
        about: "About Me",
        aboutText: `I am a <span>Software QA Engineer</span> dedicated and detail-oriented, with a proven track record in ensuring the highest quality standards in software development. My journey in the QA field began as a freelance tester, where I honed my skills and developed a keen sense of detail.
            <br /><br />
            My first formal experience was at <span>Fpay</span>, where I collaborated with an excellent development team to perform QA tasks. This role allowed me to dive into the complexities of quality assurance, working closely with developers to identify and resolve issues, and ensuring the seamless functionality of our products.
            <br /><br />
            After my time at Fpay, I joined the consulting firm <span>Find The Lead</span>, where I worked on a variety of projects, mainly focused on virtual wallets. This experience was crucial in enhancing my knowledge and experience in QA processes and methodologies. I was responsible for conducting rigorous tests, identifying bugs, and collaborating with cross-functional teams to implement solutions that improved user experience.
            <br /><br />
            Currently, I am a proud member of the team at <span>SoFi Technologies</span>, which also includes <span>Galileo Technologies</span> and <span>Technisys</span>. In my role, I contribute to the development and delivery of cutting-edge digital banking solutions. I work on high-profile banking projects in Argentina and Latin America, ensuring that our software meets the highest standards of quality and reliability.
            <br /><br />
            Throughout my career, I have used a variety of QA tools and technologies, including Selenium, JIRA, and Postman, to perform automated and manual tests. My tasks often involve creating and executing test cases, developing test plans, and working closely with developers and stakeholders to deliver robust and user-friendly applications.
            <br /><br />
            In addition to my professional experience, I am currently pursuing a degree in Software Analysis, Development, and Programming, which strengthens my technical foundation and keeps me up-to-date with the latest industry trends and practices.
            <br /><br />
            I am passionate about delivering high-quality software and continuously improving my skills to contribute to the success of my team and the satisfaction of our users.
            <br /><br />
            Over time, my focus has been on continuing to learn and improve in the area of test automation,
            applying best practices and testing techniques. My knowledge in <span>manual testing</span>, <span>automated testing</span>, <span>functional and business analysis</span> allows me to provide 
            <span>efficient</span> and <span>creative</span> solutions.
            <br /><br />
            Outside of my work routine, I constantly train in different technologies that add to my role and dedicate time to the most important thing I have, which is my family.
            <br /><br />
            These are some tools and technologies I am familiar with and have also been working with.`,
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
            description: "In this project, I developed a desktop application in C# using Visual Studio to simulate the complete process of buying movie tickets as a work for a subject in the degree I am pursuing. The application consists of several forms that guide the user through each step of the process: from selecting the movie and choosing the date and time to selecting seats and managing payment."
        },
        contactTitle: "Interested in my profile?",
        contactHeading: "Don't hesitate to contact me!",
        contactDescription: "Send me an email or a WhatsApp message and I will be happy to answer your questions, discuss job opportunities or collaborations.",
        contactButton: "Send me an email",
        ctaContact: "Contact",
        languageToggle: "Español",
        nav: {
            about: "About Me",
            projects: "Projects",
            contact: "Contact",
            cv: "CV"
        }
    },
    es: {
        salutation: "¡Hola!",
        name: "Mi nombre es <span class='name-highlight'>Alan Palmas</span>.",
        declaration: "Software QA Engineer apasionado por la calidad del software",
        introduction: "Como Software QA Engineer, mi misión es asegurar que los productos de software cumplan con los más altos estándares de calidad. Cuento con conocimientos en QA/QC, Web Testing, API Testing y Mobile Testing, tanto manual como con herramientas de automatización de pruebas, esto me permite detectar y prevenir defectos de manera eficiente.",
        about: "Sobre mí",
        aboutText: `Soy <span>Software QA Engineer</span> dedicado y orientado al detalle, con una trayectoria comprobada en asegurar los más altos estándares de calidad en el desarrollo de software. Mi camino en el campo de QA comenzó como tester freelance, donde perfeccioné mis habilidades y desarrollé un agudo sentido del detalle.
            <br /><br />
            Mi primera experiencia formal fue en <span>Fpay</span>, donde colaboré con un excelente equipo de desarrollo para realizar tareas de QA. Este rol me permitió sumergirme en las complejidades del aseguramiento de calidad, trabajando estrechamente con los desarrolladores para identificar y resolver problemas, y asegurando la funcionalidad sin inconvenientes de nuestros productos.
            <br /><br />
            Después de mi tiempo en Fpay, me uní a la consultora <span>Find The Lead</span>, donde trabajé en una variedad de proyectos, principalmente enfocados en billeteras virtuales. Esta experiencia fue fundamental para mejorar mis conocimientos y experiencia en los procesos y metodologías de QA. Me encargué de realizar pruebas rigurosas, identificar errores y colaborar con equipos multifuncionales para implementar soluciones que mejoraran la experiencia del usuario.
            <br /><br />
            Actualmente, soy un orgulloso miembro del equipo de <span>SoFi Technologies</span>, de la cual tambien son parte  <span>Galileo Technologies</span> y <span>Technisys</span>. En mi rol, contribuyo al desarrollo y entrega de soluciones bancarias digitales de vanguardia. Trabajo en proyectos bancarios de alto perfil en Argentina y Latinoamérica, asegurando que nuestro software cumpla con los más altos estándares de calidad y fiabilidad.
            <br /><br />
            A lo largo de mi carrera, he utilizado una variedad de herramientas y tecnologías de QA, incluyendo Selenium, JIRA y Postman, para realizar pruebas automatizadas y manuales. Mis tareas a menudo implican crear y ejecutar casos de prueba, desarrollar planes de prueba y trabajar estrechamente con desarrolladores y partes interesadas para entregar aplicaciones robustas y fáciles de usar.
            <br /><br />
            Además de mi experiencia profesional, actualmente estoy cursando la tecnicatura en Análisis, Desarrollo y Programación de Software, lo que refuerza mi base técnica y me mantiene al tanto de las últimas tendencias y prácticas de la industria.
            <br /><br />
            Me apasiona entregar software de alta calidad y mejorar continuamente mis habilidades para contribuir al éxito de mi equipo y la satisfacción de nuestros usuarios.
            <br /><br />
            Con el tiempo, mi enfoque se ha centrado en continuar aprendiendo y mejorar en el area de automatización de pruebas,
            aplicando las mejores prácticas y técnicas de testing. Mis conocimientos en <span>pruebas manuales</span>, <span>automatizadas</span>, <span>analista funcional y de negocio</span>  me permiten brindar 
            soluciones <span>eficientes</span> y <span>creativas</span>.
            <br /><br />
            Fuera de mi rutina laboral me capacito constantemente en diferentes tecnologias que suman a mi rol y dedico tiempo a lo mas importante que tengo que es mi familia.
            <br /><br />
            Estas son algunas herramientas y tecnologías con las que estoy familiarizado y con las que también he estado trabajando.`,
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
            title: "Proyecto #5 - Compra de entradas de cine",
            subtitle: "Desarrollo de aplicacion de escritorio",
            description: "En este proyecto desarrollé una aplicación de escritorio en C# utilizando Visual Studio para simular el proceso completo de compra de entradas de cine, como trabajo para una materia de la carrera que estoy cursando. La aplicación consta de varios formularios que guían al usuario a través de cada paso del proceso: desde la selección de la película y la elección de la fecha y hora, hasta la selección de asientos y la gestión del pago."
        },
        contactTitle: "¿Te interesó mi perfil?",
        contactHeading: "¡No dudes en contactarme!",
        contactDescription: "Envíame un correo electrónico o un mensaje por WhatsApp y estaré encantado de responder a tus preguntas, discutir oportunidades laborales o de colaboración.",
        contactButton: "Envíame un correo",
        ctaContact: "Contacto",
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
