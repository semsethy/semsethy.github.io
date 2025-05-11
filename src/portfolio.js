/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sem Sethy",
  title: "Hi, I'm Sethy",
  subTitle: emoji(
    "A passionate iOS app developer with experience in building web and mobile applications using Swift / Laravel / PHP / ReactJS / and other cool libraries and frameworks, and experienced in integrating with microservice architecture."
  ),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/semsethy",
  linkedin: "https://www.linkedin.com/in/sem-sethy",
  gmail: "mailto:sethyrisk@gmail.com",
  // gitlab: "https://gitlab.com/ChamnabYun",
  // stackoverflow: "https://stackoverflow.com/users/16314311/chamnab",
  telegram: "https://t.me/semsethy",
  // twitter: "https://twitter.com/NabNab79",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: emoji(
    "A CRAZY FULL STACK MOBILE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK"
  ),
  skills: [
    emoji(
      "- Develop highly interactive Frontend and Backend for mobile applications"
    ),
    emoji("- Integration of third party services such as Firebase / Cocoa Touch")
  ],

  /**
   * Make Sure to include correct Font Awesome Classname to view your icon
   * https://fontawesome.com/icons?d=gallery
   */

  softwareSkills: [
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Royal University of Phnom Penh - RUPP",
      logo: require("./assets/images/rupp_logo.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "March 2021 - Now"
    },
    {
      schoolName: "Aditi Academy",
      logo: require("./assets/images/aditi.jpg"),
      subHeader: "Study IOS App Development Professional Training for 6 months",
      duration: "March 2024 - September 2024"
    },
    {
      schoolName: "Kampong Thum High School",
      logo: require("./assets/images/kpt.jpg"),
      subHeader: "Graduated from High school",
      duration: "September 2019 - April 2021"
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Database",
      progressPercentage: "50%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "HRMS Developer",
      company: "Advanced Bank of Asia Limited",
      companylogo: require("./assets/images/ABA_Logo.png"),
      date: "Jan 2023 – Present",
      desc: "HR Management System"
    },
    {
      role: "Third-Party Developer",
      company: "Mobile C&C Co., Ltd",
      companylogo: require("./assets/images/mobileCnC.png"),
      date: "Aug 2022 – Nov 2022",
      desc: "Solar Ticketing System"
    },
    {
      role: "Third-Party Developer",
      company: "Smart Axiata Co., Ltd",
      companylogo: require("./assets/images/smartAxiata.png"),
      date: "Apr 2022 – Jul 2022",
      desc: "Dealer App & Sim Registration System"
    },
    {
      role: "Backend Developer",
      company: "CamMob Co., Ltd",
      companylogo: require("./assets/images/Logo_CamMob.png"),
      date: "Jun 2021 – Dec 2022",
      desc: "Scoring, Transcript, and Certificate System"
    },
    {
      role: "Web Developer Intern",
      company: "Anakut Digital Solution Co., Ltd",
      companylogo: require("./assets/images/anakut.webp"),
      date: "Jul 2020 – Nov 2020",
      desc: "Point of Sale System"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/scoring_logo.webp"),
      projectName: "Scoring Management",
      projectDesc: "Manage Score, Transcript, and Certificate of the college",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://schoolbase.cadt.edu.kh/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/watchfree_logo.webp"),
      projectName: "Watchfree?",
      projectDesc: "A websit allow to watch free movies",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://freemovie-39.herokuapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications that I have done !",

  achievementsCards: [
    {
      title: "Certificate of Outstanding Student",
      image: require("./assets/images/aditi_logo.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1esPSn8De8GDg5ApNIaAGqDaD2lYA6TEt/view?usp=sharing"
        }
      ]
    },
    {
      title: "Certificate of Achievement",
      image: require("./assets/images/aditi_logo.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15amhq_9K5aQOAab3S-Wz9jQfpySqep_G/view?usp=sharing"
        }
      ]
    },
    {
      title: "Certificate of Appreciation",
      image: require("./assets/images/USAID1.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1hpB0oCa8cQxEb173G7JMUQaH9-H8wYqp/view?usp=sharing"
        }
      ]
    },
    {
      title: "Certificate of Participation",
      image: require("./assets/images/veiron.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1VA0V2fBHciXDAm1sZ_2J4g85B3N8IpMG/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+855-10 383 493",
  email_address: "sem.sethy@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "NabNab79", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails
};
