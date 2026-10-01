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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "flutter",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Tata Consultancy Services",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2022 - Present",
    points: [
      "Working as a Full Stack Developer on a Client Project in the IT-Sustainibility Domain",
      "Worked on 5+ internal applications which are being used widely inside the organisation.",
      "Worked on over 17+ Customer Pocs using Next.JS, React.Js, Flutter, React-Native, Generative AI, Node.JS, Python, AWS and related Full-Stack Technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Project Intern",
    company_name: "Tata Consultancy Services",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Jun 2023",
    points: [
      "Developing modern UIs with no-code and low-code tools.",
      "Worked as a Full-Stack-Developer in an internal application with over 500k+ users in React.js.",
      "Implementing responsive designs for both web and mobile and ensuring cross-browser and cros-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Teamcognito",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jul 2020 - Sep 2020",
    points: [
      "Developing and maintaining web applications using React.js, React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Data Science and ML Trainee",
    company_name: "NIIT",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Apr 2019 - Jun 2019",
    points: [
      "Worked on ecommerce data to predict yearly, querterly and monthly sales.",
      "Completed Microsoft and NIIT certification on Python, DS and AI-ML",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rishav is highly skilled software engineer with plethora of technical knowledge. He is hard-working, punctual, and has excellent communication skills. He is a good team player, and very friendly person to work with. I wish him very best for his future endeavours.",
    name: "Poojan Dalal",
    designation: "Software Engineer",
    company: "TCS",
    image: "https://media.licdn.com/dms/image/C5603AQHdYhXXyCxtaw/profile-displayphoto-shrink_400_400/0/1612033774960?e=1689206400&v=beta&t=qagV7Mm9gzPzF-BuwpFm3Wko1BuGXjkd7oaUdNFFlMw",
  },
  {
    testimonial:
      "I have worked with Rishav in TCS Digital internship. We were in same team during our internship ie . BFSI EAST US DIGITAL TEAM. He is hardworking mate . Best wishes to Rishav for future.",
    name: "Arsh Seth",
    designation: "Systems Engineer",
    company: "TCS",
    image: "https://media.licdn.com/dms/image/D4D35AQHhcI5KAaOkeQ/profile-framedphoto-shrink_400_400/0/1651487743816?e=1684566000&v=beta&t=IZvobbeVLvAUnGW56DEjRWXzagMSRRLha50aCVu6SWI",
  },
  {
    testimonial:
      "Rishav is one of the best among all the people I have ever worked with. I worked with Rishav for 3 years. As I remember, RIshav was a very productive person, is hardworking, broad-minded and forward thinking individual. Intelligent, ambitious, energetic and proactive perfectionist.",
    name: "Sudip Mitra",
    designation: "Software Engineer",
    company: "Persistent Systems",
    image: "https://media.licdn.com/dms/image/D4D03AQH2blBYybUcBg/profile-displayphoto-shrink_400_400/0/1674761353846?e=1689206400&v=beta&t=LadA_5nrvaDox6_3AOg50rhUK92VRHVQS8cSI9YoDtQ",
  },
];

const projects = [
  {
    name: "Amazon - Clone",
    description:
      "A Full-Stack Clone of the leading E-commerce website Amazon. 👉 Made the HomePage, Login and Checkout Page with smooth animations 👉 Integrated User Authentication with Firebase. I'm using: React-Context & Hooks, Material UI with custom CSS and Firebase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/rishav-learnerml/Amazone-Clone",
  },
  {
    name: "India Vs World - Covid19",
    description:
      "Used Prophet model by Facebook AI Team and graphically matched the data taken from Govt. Website with ML and Data Science Algorithms post one week. The resultant graph almost superimposed the actual graph with over 98% accuracy.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Google-colab",
        color: "green-text-gradient",
      },
      {
        name: "Machine-Learning",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rishav-learnerml/Corona-Research",
  },
  {
    name: "Stark - Smart Assistant",
    description:
      `Made this futuristic voice assistant STARK with #chatgpt and #dalle which will make your life easier. Stark has the power of GPT4 which can roam around the internet and resolve your query and it is Compatible for web, android and ios. Made with Flutter, ChatGpt, Dall-e and Material3`,
    tags: [
      {
        name: "ChatGpt",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "Material3",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://lnkd.in/dFKQyKqq",
  },
];

export { services, technologies, experiences, testimonials, projects };
