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
  description: "3-year experienced Android Engineer proficient in Kotlin, Java, Clean Architecture, Coroutines, Room, Retrofit, Dependency Injection, and Jetpack Compose. Skilled in creating high-performing, scalable and feature-rich applications using industry best practices. Strong understanding of the end-to-end Android development process. Able to independently develop, test, and release production-ready code with minimal supervision.",
  og: {
    title: "Igor Stevanovic Portfolio",
    type: "website",
    url: "https://giga99.github.io/portfolio-website/",
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
    "A passionate Android Engineer 🚀 having an experience of building Mobile applications with Kotlin / Python / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink: "https://drive.google.com/file/d/1pPtZPb9ZNPnAhqR8NbieC_8B6vGiLlju/view?usp=sharing",
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
  playStore: "https://play.google.com/store/apps/developer?id=Igor+Stevanovic",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ANDROID ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive and complex mobile applications"),
    emoji("⚡ Backend based on Ktor and Python"),
    emoji("⚡ MEAN and MERN stack apps")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fab fa-kotlin"
    },
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
      skillName: "mongo-database",
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
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Belgrade, School of Electrical Engineering",
      logo: require("./assets/images/etfLogo.webp"),
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
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Flutter",
      progressPercentage: "30%"
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Mobile Engineer",
      company: "ANWB",
      companylogo: require("./assets/images/anwbLogo.webp"),
      date: "Nov 2022 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Contributed to the development of an extremely successful app that attracted over 1,000,000 users, with a relentless focus on constant improvement.",
        "As a key member of the development team played a pivotal role in the app's success by working on new features and functionalities, fixing bugs, and optimizing the user experience.",
        "Refactored legacy code and implemented industry best practices to improve the performance and scalability of the app.",
        "Actively participated in design and code reviews, and provided valuable feedback to the team to improve the overall quality of the product.",
        "Collaborated with designers, product managers, backend developers, and iOS developers to ensure a seamless user experience across all platforms.",
        "Actively participated in organizing the Android Chapter of the company, working closely with team members and other stakeholders to establish a strong community and knowledge-sharing platform for Android developers."
      ]
    },
    {
      role: "Android Engineer",
      company: "SwissBorg",
      companylogo: require("./assets/images/swissborgLogo.webp"),
      date: "Oct 2022 – Present",
      descBullets: [
        "Led the implementation of innovative features for a high-performing app that attracted over 700,000 users, with a relentless focus on constant improvement.",
        "Collaborated with a talented team of designers, product managers, backend developers, and iOS developers to deliver a truly outstanding product.",
        "Consistently pushed the boundaries of the product's capabilities, resulting in a 20% increase in user engagement and satisfaction.",
        "Worked closely with cross-functional teams to build the best possible product by identifying areas of improvement, providing solutions, and ensuring seamless integration."
      ]
    },
    {
      role: "Android Engineer",
      company: "DomainMoney",
      companylogo: require("./assets/images/domainmoneyLogo.webp"),
      date: "Feb 2022 – Oct 2022",
      descBullets: [
        "Created an app for a large user base.",
        "Collaborated with cross-functional teams, including designers, product managers, backend developers, and iOS developers, to deliver a top-performing product.",
        "Improved app performance by 15% through the implementation of industry best practices.",
        "For more information, please contact Zeeshan Mian, Head of Frontend Platforms(https://www.linkedin.com/in/zmian/), who can attest to my abilities and successes."
      ]
    },
    {
      role: "Android Engineer",
      company: "LotusFlare",
      companylogo: require("./assets/images/lotusflareLogo.webp"),
      date: "Dec 2019 – Feb 2022",
      descBullets: [
        "Led the development of an extremely successful app that attracted over 3,000,000 users and achieved a 99.8% crash-free user rate.",
        "Actively set up, created, and developed the app from the ground up, ensuring that it met the highest standards of quality and performance.",
        "Acted as a key contributor to the library responsible for communication between the android app and the server, ensuring seamless integration and optimal performance.",
        "Collaborated closely with cross-functional teams, including designers, product managers, backend developers, and iOS developers, to deliver a truly outstanding product.",
        "Actively sought out new technologies and methodologies to improve the product and stay ahead of the competition."
      ]
    },
    {
      role: "Android Engineer Intern",
      company: "LotusFlare",
      companylogo: require("./assets/images/lotusflareLogo.webp"),
      date: "Sept 2019 – Dec 2019",
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
  title: "Live Mobile Apps",
  subtitle: "SOME APPS THAT I CREATED AND RELEASED",
  projects: [
    {
      image: require("./assets/images/drawlingLogo.webp"),
      projectName: "Drawling",
      projectDesc: "Drawling - Drawling is the next generation's beautifully and simply designed a multiplayer android app where you draw and your friends guess what you drew.",
      footerLink: [
        {
          name: "Visit it on PlayStore",
          url: "https://play.google.com/store/apps/details?id=com.draw.drawlingandroid"
        }
      ]
    },
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
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "WHOIS Hackathon First Place",
      subtitle: "Won first place in the WHOIS Hackathon by designing and developing a fully-functional Android and iOS app, along with the backend, in just 48 hours. The app featured a domain search functionality, the ability to add domains as favorites, a random free domain generator, a top 5 searched domains feature, and more.",
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
        },
        {
          name: "Winning team impressions",
          url: "https://quantox.com/blog/how-are-whois-mobile-applications-made/"
        }
      ]
    },
    {
      title: "FON Hackathon Second Place",
      subtitle: "Achieved second place in the FON Hackathon by designing and developing an Android app within 24 hours. The app enabled users to track their carbon footprint and provided them with tips and suggestions on how to reduce it.",
      image: require("./assets/images/fonHackathonLogo.webp"),
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
  displayMediumBlogs: "true",
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
  display: true
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
  number: "+38162370447 / +31681596262",
  email_address: "igorstevanovic99@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "igor_s1999",
  display: true
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
