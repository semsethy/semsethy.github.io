/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yun Chamnab",
  title: "Hi, I'm Chamnab",
  subTitle: emoji(
    "A passionate Full Stack Software Developer having an experience of building Web and Mobile applications with NodeJS / Laravel / Cakephp / NestJS / VueJS / AngularJS / Ionic / Django and some other cool libraries and frameworks."
  ),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/ChamnabYun",
  linkedin: "https://www.linkedin.com/in/yun-chamnab/",
  gmail: "mailto:nab.cham.yun@gmail.com",
  gitlab: "https://gitlab.com/ChamnabYun",
  stackoverflow: "https://stackoverflow.com/users/16314311/chamnab",
  telegram: "https://t.me/yun_chamnab",
  twitter: "https://twitter.com/NabNab79",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: emoji(
    "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK"
  ),
  skills: [
    emoji(
      "- Develop highly interactive Frontend and Backend for web applications"
    ),
    emoji("- Integration of third party services such as Firebase / Azure AD")
  ],

  /**
   * Make Sure to include correct Font Awesome Classname to view your icon
   * https://fontawesome.com/icons?d=gallery
   */

  softwareSkills: [
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
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cambodia Academy of Digital Technology - CADT",
      logo: require("./assets/images/cadt.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "October 2018 - October 2022"
    },
    {
      schoolName: "Chea Sim Chroy Chongvar Highschool",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Graduated from High school",
      duration: "September 2013 - April 2018"
    },
    {
      schoolName: "Sovannaphumi School",
      logo: require("./assets/images/sovannaphumi_school.png"),
      subHeader: "Study English Full Time",
      duration: "January 2012 - October 2017"
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Database",
      progressPercentage: "88%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "86%"
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
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
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
      title: "Privacy Refresher Course",
      image: require("./assets/images/Smart_Axiata_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1S_sclSi72-JanzQrnKpoqyYrx1f5KrfP/view?usp=sharing"
        }
      ]
    },
    {
      title: "3rd Party Risks Access Receiver Course",
      image: require("./assets/images/Smart_Axiata_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1KJHOAoZF9SPmS_WHC2s6U_wb-So0jlnB/view?usp=sharing"
        }
      ]
    },
    {
      title: "Crown Jewels Course",
      image: require("./assets/images/Smart_Axiata_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1kkN1SO0k_IhZWmsXvJJssyL2vyceM_r2/view?usp=sharing"
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
  number: "+855-15249466",
  email_address: "nab.cham.yun@gmail.com"
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
