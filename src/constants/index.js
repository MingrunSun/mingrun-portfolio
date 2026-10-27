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
  python,
  r,
  stata,
  docker,
  meta,
  starbucks,
  tesla,
  bears,
  question,
  empowerhouse,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  election,
  cybercrime,
  applepay,
  devenglish,
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
  // Contact section hidden for now. Uncomment to restore the nav link
  // (and re-add <Contact /> in src/App.jsx).
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

const services = [
  {
    title: "Researcher",
    subtitle: "Higher Education & Policy",
    icon: web,
  },
  {
    title: "Applied Economist",
    subtitle: "Causal Inference & Evaluation",
    icon: backend,
  },
  {
    title: "AI & Data Explorer",
    subtitle: "Technology & Human Judgment",
    icon: mobile,
  },
  {
    title: "Creative Writer",
    subtitle: "Stories & Imagination",
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
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
    name: "python",
    icon: python,
  },
  {
    name: "r",
    icon: r,
  },
  {
    name: "stata",
    icon: stata,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Financial Analyst",
    company_name: "Department of Finance (Financial Modeling Course",
    icon: bears,
    iconBg: "#383E56",
    date: "Jan 2020 – May 2020",
    points: [
      "Determined scope and focus of 4 investment projects and led group of 30+ through meetings, collaboration, and assigned tasks, resulting in earning 3 highest group performance rankings",
      "Designed and implemented 5 well-structured influence diagrams to streamline evaluation and resolution process for client-specific problems.",
      "Customized 4 stochastic financial forecasting models with Excel and Crystal Ball Monte-Carlo Simulation Software to optimize clients’ decision making.",
    ],
  },
  {
    title: "Portfolio Analyst",
    company_name: "Hodges Financial Markets Center",
    icon: bears,
    iconBg: "#383E56",
    date: "Sep 2020 – Dec 2020",
    points: [
      "Presented insights and recommendations of an in-depth security analysis, resulting in 100% in-poll agreements to purchase 3 new interest stocks.",
      "Developed comprehensive and well-written 20+ page analyst report to evaluate the stock performance of 3 oil and gas giants.",
    ],
  },
  {
    title: "Teaching & Research Assistant",
    company_name: "Department of Finance",
    icon: bears,
    iconBg: "#383E56",
    date: "Jan 2021 – May 2023",
    points: [
      "Instructed 250+ college students in Introduction to Corporate Finance course, covering range of financial concepts such as: time value of money, interpretation of cash flow statement, Straight-line forecasting, MACRS cashflow forecasting, and dividend discount model.",
      "Led 30+ tailored supplemental sessions in finance, which helped students improve academic performance.",
      "Analyzed panel data collected from 50+ financial statements to examine the relationship between financial innovations and firms’ initiatives in the payment industry.",
      "Programmed 30+ accurate and reproducible Stata do-files to compile and clean raw data gathered from reliable websites and database.",
    ],
  },
  {
    title: "Independent Empirical Researcher",
    company_name: "Department of Economics",
    icon: bears,
    // iconBg: "#E6DEDD",
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Implemented principal component analysis with data virtualization technique to identify the underlying structure of attitudes in internet users who were concerned with cybercrimes.",
      "Built 10+ two-stage least square regression models to address endogeneity, establishing positive causal relationships between individual cybercrime victimization and Internet usage.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Baylor University",
    icon: bears,
    iconBg: "#383E56",
    date: "Sep 2024 – Dec 2025",
    points: [
      "Designed and built a React-based conversational chatbot for a faculty research project, enabling structured data collection through natural dialogue with participants.",
      "Implemented cloud storage and upload pipelines so that conversation logs were securely captured and organized for downstream analysis.",
      "Iterated on the interface and conversation flow with the research team to improve participant engagement and data quality.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "Empowerhouse",
    icon: empowerhouse,
    iconBg: "#C2007A",
    date: "Jun 2025 – Mar 2026",
    points: [
      "Built interactive dashboards to track enrollment, engagement, and program outcomes, giving leadership and program staff a real-time view of key metrics.",
      "Developed an enrollment forecasting model to project future participation and support planning, budgeting, and resource allocation decisions.",
      "Applied machine learning techniques to analyze participant and program data, surfacing patterns and insights that informed program design and outreach strategy.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "[Place Holder. Waiting to be filled out soon.]",
    name: "ABC",
    designation: "XXX",
    company: "XXX",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "[Place Holder. Waiting to be filled out soon.]",
    name: "DEF",
    designation: "XXX",
    company: "XXX",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "[Place Holder. Waiting to be filled out soon.]",
    name: "XYZ",
    designation: "XXX",
    company: "XXX",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const futures = [
  {
    title: "1-Year Plan ",
    company_name: "Focus: Finishing Strong & Exploring Paths",
    icon: bears,
    iconBg: "#383E56",
    date: "2025 -2026",
    points: [
      "Complete dissertation chapters.",
      "Start applying for postdocs and fellowships.",
      "Teach if possible to strengthen academic teaching profile.",
      "Present the work at a conference within the year.",
      "Prepare academic portfolio.",
    ],
  },
  {
    title: "2-Year Plan",
    company_name: "Focus: Transitioning",
    icon: question,
    iconBg: "black",
    date: "2025-2027",
    points: [
      "Transition into a postdoctoral fellowship, policy research role, or academic teaching position.",
      "Focus on publishing and building a professional presence in health policy, economics, and technology.",
      "Continue developing interdisciplinary research interests.",
    ],
  },
  {
    title: " 5-Year Plan",
    company_name: "Focus: Build Stability & Expertise",
    icon: question,
    iconBg: "black",
    date: "2025 - 2030",
    points: [
      "Secure a stable academic or research-focused position.",
      "Establish a niche in areas like AI disruption, healthcare finance, or mental health policy",
      "Begin shaping long-term research goals or external grant proposals.",
    ],
  },
  {
    title: "10-Year Plan",
    company_name: "Focus: Lead & Make Impact",
    icon: question,
    iconBg: "black",
    date: "2025-2030",
    points: [
      "Hold a permanent or tenured academic position in a university or research institute.",
      "Be recognized as an expert in technology and public health policy intersections",
      "Contribute to teaching, mentorship, and real-world policy conversations.",
    ],
  },
];

const projects = [
  {
    name: "Cybercrime Research",
    description:
      "A empirical casual paper studies how faster internet (LTE technology) affects cybercrime victimization using the instrumental variable design.",
    tags: [
      {
        name: "stata",
        color: "blue-text-gradient",
      },
      {
        name: "overleaf",
        color: "green-text-gradient",
      },
      // {
      //   name: "R studio",
      //   color: "pink-text-gradient",
      // },
    ],
    image: cybercrime,
    // source_code_link: "https://github.com/",  // add a link here to show the GitHub button
  },
  {
    name: "ElectionGPT Shiny App",
    description:
      "An interactive Shiny App that document innovative methods to predict the outcomes of the 2024 U.S using ChatGPT.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "stata",
        color: "green-text-gradient",
      },
      {
        name: "R studio",
        color: "pink-text-gradient",
      },
    ],
    image: election,
    source_code_link: "https://github.com/scunning1975/ElectionGPT",
  },
  // ApplePay Research hidden: coauthor does not want it public. Uncomment to restore.
  // {
  //   name: "ApplePay Research",
  //   description:
  //     "A empirical study examines the impact of collaborating with big tech (Apple Pay) on community banks in the U.S.",
  //   tags: [
  //     {
  //       name: "stata",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "overleaf",
  //       color: "green-text-gradient",
  //     },
  //     // {
  //     //   name: "TexTech",
  //     //   color: "pink-text-gradient",
  //     // },
  //   ],
  //   image: applepay,
  //   // source_code_link: "https://github.com/",  // add a link here to show the GitHub button
  // },
  {
    name: "Developmental English Research",
    subtitle: "Supporting Persistence, Reshaping Course-Taking",
    description:
      "An empirical study examining how developmental English placement affects student persistence and course-taking behavior at a private four-year university, using a fuzzy regression discontinuity design and administrative student records.",
    note: "Accepted for presentation at the 2026 North Texas Economics Conference.",
    tags: [
      {
        name: "stata",
        color: "blue-text-gradient",
      },
      {
        name: "overleaf",
        color: "green-text-gradient",
      },
      {
        name: "regression discontinuity",
        color: "pink-text-gradient",
      },
    ],
    image: devenglish,
    // source_code_link: "",  // add a link here to show the GitHub button
  },
];

export { services, technologies, experiences, futures, testimonials, projects };
