import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jeremiah Minton | Full Stack/Mobile Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Reactjs Portfolio website.', // e.g: Welcome to my website
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
  paragraphOne: 'While in primary education my passion for technology and art came to life. It started with writing commands in MS-DOS on the family computer and sitting down with my sketch pad. I went on to go to school for art with a minor in web design. I always felt like something was missing, So, I went back to school for a degree in programming. I am now a full stack developer who is also a Graphic Designer. My two passions have found a home in developing mobile applications. Where I stylize mobile application to enhance people’s lives.',
  paragraphTwo: 'I have worked at the National Beta Club as a Programmer/System Administrator, GE as Software Engineer and currently Michelin as a mobile/web applications. My duties ranged from setup of local computers on a Domain workgroup, updating computers, trouble shooting issues from printer connection to software issues, setting up Linux servers and databases for those servers. I also helped develop a custom software application. Other duties included developing mobile Applications and custom Bluetooth connections. Mobile app development included change technology stack multiple times throughout. Apps were created through info stored in a database received from REST API. Used Mysql light to store data on mobile devices. Current projects include native iOS and native Android and hybrid applications. Currently on a hybrid application Dev Group using PostgreSQL for database, Spring Boot for the backend and Ionic framework for the frontend.',
  paragraphThree: 'The journey began when I started college in 1997 at the Art Institute of Pittsburgh where I developed my artistic and design skills. While in college for Graphic Arts, I started to develop an interest in web design. My first experience in programming was with flash. Then I start developing with the language of PHP then expanded into multiple languages of code. My skills will never stop growing. I am always looking for challenges, chances to do problem solving, and I look forward to what the future has in store for me.',
  resume: 'http://jeremiahminton.com/img/JeremiahMintonResume.pdf', // if no resume, the button will not show up
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
    img: 'cryptoTracker.jpg',
    title: 'Angular - crypto tracking project',
    info: 'Project that I was request to do to show that I can create angular frontend connecting to API.',
    info2: '',
    url: '',
    repo: 'https://github.com/jminton4dev/crypto_tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ReactjsPro.jpg',
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
