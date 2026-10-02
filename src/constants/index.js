// import {
//   mobile,
//   backend,
//   creator,
//   web,
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   figma,
//   docker,
//   cedge,
//   corecard,
//   encora,
//   ltimindtree,
//   s2infotech,
//   tcs,
//   vgroup,
//   wordline,
//   prg,
//   emplymentlaw,
//   uk,
//   threejs,
// } from "../assets";
import {
  mobile,
  backend,
  creator,
  web,
  
  // Updated Tech Stack
  csharp,
  dotnetcore,
  rabbitmq,
  react,
  redux,
  typescript,
  javascript,
  python,
  blazor,
  azure,
  aws,
  docker,
  kubernetes,
  githubactions,
  git,
  openai,
  microsoft,
  sqlserver,
  postgresql,
  reactjs,

  // Companies
  cedge,
  corecard,
  encora,
  ltimindtree,
  s2infotech,
  tcs,
  vgroup,
  wordline,
  prg,

  // Projects
  ati,
  emplymentlaw,
  uk,
} from "../assets";

// import ati from '../assets/ati.png'

import DB from "../assets/feedback/db.png";
import MSS from "../assets/feedback/mss.png";
import VY from "../assets/feedback/vy.png";
import KO from "../assets/feedback/ko.png";
import KK from "../assets/feedback/kk.png";
import DHB from "../assets/feedback/dhb.png";
import SK from "../assets/feedback/sk.png";
import AD from "../assets/feedback/ad.png";
import GP from "../assets/feedback/gp.png";
import DS from "../assets/feedback/ds.png";
import LR from "../assets/feedback/lr.png";
import BK from "../assets/feedback/bk.png";
import NH from "../assets/feedback/nh.png";
import RP from "../assets/feedback/rp.png";
import AN from "../assets/feedback/an.png";
import AP from "../assets/feedback/ap.png";
import NN from "../assets/feedback/nn.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Senior Technical Lead",
    icon: web,
  },
  {
    title: "Technical Architect",
    icon: mobile,
  },
  {
    title: "Full Stack Enterprise Engineer",
    icon: backend,
  },
  {
    title: "AI & Cloud Specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: ".NET Core",
    icon: dotnetcore, 
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Microsoft Azure",
    icon: azure,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  
  {
    name: "SQL Server",
    icon: sqlserver,
  },
  {
    name: "RabbitMQ",
    icon: rabbitmq,
  },
  {
    name: "Blazor",
    icon: blazor,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "OpenAI",
    icon: openai,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "Senior Technical Lead",
    company_name: "Precision Resource Group",
    icon: prg,
    iconBg: "#383E56",
    date: "Mar 2026 - Jun 2026",
    points: [
      "Architected an event-driven messaging pipeline using C#, .NET 8 and RabbitMQ, reducing asynchronous data-processing delays by 40%.",
      "Designed an Ocelot API Gateway architecture with centralized authentication and dynamic routing for APIs serving 500K+ monthly requests with 99.9% uptime.",
      "Led service, database and API modernization through SQL optimization, indexing and service-layer refactoring, improving platform response times by 35%.",
      "Designed and delivered modular legal-domain workflows using C#, .NET 8 and Blazor.",
    ],
  },
  {
    title: "Senior Technical Lead",
    company_name: "V Group INC",
    icon: vgroup,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Sep 2025",
    points: [
      "Led architecture and technical direction for 8 engineers; evolved modular services using Clean Architecture to improve maintainability.",
      "Reduced release cycles from 6 weeks to 3 weeks through architecture modernization and engineering-process improvements.",
      "Designed modular React, Redux and TypeScript interfaces, improving client-side performance and responsiveness by 35%.",
      "Established technical design reviews, automated testing standards and delivery governance; mentored senior and mid-level engineers.",
    ],
  },
  {
    title: "Technical Lead",
    company_name: "Encora",
    icon: encora,
    iconBg: "#383E56",
    date: "Jul 2022 - Feb 2023",
    points: [
      "Redesigned distributed scheduling and alerting architecture to support reliable processing of 1M+ automated alerts daily.",
      "Defined refactoring approaches for legacy services to address technical debt, service complexity, scalability and maintainability.",
      "Standardized CI/CD pipelines and cross-team QA practices, improving release-cycle efficiency by 25% and reducing production defects by 40%.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "LTIMindtree",
    icon: ltimindtree,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Jul 2022",
    points: [
      "Designed and implemented .NET enterprise applications and serverless Azure Functions services for asynchronous data integrations.",
      "Designed automated Azure DevOps build and release pipelines, reducing deployment cycles from hours to under 15 minutes.",
      "Improved Angular application performance by 57% through Ahead-of-Time compilation, lazy loading and bundle optimization.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "CoreCard Software",
    icon: corecard,
    iconBg: "#383E56",
    date: "Feb 2018 - Aug 2019",
    points: [
      "Optimized mission-critical financial processing modules, improving transaction execution speed by 40%.",
      "Built and maintained financial services supporting credit-program processing and application reliability.",
    ],
  },
  {
  title: "Early Career Experience",
  company_name: "Tata Consultancy Services • S2 Infotech • Cedge Pvt Ltd",
  icon: tcs,
  iconBg: "#383E56",
  date: "2012 - 2018",
  points: [
    "Contributed to the Prime Minister Insurance Program platform, supporting over 6 million customer enrollments.",
    "Developed Visitor Management Systems, Ticketing Solutions, Workforce Management Applications, and enterprise web applications.",
    "Participated in application migration initiatives from Classic ASP to ASP.NET, modernizing legacy enterprise platforms.",
    "Improved SQL Server performance, application scalability, and user experience across multiple enterprise applications.",
  ],
},

];
 const testimonials = [
  {
    name: "Dilesh Bhoir",
    designation: "Technical Lead",
    company: "CoreCard Software, Inc.",
    date: "December 11, 2025",
    relationship: "Worked with Sachin on different teams",
    image: DB,
    testimonial:
      "I had the pleasure of working alongside Sachin Ghadi at CoreCard Software, Inc., where he excelled as a Senior .NET Developer. Although we were on different teams, Sachin’s reputation for technical proficiency and dedication to robust software development was evident across the organization. He demonstrated deep expertise in C#, ASP.NET Core, MVC, Blazor, Web API, and modern frontend frameworks such as Angular and Node.js, consistently delivering high-quality, scalable solutions. Sachin’s collaborative spirit and willingness to share knowledge made him a valued resource for developers throughout the company.",
  },

  {
    name: "Manish S Singh",
    designation: "Business Leader",
    company: "Telecommunications & FinTech",
    date: "September 13, 2025",
    relationship: "Worked with Sachin on different teams",
    image: MSS,
    testimonial:
      "Sachin worked with me as an extended team member, full of energy and thirst for learning new technologies and fearless experimenting attitude. I believe over a period of time he must have acquired many more skills to enhance his career and I wish him the very best for his career.",
  },

  {
    name: "Vaibhav Yadav",
    designation: "Senior Specialist Software Engineer",
    company: "LTIMindtree Ltd",
    date: "July 26, 2025",
    relationship: "Worked with Sachin on the same team",
    image: VY,
    testimonial:
      "I had the pleasure of working with Sachin Ghadi in the same team, where he served as a Lead Developer. Sachin is highly skilled in .NET technologies and brings strong technical leadership to every project. His problem-solving abilities, attention to code quality, and commitment to timely delivery consistently impressed the team. He’s also an excellent mentor—always approachable and willing to share knowledge. Sachin’s collaborative nature and clear communication make him a valuable bridge between technical and business teams.",
  },

  {
    name: "Kapil Onkar",
    designation: "Technical Lead",
    company: "",
    date: "October 16, 2023",
    relationship: "Was senior to Sachin",
    image: KO,
    testimonial:
      "Good Learner, Ambitious. Technically Sound. Good at connecting peoples.",
  },

  {
    name: "Koustubh Kalamkar",
    designation: "Associate Director",
    company: "UBS Investment Bank",
    date: "April 21, 2022",
    relationship: "Worked with Sachin on different teams",
    image: KK,
    testimonial:
      "Sachin is very knowledgeable and hardworking. Have worked with him in few critical releases and his calmness in critical scenarios was impeccable.",
  },

  {
    name: "Dhiraj Bellara",
    designation: "Agile & Transformation Leader",
    company: "",
    date: "August 22, 2020",
    relationship: "Managed Sachin directly",
    image: DHB,
    testimonial:
      "I have known Sachin for some years now. He is a great team player and is a quick learner. His technical skills and his passion for learning makes him a great technology asset. He tries to put goals for himself and puts in hard work to make them achievable. He understands business too. He has always set an example for others with his way of working.",
  },

  {
    name: "Sachin Kulshrestha",
    designation: "Sr. Manager / Software Architect",
    company: "Payments & FinTech",
    date: "January 12, 2020",
    relationship: "Was senior to Sachin",
    image: SK,
    testimonial:
      "Hardworking person with sound knowledge of his technology. I have not worked with him but heard always good with everyone.",
  },

  {
    name: "Anindya Dey",
    designation: "Senior ML Engineer",
    company: "Vista",
    date: "September 24, 2019",
    relationship: "Worked with Sachin on different teams",
    image: AD,
    testimonial:
      "Sachin is a truly dedicated developer. While working with him, I observed that he was a keen learner. He gives his best in any problem assigned to him. He always strives for the best quality of coding. His dedication knows no bounds. He has always been a key team player.",
  },

  {
    name: "Gouri Pal",
    designation: "Product Management AI/ML",
    company: "",
    date: "May 21, 2019",
    relationship: "Worked with Sachin on different teams",
    image: GP,
    testimonial:
      "Hardworking guy with good knowledge in programming and banking.",
  },

  {
    name: "Depanker Sutihar",
    designation: "ITIL Expert",
    company: "",
    date: "March 8, 2019",
    relationship: "Was senior to Sachin",
    image: DS,
    testimonial:
      "Sachin is hard working and result oriented doer and a soft spoken professional. I wish him every success.",
  },

  {
    name: "Lokesh Rajana",
    designation: "Senior Software Engineer",
    company: "",
    date: "March 4, 2019",
    relationship: "Worked with Sachin on the same team",
    image: LR,
    testimonial:
      "I worked with Sachin for 1 year. He is very good at ASP.NET and web technologies like HTML, CSS and XML.",
  },

  {
    name: "Bhoomil Kalyani",
    designation: "Lead Full Stack Developer",
    company: "Telus Health",
    date: "November 12, 2017",
    relationship: "Worked with Sachin on the same team",
    image: BK,
    testimonial:
      "I had the privilege of working with Sachin Ghadi in Frontend team for more than one year at TCS. He is proactive, responsible and technically sound employee and he is always ready to put all his energy and effort to complete the assignment. He has exceptional troubleshooting skills in .NET and good analytical skills.",
  },

  {
    name: "Nikhil Hinge",
    designation: "Technical Lead",
    company: "BNP Paribas",
    date: "November 11, 2017",
    relationship: "Worked with Sachin on different teams",
    image: NH,
    testimonial:
      "Hard Worker, Good technical knowledge. Good analytical skills.",
  },

  {
    name: "Rohit Pandey",
    designation: "Staff Software Engineer",
    company: "Walmart Global Tech India",
    date: "November 10, 2017",
    relationship: "Worked with Sachin on the same team",
    image: RP,
    testimonial:
      "Great performer and character. Good at quick problem solving skills and technology driven. Never takes things lightly, however small the work is. Helps around whoever is in need and feels free to take advice even from his subordinate. Had a great experience working with him.",
  },

  {
    name: "Anurag Naik",
    designation: "Senior Software Engineer",
    company: "",
    date: "November 9, 2017",
    relationship: "Worked with Sachin on the same team",
    image: AN,
    testimonial:
      "Having worked with Sachin in TCS for the Core Banking Application, I can assuredly say that it was a great experience working with him as a peer. He has exceptional problem solving ability and knowledge of ASP.Net, C# and Web Applications in general. His desire to dedicate himself to the task at hand and help others makes him a joy to work with.",
  },

  {
    name: "Aditya Pandya",
    designation: "Senior Business Analyst / Product Owner",
    company: "",
    date: "November 8, 2017",
    relationship: "Worked with Sachin on the same team",
    image: AP,
    testimonial:
      "I had the privilege of working with Sachin Ghadi for more than 2 years at CEdge Technologies. During this time, we worked together on multiple projects related to core banking and UI development. Sachin is a person with a strong ownership and driving for results all the time. He is creative, energetic, solutions oriented and highly motivated with great communication skills.",
  },

  {
    name: "NIRJHAR NATH",
    designation: "Tech Advisory",
    company: "Accenture",
    date: "February 26, 2016",
    relationship: "Worked with Sachin at different companies",
    image: NN,
    testimonial:
      "Sachin is a great person and a good friend to work with. I got an opportunity to work with him during my TCS days when we were implementing a project for a foreign bank, jointly with CEdge Technologies. He was my onshore partner for the project. The best part about him is that he is a quick learner and would get back to you with answers or results in no time. Always high on energy at office, he would handle multiple assignments at one go and would always deliver with utmost sincerity and effectiveness.",
  },
];


const projects = [
  {
    name: "UK Intellectual-Property Platform",
    description:
      "Architected an event-driven messaging pipeline using C#, .NET 8 and RabbitMQ, reducing asynchronous data-processing delays by 40%. Designed an Ocelot API Gateway architecture serving 500K+ monthly requests.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: ".NET-8",
        color: "green-text-gradient",
      },
      {
        name: "RabbitMQ",
        color: "pink-text-gradient",
      },
    ],
    image: ati,
    source_code_link: "https://github.com/GhadiSachin", 
  },
  {
    name: "Enterprise Employment-Law Platform",
    description:
      "Evolved modular services using Clean Architecture. Reduced release cycles from 6 weeks to 3 weeks through architecture modernization and engineering-process improvements.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Clean-Architecture",
        color: "pink-text-gradient",
      },
    ],
    image: emplymentlaw,
    source_code_link: "https://github.com/GhadiSachin",
  },
  {
    name: "ATI Scheduling Platform",
    description:
      "Redesigned distributed scheduling and alerting architecture to support reliable processing of 1M+ automated alerts daily. Standardized CI/CD pipelines and cross-team QA practices.",
    tags: [
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
      {
        name: "CI/CD",
        color: "green-text-gradient",
      },
      {
        name: "Microservices",
        color: "pink-text-gradient",
      },
    ],
    image: uk,
    source_code_link: "https://github.com/GhadiSachin", 
  },
];

export { services, technologies, experiences, testimonials, projects };
