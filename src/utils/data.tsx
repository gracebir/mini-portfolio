
import { backend, bootstrap, cibgreen, company, css, distributed, electron, github, gitlogo, gitstart, html, javascript, mobile, project1, project2, project3, project4, project5, project6, react, sass, tailwindcss, vscode, web } from '../assets'
import { experienceType, projectType, serviceType, techType } from './type'

export const techStacks:Array<techType> = [
    {
        title: 'html',
        imageUrl: html
    },
    {
        title: 'css',
        imageUrl: css
    },
    {
        title: 'javascript',
        imageUrl: javascript
    },
    {
        title: 'react',
        imageUrl: react
    },
    {
        title: 'electron',
        imageUrl: electron
    },
    {
        title: 'bootstrap',
        imageUrl: bootstrap
    },
    {
        title: 'tailwindcss',
        imageUrl: tailwindcss
    },
    {
        title: 'sass',
        imageUrl: sass
    },
    {
        title: 'git',
        imageUrl: gitlogo
    },
    {
        title: 'cib green',
        imageUrl: cibgreen
    },
    {
        title: 'Vs code',
        imageUrl: vscode
    },
    {
        title: 'github',
        imageUrl: github
    }
]

export const projectData: Array<projectType> = [
    {
        id: 1,
        image: project1
    },
    {
        id: 2,
        image: project2
    },
    {
        id: 3,
        image: project3
    },
    {
        id: 4,
        image: project4
    },
    {
        id: 5,
        image: project5
    },
    {
        id: 6,
        image: project6
    }
]

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