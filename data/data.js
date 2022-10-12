export const jamStack = [
    {id: 0, label: "NEXT.js", description: "", logo: ""},
    {id: 1, label: "React", description: "", logo: ""},
    {id: 2, label: "Vue", description: "", logo: ""},
    {id: 3, label: "JavaScript", description: "", logo: ""},
    {id: 4, label: "HTML5", description: "", logo: ""},
    {id: 5, label: "CSS3", description: "", logo: ""},
    {id: 6, label: "Tailwind", description: "", logo: ""},
    {id: 7, label: "NodeJS", description: "", logo: ""},
    {id: 8, label: "PHP", description: "", logo: ""},
    {id: 9, label: "MySQL", description: "", logo: ""},
    {id: 10, label: "Strapi", description: "", logo: ""},
    {id: 11, label: "WordPress", description: "", logo: ""},
]

export const myProjects = [
    {
        id: 0, 
        entity: "NYS Education Department", 
        entityLogo: "/logos/dlm-logo.png", 
        projectTitle: "Teacher training & certification", 
        type: "web app",
        skills: [
            {label: "UI/UX Design"},
            {label: "Programming"},
        ],
        website: "https://www.dlmnysaatraining.com/",
        wireframeLink: "https://xd.adobe.com/view/01568d2c-4590-4816-b830-46a41c167714-5405/",
        shortDescription: "A curriculum of video-based courses and certification quizzes that help train teachers to conduct state assessments for students with severe cognitive disabilities.", 
        specialNote: "",
        contributions: [
            {id: 0, description: "Programmed the Authentication and Authorization system"},
            {id: 1, description: "Programmed custom API routes in nodeJS / Express"},
            {id: 2, description: "Programmed the certification quiz logic and state management"},
            {id: 3, description: "Programmed the UI and responsive design"},
            {id: 4, description: "Wrote JS code for a custom email provider for the Strapi headless CMS"},
            {id: 5, description: "Designed roughly 50% of the UI/UX using Adobe XD"}
        ],
        releaseDate: "2022-10-04",
        techUsed: [
            {name: "NextJS", logoSm:"/logos/nextjs-icon-light.svg", logoLg: "", end:"frontend"},
            {name: "React", logoSm:"/logos/react.svg", logoLg: "", end:"frontend"},
            {name: "Tailwind", logoSm:"/logos/tailwind.svg", logoLg: "", end:"frontend"},
            {name: "Strapi", logoSm:"/logos/strapi_logo.svg", logoLg: "", end:"backend"},
            {name: "NodeJS", logoSm:"/logos/nodejs.svg", logoLg: "", end:"backend"},
        ]
    },
    {
        id: 1,
        entity: "Calvary Robotics",
        entityLogo: "/logos/calvary-logo-no-shadow-sq.png",
        projectTitle: "Dove Co-Pack",
        type: "website",
        skills: [
            {label: "Copy"},
            {label: "UI/UX Design"},
            {label: "Programming"},
        ],
        website: "https://www.dovecopack.com/",
        wireframeLink: "https://xd.adobe.com/view/4eb54dbf-4b9c-4c0c-8d5f-b8c937cb9f85-1be6/",
        shortDescription: "An informative branding website for Calvary's cannabis-automation division that offers contract flower packaging, labeling, secure warehousing, and shipping services.",
        specialNote: "The design wireframes are a more accurate interpretation of my initial code vs the current incarnation of the live website.",
        contributions: [
            {id: 0, description: "Wrote copy and created the site's color scheme"},
            {id: 1, description: "Designed the entire UI using Adobe XD"},
            {id: 2, description: "Programmed the front-end and responsive design"},
        ],
        releaseDate: "2022-09-15",
        techUsed: [
            {name: "NextJS", logoSm:"/logos/nextjs-icon-light.svg", logoLg: "", end:"frontend"},
            {name: "React", logoSm:"/logos/react.svg", logoLg: "", end:"frontend"},
            {name: "Tailwind", logoSm:"/logos/tailwind.svg", logoLg: "", end:"frontend"},
        ]
    },
    {
        id: 2, 
        entity: "Personal Project", 
        entityLogo: "", 
        projectTitle: "CRM, Sales Manager", 
        type: "web app",
        skills: [
            {label: "UI/UX Design"},
            {label: "Programming"},
        ],
        website: "",
        wireframeLink: "https://xd.adobe.com/view/94c92460-26b3-4d43-b6e3-ef24f3d421e2-c19a/",
        shortDescription: "A 3-layer, relational database CRM with integrated to-do list management, custom lead follow-up processes, and the Tribunal project management system.", 
        specialNote: "",
        contributions: [
            {id: 0, description: "Desgined the entire UI using Adobe XD"},
            {id: 1, description: "Currently programming the front- and back-end"},
        ],
        releaseDate: "2022-10-04",
        techUsed: [
            {name: "NextJS", logoSm:"/logos/nextjs-icon-light.svg", logoLg: "", end:"frontend"},
            {name: "React", logoSm:"/logos/react.svg", logoLg: "", end:"frontend"},
            {name: "PHP", logoSm:"/logos/php-logo-new.svg", logoLg: "", end:"backend"},
            {name: "MySQL", logoSm:"/logos/mysql-logo.svg", logoLg: "", end:"backend"},
            {name: "Tailwind", logoSm:"/logos/tailwind.svg", logoLg: "", end:"frontend"},
        ]
    },
    {
        id: 3, 
        entity: "Pasture Stand", 
        entityLogo: "/logos/pasturestand-logo.png", 
        projectTitle: "E-commerce farmers market", 
        type: "website",
        skills: [
            {label: "Copy"},
            {label: "UI/UX Design"},
            {label: "Programming"},
        ],
        website: "https://www.pasturestand.com",
        wireframeLink: "",
        shortDescription: "An online farmers market that makes it convenient to buy products directly from local farms within a 30 mile radius of your home. The site facilitates farm-to-consumer and farm-to-farm sales.",
        specialNote: "",
        contributions: [
            {id: 0, description: "Desgined and copy-wrote the entire UI"},
            {id: 1, description: "Implemented and programmed the website in WordPress"},
            {id: 2, description: "Customized the Dokan multi-vendor, e-commerce plug-in (PHP)"},
            {id: 3, description: "Customized the PHP session management to remember a user's location"},

        ],
        releaseDate: "2020-02-01",
        techUsed: [
            {name: "WordPress", logoSm:"/logos/wordpress-logo.png", logoLg: "", end:"frontend"},
            {name: "MySQL", logoSm:"/logos/mysql-logo.svg", logoLg: "", end:"backend"},
            {name: "PHP", logoSm:"/logos/php-logo-new.svg", logoLg: "", end:"backend"},
        ]
    },
  ]