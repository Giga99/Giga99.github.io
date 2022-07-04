/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// SEO Related settings

const seo = {
  title: "Igor's Portfolio",
  description: "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Igor Stevanovic Portfolio",
    type: "website",
    url: "http://igorstevanovic.com/",
  },
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Igor Stevanovic",
  title: "Hi all, I'm Igor",
  subTitle: emoji(
    "A passionate Android Engineer 🚀 having an experience of building Mobile applications with Kotlin / Java / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink: "https://drive.google.com/file/d/1eBhl0Tq1sU7M4Wg73jAmrREoRla-k6zt/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Giga99",
  linkedin: "https://www.linkedin.com/in/igor-stevanovic/",
  gmail: "igorstevanovic99@gmail.com",
  medium: "https://medium.com/@igorstevanovic99",
  stackoverflow: "https://stackoverflow.com/users/11478166/giga99",
  twitter: "https://twitter.com/igor_s1999",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ANDROID ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive and complex mobile applications"),
    emoji("⚡ Backend based on Ktor"),
    emoji("⚡ MEAN and MERN stack apps")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    // {
    //   skillName: "kotlin",
    //   fontAwesomeClassname: "fab fa-kotlin"
    // },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    // {
    //   skillName: "flutter",
    //   fontAwesomeClassname: "fab fa-flutter"
    // },
    // {
    //   skillName: "dart",
    //   fontAwesomeClassname: "fab fa-dart"
    // },
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Belgrade, School of Electrical Engineering",
      logo: require("./assets/images/etfLogo.png"),
      subHeader: "Bachelor of Science in Computer Engineering and Information Theory",
      duration: "September 2018 - July 2022",
      desc: "Studies based on software and a little bit of hardware. Some things that I learned here:",
      descBullets: [
        "Algorithms and Data Structures, Java, C/C++, SQL, NoSQL",
        "Asynchronous programming, Computer architecture and organization, MEAN stack",
        "Data security, Microprocessor systems, Software Design, Intelligent systems",
        "Python backend, Docker, Program translators, Assembly and Linker"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Android",
      progressPercentage: "90%"
    },
    {
      Stack: "Flutter",
      progressPercentage: "60%"
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Android Engineer",
      company: "DomainMoney",
      companylogo: require("./assets/images/domainmoneyLogo.png"),
      date: "Feb 2022 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed an app for a high number of users.",
        "Improving the product in every possible way.",
        "Collaborating with designers, backend team, and ios team to build the best possible product."
      ]
    },
    {
      role: "Android Engineer",
      company: "LotusFlare",
      companylogo: require("./assets/images/lotusflareLogo.png"),
      date: "Dec 2020 – Feb 2022",
      descBullets: [
        "Set up, created, and developed an app that accumulated more than 1,000,000 users and shows a 99,8% crash-free user rate.",
        "Maintaining and introducing new features in the app while keeping more than 99.9% crash-free users.",
        "Contributing to the library responsible for communication between the android app and the server."
      ]
    },
    {
      role: "Android Engineer Intern",
      company: "LotusFlare",
      companylogo: require("./assets/images/lotusflareLogo.png"),
      date: "Sept 2020 – Dec 2020",
      descBullets: [
        "Maintaining and introducing new features in the app while keeping more than 99.9% crash-free users.",
        "Contributing to the library responsible for communication between the android app and the server."
      ]
    }
  ]
};

//Open Source Section to View Your Github Pinned Projects

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME APPS THAT I CREATED AND RELEASED",
  projects: [
    {
      image: require("./assets/images/movieTrailersLogo.webp"),
      projectName: "MovieTrailers",
      projectDesc: "Movie Trailers - Find your next movie is the new generation beautifully designed an app where you can find various movies to watch. The app is available in the Spanish language too!",
      footerLink: [
        {
          name: "Visit it on PlayStore",
          url: "https://play.google.com/store/apps/details?id=com.mt.movietrailers"
        }
      ]
    },
    {
      image: require("./assets/images/mrcookerLogo.webp"),
      projectName: "MrCooker",
      projectDesc: "MrCooker allows you to share your best recipes with the world. Mark the ones you like the most and surprise your family with new international food. For every recipe, you can look at the ingredients and instructions. Everything is easier with MrCooker.",
      footerLink: [
        {
          name: "Visit it on PlayStore",
          url: "https://play.google.com/store/apps/details?id=mr.cooker.mrcooker"
        }
      ]
    },
    {
      image: require("./assets/images/ofingerLogo.webp"),
      projectName: "Ofinger",
      projectDesc: "Ofinger is an app for buying and selling your clothes and accessories. This app allows you to search for products, add them to your cart, send and receive messages, edit your profile, and so on.",
      footerLink: [
        {
          name: "Visit it on PlayStore",
          url: "https://play.google.com/store/apps/details?id=aplikacija.apl.ofinger"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "WHOIS Hackathon First Place",
      subtitle: "First place in WHOIS Hackathon, where we in 48 hours created Android and iOS apps along with the backend. On these apps, you could search for domains, add them as favorites, get one random free domain, see the top 5 searched domains, and so on.",
      image: require("./assets/images/whoisHackathonLogo.svg"),
      footerLink: [
        {
          name: "Hackathon link",
          url: "https://whoishakaton.rs/"
        },
        {
          name: "Presentation of apps (only on Serbian language)",
          url: "https://www.youtube.com/watch?v=AyFjmfd9s9Y"
        },
        {
          name: "After Hackathon interview",
          url: "https://www.youtube.com/watch?v=YO8lDmd8Qvk"
        }
      ]
    },
    {
      title: "FON Hackathon Second Place",
      subtitle: "Second place in FON Hackathon, where we in just 24 hours created an Android app, that allows you to track your carbon footprint and gives you tips on how to reduce it.",
      image: require("./assets/images/fonHackathonLogo.png"),
      footerLink: [
        {
          name: "Hackathon link",
          url: "https://hakaton.fonis.rs/2022/"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+38162370447",
  email_address: "igorstevanovic99@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "igor_s1999",
  display: false
};

export {
  seo,
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
