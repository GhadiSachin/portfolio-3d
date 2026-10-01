import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cedge,
  corecard,
  encora,
  ltimindtree,
  s2infotech,
  tcs,
  vgroup,
  wordline,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import carrent from '../assets/carrent.gif'

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
    title: "Technical Architect",
    icon: web,
  },
  {
    title: "Senior Technical Lead",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud & Data Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: ".NET 8",
    icon: backend, 
  },
  {
    name: "C#",
    icon: backend,
  },
  {
    name: "Microsoft Azure",
    icon: docker,
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
    name: "Angular",
    icon: web,
  },
  {
    name: "SQL Server",
    icon: backend,
  },
  {
    name: "RabbitMQ",
    icon: backend,
  },
  {
    name: "Blazor",
    icon: web,
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
    icon: tesla,
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
    icon: VGROUP_INC,
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
    icon: LTIMINDTREE,
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
];

const testimonials = [];

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
    image: carrent,
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
    image: jobit,
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
    image: tripguide,
    source_code_link: "https://github.com/GhadiSachin", 
  },
];

export { services, technologies, experiences, testimonials, projects };
