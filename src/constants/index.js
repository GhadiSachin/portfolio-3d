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
  meta,
  starbucks,
  tesla,
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
    title: "Technical Architect[cite: 1]",
    icon: web,
  },
  {
    title: "Senior Technical Lead[cite: 1]",
    icon: mobile,
  },
  {
    title: "Backend Developer[cite: 1]",
    icon: backend,
  },
  {
    title: "Cloud & Data Engineer[cite: 1]",
    icon: creator,
  },
];

const technologies = [
  {
    name: ".NET 8[cite: 1]",
    icon: backend, 
  },
  {
    name: "C#[cite: 1]",
    icon: backend,
  },
  {
    name: "Microsoft Azure[cite: 1]",
    icon: docker,
  },
  {
    name: "JavaScript[cite: 2]",
    icon: javascript,
  },
  {
    name: "TypeScript[cite: 1]",
    icon: typescript,
  },
  {
    name: "React JS[cite: 1]",
    icon: reactjs,
  },
  {
    name: "Redux[cite: 1]",
    icon: redux,
  },
  {
    name: "Angular[cite: 1]",
    icon: web,
  },
  {
    name: "SQL Server[cite: 1]",
    icon: backend,
  },
  {
    name: "RabbitMQ[cite: 1]",
    icon: backend,
  },
  {
    name: "Blazor[cite: 1]",
    icon: web,
  },
];

const experiences = [
  {
    title: "Senior Technical Lead[cite: 1]",
    company_name: "Precision Resource Group[cite: 1]",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mar 2026 - Jun 2026[cite: 1]",
    points: [
      "Architected an event-driven messaging pipeline using C#, .NET 8 and RabbitMQ, reducing asynchronous data-processing delays by 40%.[cite: 1]",
      "Designed an Ocelot API Gateway architecture with centralized authentication and dynamic routing for APIs serving 500K+ monthly requests with 99.9% uptime.[cite: 1]",
      "Led service, database and API modernization through SQL optimization, indexing and service-layer refactoring, improving platform response times by 35%.[cite: 1]",
      "Designed and delivered modular legal-domain workflows using C#, .NET 8 and Blazor.[cite: 1]",
    ],
  },
  {
    title: "Senior Technical Lead[cite: 1]",
    company_name: "V Group INC[cite: 1]",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Sep 2025[cite: 1]",
    points: [
      "Led architecture and technical direction for 8 engineers; evolved modular services using Clean Architecture to improve maintainability.[cite: 1]",
      "Reduced release cycles from 6 weeks to 3 weeks through architecture modernization and engineering-process improvements.[cite: 1]",
      "Designed modular React, Redux and TypeScript interfaces, improving client-side performance and responsiveness by 35%.[cite: 1]",
      "Established technical design reviews, automated testing standards and delivery governance; mentored senior and mid-level engineers.[cite: 1]",
    ],
  },
  {
    title: "Technical Lead[cite: 2]",
    company_name: "Encora[cite: 2]",
    icon: meta,
    iconBg: "#383E56",
    date: "Jul 2022 - Feb 2023[cite: 2]",
    points: [
      "Redesigned distributed scheduling and alerting architecture to support reliable processing of 1M+ automated alerts daily.[cite: 2]",
      "Defined refactoring approaches for legacy services to address technical debt, service complexity, scalability and maintainability.[cite: 2]",
      "Standardized CI/CD pipelines and cross-team QA practices, improving release-cycle efficiency by 25% and reducing production defects by 40%.[cite: 2]",
    ],
  },
  {
    title: "Senior Software Engineer[cite: 2]",
    company_name: "LTIMindtree[cite: 2]",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Jul 2022[cite: 2]",
    points: [
      "Designed and implemented .NET enterprise applications and serverless Azure Functions services for asynchronous data integrations.[cite: 2]",
      "Designed automated Azure DevOps build and release pipelines, reducing deployment cycles from hours to under 15 minutes.[cite: 2]",
      "Improved Angular application performance by 57% through Ahead-of-Time compilation, lazy loading and bundle optimization.[cite: 2]",
    ],
  },
  {
    title: "Senior Software Engineer[cite: 2]",
    company_name: "CoreCard Software[cite: 2]",
    icon: tesla,
    iconBg: "#383E56",
    date: "Feb 2018 - Aug 2019[cite: 2]",
    points: [
      "Optimized mission-critical financial processing modules, improving transaction execution speed by 40%.[cite: 2]",
      "Built and maintained financial services supporting credit-program processing and application reliability.[cite: 2]",
    ],
  },
];

// Cleared out testimonials as the provided resume emphasizes awards (e.g., Employee of the Year, LTIMindtree) rather than quotes[cite: 2].
const testimonials = [];

const projects = [
  {
    name: "UK Intellectual-Property Platform[cite: 1]",
    description:
      "Architected an event-driven messaging pipeline using C#, .NET 8 and RabbitMQ, reducing asynchronous data-processing delays by 40%. Designed an Ocelot API Gateway architecture serving 500K+ monthly requests.[cite: 1]",
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
    name: "Enterprise Employment-Law Platform[cite: 1]",
    description:
      "Evolved modular services using Clean Architecture. Reduced release cycles from 6 weeks to 3 weeks through architecture modernization and engineering-process improvements.[cite: 1]",
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
    name: "ATI Scheduling Platform[cite: 2]",
    description:
      "Redesigned distributed scheduling and alerting architecture to support reliable processing of 1M+ automated alerts daily. Standardized CI/CD pipelines and cross-team QA practices.[cite: 2]",
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
