/** @format */

import {
    backend,
    bootstrap,
    landing,
    buymore,
    amazon,
    memoryGame,
    country,
    multiForm,
    company,
    css,
    distributed,
    express,
    github,
    gitlogo,
    gitstart,
    html,
    javascript,
    mobile,
    python,
    react,
    sass,
    tailwindcss,
    vscode,
    web,
} from "../assets";
import {
    experienceType,
    navLinkType,
    projectType,
    serviceType,
    techType,
} from "./type";

export const headerLinks: Array<navLinkType> = [
    {
        id: "home",
        linkName: "Home",
    },
    {
        id: "about",
        linkName: "About",
    },
    {
        id: "tech",
        linkName: "Tech Stack",
    },
    {
        id: "experience",
        linkName: "About",
    },
    {
        id: "projects",
        linkName: "Projects",
    },
];

export const techStacks: Array<techType> = [
    {
        title: "html",
        imageUrl: html,
    },
    {
        title: "css",
        imageUrl: css,
    },
    {
        title: "javascript",
        imageUrl: javascript,
    },
    {
        title: "react",
        imageUrl: react,
    },
    {
        title: "express.js",
        imageUrl: express,
    },
    {
        title: "bootstrap",
        imageUrl: bootstrap,
    },
    {
        title: "tailwindcss",
        imageUrl: tailwindcss,
    },
    {
        title: "sass",
        imageUrl: sass,
    },
    {
        title: "git",
        imageUrl: gitlogo,
    },
    {
        title: "python",
        imageUrl: python,
    },
    {
        title: "Vs code",
        imageUrl: vscode,
    },
    {
        title: "github",
        imageUrl: github,
    },
];

export const experiences: Array<experienceType> = [
    {
        title: "React.js Developer",
        company_name: "SkillyHub SAS",
        icon: company,
        iconBg: "#383E56",
        date: "October 2019 - Dec 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "ODK/Kobo toolbox Consultant",
        company_name: "DataXchange group ",
        icon: company,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Present",
        points: [
            "Analysis of the technical specifications of the electronic tools, database, and applications to be implemented for the Guinea PBF project.",
            "Programming first the data collection form using the Kobo toolbox  for the health centers, hospitals, DPS, and DRS for the AGFA project in Guinea concerning the evaluation of the quality of the indicators, involving the survey questionnaires, the data collection forms.",
            "Construction of electronic forms on Kobo for community surveys in health centers and hospitals, testing of Kobotoolbox electronic forms, and review of changes.",
            "Building electronic forms on Kobotoolbox for community surveys in DPS and DRS, testing Kobotoolbox electronic forms, and review of changes.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Gitstart",
        icon: gitstart,
        iconBg: "#383E56",
        date: "Nov 2021 - Sept 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Engineer (Freelancing)",
        company_name: "R&I Software",
        icon: company,
        iconBg: "#383E56",
        date: "Nov 2022 - Feb 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Distributed",
        icon: distributed,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const services: Array<serviceType> = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Desktop Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Full Stack Devepoler",
        icon: web,
    },
];

export const projects: Array<projectType> = [
    {
        id: 1,
        title: "Countries API",
        description:
            "The Rest Countries Explorer project is a front-end web application that leverages the Rest Countries API to provide comprehensive information about various countries around the world. The application allows users to explore details of individual countries, search for specific countries, and filter countries based on their respective continents.",
        image: country,
        techStacks: [
            "React.js",
            "Tailwindcss",
            "Formik",
            "Responsive Design",
            "API Integration",
        ],
        live: "https://the-awesome-gracebir-site.netlify.app/",
        code: "https://github.com/gracebir/countries-api",
    },
    {
        id: 2,
        title: "Buymore E-commerce",
        description:
            "Buymore is a cutting-edge e-commerce platform developed using the latest technologies to provide users with a seamless and engaging online shopping experience. Built on a robust stack including React.js, Next.js, Prisma, TypeScript, and PostgreSQL, Buymore offers a feature-rich environment for both customers and administrators.",
        image: buymore,
        techStacks: [
            "Next.js",
            "React.js",
            "Tailwindcss",
            "Redux Toolkit",
            "NextAuth",
            "Typescript",
        ],
        live: "https://buymore-psi.vercel.app/",
        code: "https://github.com/gracebir/buymore",
    },
    {
        id: 3,
        title: "Amazon clone",
        description:
            "Embark on an online shopping adventure with the Amazon Clone, a remarkable e-commerce platform meticulously crafted using Next.js. This project marks a significant milestone as your inaugural Next.js endeavor. With an Amazon-inspired design, the platform seamlessly integrates the Stripe API to offer secure payment processing, elevating the shopping experience to new heights.",
        image: amazon,
        techStacks: [
            "Next.js",
            "React.js",
            "Tailwindcss",
            "API integrate",
            "NextAuth",
            "Stripe API",
        ],
        live: "https://amazon-clone-red.vercel.app/",
        code: "https://github.com/gracebir/amazon-clone",
    },
    {
        id: 4,
        title: "Multi Step Form",
        description:
            "In this challenge, your mission is to enhance a multi-step form to closely match the provided design. Your goal is to create a seamless user experience by allowing users to progress through the form's steps, review and edit their selections, and ultimately confirm their order. The challenge empowers you to leverage your preferred tools and skills to achieve the desired outcome.",
        image: multiForm,
        techStacks: ["React.js", "Tailwindcss", "Formik", "Responsive Design"],
        live: "https://multi-step-form-pink-eta.vercel.app/",
        code: "https://github.com/gracebir/multi-step-form",
    },
    {
        id: 5,
        title: "Modern Landing Page",
        description:
            "In this project, your goal is to create a captivating and well-designed landing page that effectively communicates the essence of a product, service, or concept. This landing page serves as the first impression for visitors, enticing them to explore further and take desired actions. Through thoughtful design and strategic layout, you will craft an experience that engages, informs, and encourages conversion.",
        image: landing,
        techStacks: ["React.js", "Tailwindcss", "Vite", "Responsive Design"],
        live: "https://manage-landing-page-six-orcin.vercel.app/",
        code: "https://github.com/gracebir/manage-landing-page",
    },
    {
        id: 6,
        title: "Memory Game",
        description:
            "A memory game is a mental challenge where players must match pairs of identical cards by flipping them over in a grid. The objective is to remember the card locations and find all matches in the fewest moves possible. It tests one's concentration, cognitive skills, and memory recall while providing an engaging and fun activity.",
        image: memoryGame,
        techStacks: [
            "Typescript",
            "Tailwindcss",
            "Next.js",
            "Responsive Design",
        ],
        live: "https://memory-game-eight-lyart.vercel.app/",
        code: "https://github.com/gracebir",
    },
];
