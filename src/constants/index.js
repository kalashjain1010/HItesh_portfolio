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
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "NextJs Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java developer",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  
];

const experiences = [
  {
    title: "Data Science Training & Intern",
    company_name: "Ineoron.AI",
    icon: tesla,
    iconBg: "#FFFF",
    date: "May 2022 - Jan 2023",
    points: [
      "Learned and worked on advanced Python and SQL queries.",
      "Developed end-to-end Scalable Machine learning and Deep learning projects for real-world business use cases.",
      "Participated and worked on various computer vision and NLP projects during the training program.",
      "Technologies used: Python, Keras, Tensorflow, Hugging face, YOLO, MLops using AWS and GitHub actions.",
    ],
  },
  {
    title: "Web Developer Intern ",
    company_name: "Ineoron.AI",
    icon: tesla,
    iconBg: "#FFFF",
    date: "June 2023 - Jul 2023",
    points: [
      "Developing and maintaining web applications using Next.js , Chakra-ui & redux.",
      "creating and managing the data at backend using Supabase.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      
    ],
  },
  // {
  //   title: "Referal India",
  //   company_name: "Refferal India",
  //   icon: shopify,
  //   iconBg: "#ffff",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack App",
  //   company_name: "Crypto Sensex",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AccommodationHub",
    description:
      "Developed a fully functional Airbnb clone, a web application that allows users to search, book, and list accommodations.Utilized NextAuth for authentication and authorization.Implemented server-side rendering (SSR) and static site generation (SSG) for improved performance",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/hiteshwadhwani/AccommodationHub",
  },
  {
    name: "Soundify: Music Streaming Platform",
    description:
      "Developed Soundify, a music streaming platform that allows users to discover and listen to their favorite songs.Utilized Stripe for secure and seamless payment processing Implemented audio streaming functionality.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "SupaBase",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/hiteshwadhwani/Soundify",
  },
  {
    name: "Phishing Domain Detection",
    description:
      "Predict whether the domains are real or malicious. Trained on multiple machine learning algorithms and able to achieve accuracy > 90 with XGboost Designed and implemented machine-learning pipeline ",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow,",
        color: "green-text-gradient",
      },
      {
        name: "Github Actions",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/hiteshwadhwani/phishing_domain_detection",
  },
];

export { services, technologies, experiences, testimonials, projects };
