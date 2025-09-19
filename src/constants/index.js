
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  aiResumeBuilder,
  codeSync,
  wordLoom,
  urlShortener,
  stayBookerPro,
  cropAdvisory,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Specialist",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Gokboru Tech Private Limited",
    icon: tekisky,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Strengthened expertise in frontend technologies (HTML, CSS, JavaScript, React.js, Tailwind CSS).",
      "Designed and implemented a hotel booking platform using React.js and Tailwind CSS.",
      "Created responsive and accessible user interfaces with modern design principles.",
      "Integrated external APIs and backend services to enable real-time data processing.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Shashwat's technical skills and attention to detail are exceptional. He delivered our hotel booking platform ahead of schedule with outstanding quality.",
    name: "Project Manager",
    designation: "Gokboru Tech",
    company: "Gokboru Tech Private Limited",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Working with Shashwat was a great experience. His problem-solving approach and clean code practices made our collaboration seamless.",
    name: "Senior Developer",
    designation: "Tech Lead",
    company: "Development Team",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Shashwat's portfolio projects showcase his versatility in full-stack development. His weather app and e-commerce platforms are impressive!",
    name: "Tech Reviewer",
    designation: "Portfolio Reviewer",
    company: "Tech Community",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "AI Resume Builder",
    description:
      "A web application that leverages AI to generate tailored resumes, helping users create professional and ATS-friendly CVs with ease. Features intelligent content suggestions and multiple template options.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "blue-text-gradient",
      },
    ],
    image: aiResumeBuilder,
    source_code_link: "https://github.com/Shashwatdeo/ai-resume-builder.git",
    live_demo_link: "https://ai-resumex-builder.vercel.app/",
  },
  {
    name: "CodeSync - Real-Time Collaboration",
    description:
      "A collaborative code editor enabling multiple users to write, edit, and execute code simultaneously with real-time updates. Features syntax highlighting, user presence tracking, and room-based collaboration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "white-text-gradient",
      },
      {
        name: "monaco",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
    ],
    image: codeSync,
    source_code_link: "https://github.com/Shashwatdeo/Code-Sync.git",
    live_demo_link: null,
  },
  {
    name: "WordLoom - BlogSpace",
    description:
      "A modern blogging platform where users can write, publish, and share blogs with rich text formatting. Features include user authentication, comment system, and a clean, responsive design for storytelling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "white-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "draft.js",
        color: "blue-text-gradient",
      },
    ],
    image: wordLoom,
    source_code_link: "https://github.com/Shashwatdeo/wordloom.git",
    live_demo_link: "https://wordloom-vn32.vercel.app/",
  },
  {
    name: "URL Shortener",
    description:
      "A simple yet powerful tool to shorten long URLs, track clicks, and manage links effectively. Features analytics dashboard, custom short codes, and bulk URL management capabilities.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "white-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: urlShortener,
    source_code_link: "https://github.com/Shashwatdeo/url-shortner.git",
    live_demo_link: "https://url-shortner-bpkj.vercel.app/",
  },
  {
    name: "Hotel Booking Platform",
    description:
      "A full-featured hotel booking application with user authentication, room search filters, booking system, and admin dashboard. Implemented secure payment integration and real-time availability updates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "rest api",
        color: "blue-text-gradient",
      },
    ],
    image: stayBookerPro,
    source_code_link: "https://github.com/Shashwatdeo/stay-booker-pro-reactjs.git",
    live_demo_link: "https://stay-booker-pro.vercel.app/",
  },
  {
    name: "Crop Advisory & Farmer's Companion",
    description:
      "A Laravel-based web application offering crop suggestions, pest alerts, weather-based precautions, and a community space for farmers to share ideas and needs. Features AI-powered crop recommendations.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "white-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "weather api",
        color: "blue-text-gradient",
      },
    ],
    image: cropAdvisory,
    source_code_link: "https://github.com/Shashwatdeo/crop-advisory.git",
    live_demo_link: null,
  },
];

export { services, technologies, experiences, testimonials, projects };
