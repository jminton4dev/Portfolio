import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jeremiah Minton | Full Stack/Mobile Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my React Portfolio website.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Jeremiah Minton',
  subtitle: 'I am FullStack/Mobile Developer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I decided to enter the field of design when I was in the 10th grade and I had to create a product. I developed an off the wall product that grabbed the class attention. We all had a big laugh at the product and I knew that day forward I wanted to use my talent to develop designs to influence people lives.',
  paragraphTwo: 'As technology has become more advanced, I decided to take my love for technology and expand my skills. I am not a designer but someone who develops code to understand the needs and desires of people. The application(s) that I create look pleasing to the eye as well as the functionality to the user needs.',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'icellphones.jpg',
    title: 'HTML5 - i•cell Phones',
    info: 'The client was need of website and database to be fix after partner him split their way. I was able to restore his database of his clients and develop a new website.',
    info2: '',
    url: 'https://icellphones.com',
    repo: 'https://github.com/jminton4dev/icellphones', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Angular - crypto tracking project',
    info: 'Project that I was request to do to show that I can create angular frontend connecting to API.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Reactjs - Portfolio',
    info: 'I want to show that I can create a website with reactjs so that I can demo my skills.',
    info2: '',
    url: '',
    repo: 'https://github.com/jminton4dev/Portfolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jminton@jeremiahminton.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jeremiahminton/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jminton4dev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
