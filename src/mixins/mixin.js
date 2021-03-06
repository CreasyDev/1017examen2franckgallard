// définition de la constante permettant de changer la langue du projet en Français ou Anglais
// Pour changer la langue du projet en français faites : language = "fr"
// Pour changer la langue du projet en anglais faites : language = "en"
export const language = "fr";

// l'object json 'TRANSLATIONS' contenant à la fois l'objet json (en) des traductions en anglais et l'objet json (fr) des traductions en français
const TRANSLATIONS = {
  en: {
    menuHome: "Home",
    menuProjects: "Projects",
    menuContact: "Contact",
    welcome: "Welcome",
    connectedMessage: "You are connected",
    notConnectedMessage: "You are not connected",
    login: "Login",
    logout: "Logout",
    myProfile: "My profile",
    myProjects: "My projects",
    myProfileContent1: "Self-taught by nature, I built my experience through my thirteen years spent in the world of the Web. As an integrator I worked on various projects for small and medium-sized companies. I managed to overcome many challenges. In particular, when the complexity of certain technical requests went well beyond my skills",
    myProfileContent2: "I like the visual, it's what allows me to design an interface to make it a suitable user experience. Although initiative is part of my personality, integrity, sharing and group cohesion are traits that I possess. My short term goal is to evolve within a Web agency as a Junior Front-end Developer",
    myExperienceContent1: "Participate in the development of web and mobile services: HTML5 | SASS | JavaScript. Program interfaces so that they are animated and interactive: JavaScript. Redesign different parts of a project using: HTML5 | CSS3 | SASS Deploy different projects and perform tests to ensure they are functional",
    myExperienceContent2: "Integrate content on the organization's website via hypers media languages: HTML | CSS. Make the pages interactive using the library and language: JQuery | Native JavaScript. Make flyers, newsletters, banners, photomontages with: Photoshop | Illustrator | HTML | CSS",
    myExperienceContent3: "Manage the hosting and updates of the company's website: HTML | CSS. Ensure the stability of the functionalities linked to the database: PHP | MySQL. Responsible for the communication of new products and information via social media",
    projectContent1: "Project similar to Spotify made with ReactJs technology as part of my A.E.C Front-end Web Development training",
    projectContent2: "Online ordering project for a Saveurs Jamaicaines restaurant developed in PWA Reactjs as part of my A.E.C Front-end Web Development training",
    projectContent3: "TP1 developed with the VueJs framework as part of my A.E.C Front-end Web Development training",
    projectContent4: "Travel planning project developed with Angular as part of my A.E.C Front-end Web Development training",
    form: "Form",
    contactMe: "Contact me for any type of opportunity",
    lastName: "Last name",
    firstName: "First name",
    email: "Email",
    category: "Category",
    selectCategory: "Select a category",
    submit: "Submit",
    aboutMe: "About me",
    frontEndDeveloper: "Front-end Developer",
    experiences: "Experiences",
    educations: "Educations",
    experienceOneTitle: "Web content Integrator",
    designer: "Designer",
    webMaster: "Webmaster",
    today: "Today",
  },
  fr: {
    menuHome: "Accueil",
    menuProjects: "Projets",
    menuContact: "Contact",
    welcome: "Bienvenue",
    connectedMessage: "Vous êtes connectés",
    notConnectedMessage: "Vous n'êtes pas connectés",
    login: "Se connecter",
    logout: "Se déconnecter",
    myProfile: "Mon profil",
    myProjects: "Mes projets",
    myProfileContent1: "De nature autodidacte, j'ai construit mon expérience à travers mes treize années passées dans l'univers du Web. En tant qu'intégrateur j'ai travaillé sur des projets variés pour des petites et moyennes entreprises. J'ai réussi à relever de nombreux défis. Notamment, lorsque la complexité de certaines demandes techniques allaient bien au-delà de mes compétences",
    myProfileContent2: "J'aime le visuel, c'est ce qui me permet de penser une interface pour en faire une expérience utilisateur adaptée. Bien que l'esprit d'initiative fasse partie de ma personnalité, l'intégrité, le partage et la cohésion de groupe sont des traits que je possède. Mon objectif à court terme est d'évoluer au sein d'une agence Web en tant que Développeur Front-end Junior",
    myExperienceContent1: "Participer au développement de services web et mobiles: HTML5 | SASS | JavaScript. Programmer des interfaces afin qu'elles soient animées et interactives : JavaScript. Effectuer la refonte de différentes parties d'un projet en utilisant: HTML5 | CSS3 | SASS Déployer différents projets et effectuer des tests afin de s'assurer qu'ils soient fonctionnels",
    myExperienceContent2: "Intégrer du contenu sur le site de l'organisme via les langages hypers médias: HTML | CSS. Rendre les pages interactives au moyen de la librairie et langage: JQuery | JavaScript natif. Réaliser les flyers, newsletters, banderoles, photomontages avec: Photoshop | Illustrator | HTML | CSS",
    myExperienceContent3: "Gérer l'hébergement ainsi que les mises à jour du site web de l'entreprise: HTML | CSS. Veiller à la stabilité des fonctionnalités liées à la base de données: PHP | MySQL. Charger de la communication des nouveaux produits et de l'information via les médias sociaux",
    projectContent1: "Projet semblable à Spotify réalisé avec la technologie ReactJs dans le cadre de ma formation A.E.C Développement Web Front-end",
    projectContent2: "Projet de commande en ligne pour un restaurant Saveurs Jamaicaines développé en PWA Reactjs dans le cadre de ma formation A.E.C Développement Web Front-end",
    projectContent3: "TP1 réalisé avec le framework VueJs dans le cadre de ma formation A.E.C Développement Web Front-end",
    projectContent4: "Projet de forfait vogage développé avec Angular dans le cadre de ma formation A.E.C Développement Web Front-end",
    form: "Formulaire",
    contactMe: "Contactez-moi pour tout type d'opportunité",
    lastName: "Nom",
    firstName: "Prénom",
    email: "Courriel",
    category: "Catégorie",
    selectCategory: "Sélectionner une catégorie",
    submit: "Soumettre",
    aboutMe: "À Propos de Moi",
    frontEndDeveloper: "Développeur Front-end",
    experiences: "Expériences",
    educations: "Mes Formations",
    experienceOneTitle: "Intégrateur Web",
    designer: "Infographiste",
    webMaster: "Webmestre",
    today: "Aujourd'hui",
  },
};

export default {
  filters: {
    /**
     * fonction de traduction des texte qui prend en parametre le texte à traduire et retourne la traduction en français ou anglais.
     *
     * @param {String} expression
     * @returns {String}
     */
    translate: function(expression) {
      if (!expression) return "Traduction introuvable"; // retourne l'expression 'Traductin introuvable' si aucune traduction n'a été trouvée pour cette expression.
      expression = expression.toString();
      return TRANSLATIONS[language][expression];
    },
  },
};
