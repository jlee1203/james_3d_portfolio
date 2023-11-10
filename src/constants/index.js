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
    carcar,
    jobit,
    tripguide,
    threejs,
    python,
    postgresql,
    pokedex,
    hackreactor,
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
      title: "Full Stack Software Engineer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: backend,
    },
    {
      title: "Inquisitive Mentality",
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
      name: "Python",
      icon: python,
    },

    {
      name: "PostgreSQL",
      icon: postgresql,
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
      name: "git",
      icon: git,
    },
    
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Coding Bootcamp Graduate",
      company_name: "Hack Reactor",
      icon: hackreactor,
      iconBg: "#383E56",
      date: "March 2023 - August 2023",
      points: [
        "Learned programming languages such as Python and Django.",
        "Taught standard practices for front-end and back-end.",
        "Implementing criteria to produce projects with a team of fellow software engineers.",
        "Practiced using frameworks such as react and Django and data structure and algorithm concepts.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
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
        "James showed a great interest in software engineering and demonstrated a disciplined focus.",
      name: "Tiffany Moore",
      designation: "Manager",
      company: "PMP",
    }
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Car Sales",
      description:
        "A web application that manages a Car companies salespeople, customers, automobile inventory, and the sales and services of relevant components.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "pink-text-gradient",
        },
      ],
      image: carcar,
      source_code_link: "https://gitlab.com/eeHyunwoo/project-beta",
    },
    {
      name: "To-Do Manager",
      description:
        "Web application that enables users to efficiently manage tasks, deadlines, and priority of task completion",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://gitlab.com/eeHyunwoo/project-alpha-apr",
    },
    {
      name: "Poke-Dex",
      description:
        "A functional dynamic pokedex that shows the name, types, id #, height, weight, with buttons for additional information.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: pokedex,
      source_code_link: "https://github.com/jlee1203/phase-1-project",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };