/*  ────────────────────────────────────────────────────────────────
    ALL SITE CONTENT LIVES HERE.
    Edit this one file to update the portfolio — no component changes
    needed. Sections with `display: false` are hidden entirely.
    ──────────────────────────────────────────────────────────────── */

export const profile = {
  name: "Sem Sethy",
  role: "iOS Developer",
  location: "Phnom Penh, Cambodia",
  available: "Open to iOS opportunities",
  headline: "I build banking apps people actually enjoy using.",
  summary:
    "iOS Developer with production experience shipping App Store-approved banking apps in Swift, SwiftUI and UIKit using Clean Architecture. I build CI/CD pipelines with Jenkins and Fastlane, design AI automation workflows with n8n, and bring a full-stack background across JavaScript, React, PHP, Laravel, MySQL, Firebase and Python.",
  photo: "/semsethy.jpg",
  resume: "/Sem_Sethy_CV.pdf"
};

export const social = {
  github: "https://github.com/semsethy",
  linkedin: "https://www.linkedin.com/in/semsethy",
  telegram: "https://t.me/sethysem",
  email: "sethysem01@gmail.com",
  phone: "+855 97 687 0003"
};

export const about = {
  display: true,
  title: "What I do",
  intro:
    "I build and ship production iOS apps — owning features from architecture through to App Store release, along with the pipelines and standards that keep shipping repeatable.",
  pillars: [
    {
      icon: "phone",
      title: "Ship production iOS",
      body: "SwiftUI and UIKit on Clean Architecture — building features and refactors, and carrying release branches through to App Store approval."
    },
    {
      icon: "bolt",
      title: "Automate the boring parts",
      body: "CI/CD pipelines with Jenkins and Fastlane that cut deployment time by 80%, plus AI automation workflows built with n8n."
    },
    {
      icon: "globe",
      title: "Work across teams and time zones",
      body: "Day-to-day delivery alongside product, design, backend and QA — comfortable working fully remote with distributed teams, and consistently ahead of deadline."
    },
    {
      icon: "book",
      title: "Leave it maintainable",
      body: "Code that follows Apple's Human Interface Guidelines and agreed team standards, documented so the next person can pick it up."
    }
  ]
};

export const experience = {
  display: true,
  title: "Experience",
  subtitle: "Where I've been shipping.",
  jobs: [
    {
      role: "iOS App Developer",
      company: "Cathay United Bank (Cambodia) Plc.",
      team: "Digital Banking",
      location: "Phnom Penh · Remote with Taiwan HQ",
      period: "Jul 2025 — Present",
      current: true,
      summary:
        "Develop and maintain the CUBC Merchant iOS app, collaborating with iOS developers and engineers in Taiwan and keeping the codebase in step with new technology.",
      points: [
        "Develop and maintain core features, bug fixes and performance work for the CUBC Merchant App using SwiftUI, Clean Architecture and modern iOS design patterns, owning release branches through to production.",
        "Partner with cross-border project managers, product owners, designers, backend engineers and QA across Cambodia and Taiwan to deliver scalable mobile solutions aligned with business requirements.",
        "Built AI automation workflows in n8n that streamlined business processes, including weekly business news reporting and monthly Cambodia marketing reports for the management team.",
        "Developed a CI/CD pipeline with Jenkins and Fastlane to automate deployment, reducing release time by 80%.",
        "Optimized and standardized the codebase for compliance with Apple's Human Interface Guidelines, securing App Store approval."
      ],
      stack: [
        "Swift",
        "SwiftUI",
        "UIKit",
        "iOS SDK",
        "Clean Architecture",
        "MVVM-C",
        "MVC",
        "Coordinator Pattern",
        "Combine",
        "Core Data",
        "Firebase",
        "Jenkins",
        "Fastlane",
        "n8n",
        "Git"
      ]
    }
  ]
};

export const projects = {
  display: true,
  title: "Projects",
  subtitle: "Shipped work, and the apps I build on my own time.",
  groups: [
    {
      label: "Released",
      note: "Live on the App Store",
      items: [
        {
          name: "CUBC Merchant",
          org: "Cathay United Bank (Cambodia) Plc.",
          status: "live",
          icon: "/logos/cubc-icon.png",
          blurb:
            "The merchant banking app for Cathay United Bank Cambodia — KHQR payments, multi-branch business management, cashier administration and real-time transaction monitoring. I develop and maintain the iOS app with the cross-border iOS team in Taiwan, shipping features and releases through to the App Store.",
          meta: [
            {label: "Version", value: "1.0.5"},
            {label: "Category", value: "Finance"},
            {label: "Released", value: "Mar 2026"},
            {label: "Requires", value: "iOS 16+"}
          ],
          stack: ["Swift", "SwiftUI", "Clean Architecture", "MVVM-C", "Combine", "REST APIs"],
          appStoreUrl: "https://apps.apple.com/kh/app/cubc-merchant/id6742865632",
          framedShots: false,
          shots: [
            {src: "/shots/cubc-1.jpg", label: "Accept payments"},
            {src: "/shots/cubc-2.jpg", label: "KHQR"},
            {src: "/shots/cubc-3.jpg", label: "Multi-branch"},
            {src: "/shots/cubc-4.jpg", label: "Transactions"},
            {src: "/shots/cubc-5.jpg", label: "Sales overview"}
          ],
          accent: "brand"
        }
      ]
    },
    {
      label: "Personal",
      note: "Built on my own time — source on GitHub",
      items: [
        {
          name: "Meal Planner",
          org: "Personal project",
          status: "wip",
          blurb:
            "A recipe and meal-planning app — browse and search recipes, save favourites, write your own, schedule meals across the week with cooking-time reminders, and roll the ingredients into a shopping list. Firebase-backed, with full dark mode.",
          stack: ["Swift", "UIKit", "Firebase", "Firestore", "Core Data", "SnapKit"],
          repo: "https://github.com/semsethy/Meal-Planner",
          shots: [
            {src: "/shots/meal-onboarding.jpg", label: "Onboarding"},
            {src: "/shots/meal-home.jpg", label: "Home"},
            {src: "/shots/meal-search.jpg", label: "Search"},
            {src: "/shots/meal-detail.jpg", label: "Recipe detail"},
            {src: "/shots/meal-planner.jpg", label: "Weekly plan"},
            {src: "/shots/meal-shopping.jpg", label: "Shopping list"},
            {src: "/shots/meal-create.jpg", label: "Create recipe"},
            {src: "/shots/meal-favorites.jpg", label: "Favourites"},
            {src: "/shots/meal-settings.jpg", label: "Dark mode"}
          ],
          accent: "sun"
        },
        {
          name: "E-Commerce App",
          org: "Personal project",
          status: "wip",
          blurb:
            "A full shopping experience in SwiftUI on a Laravel + MySQL API — product browsing, cart and wishlist, authentication with OTP, and profile settings with image upload and dark mode.",
          stack: ["Swift", "SwiftUI", "MVVM", "Laravel", "PHP", "MySQL"],
          repo: "https://github.com/semsethy/SwiftUI_Laravel_Ecommerce",
          shots: [
            {src: "/shots/ecom-home.jpg", label: "Home"},
            {src: "/shots/ecom-detail.jpg", label: "Product detail"},
            {src: "/shots/ecom-cart.jpg", label: "Cart"},
            {src: "/shots/ecom-wishlist.jpg", label: "Wishlist"},
            {src: "/shots/ecom-profile.jpg", label: "Profile"},
            {src: "/shots/ecom-login.jpg", label: "Sign in"}
          ],
          accent: "sun"
        }
      ]
    }
  ]
};

/*  Testimonials — real quotes only, never invented.
    To add someone, append an object with the same shape.
    Entries with `pending: true` render as a subtle "space reserved" card;
    fill in `quote` and delete `pending` when you have their words.
    Add an optional `photo: "/logos/name.jpg"` to show a headshot
    instead of initials. */
export const testimonials = {
  display: true,
  title: "What people say",
  subtitle: "Feedback from the people I work with.",
  items: [
    {
      quote:
        "He consistently demonstrates a strong sense of ownership and accountability, delivering assigned tasks on time while maintaining the expected quality standards. His reliability and commitment have contributed positively to the team's overall performance.",
      author: "Kuo Chao Wang",
      title: "Head of Digital Development Function",
      org: "Cathay United Bank (Cambodia) Plc."
    },
    {
      quote:
        "Despite joining as a fresh graduate, Sem Sethy has demonstrated the aptitude and initiative of a much more seasoned developer. He picks up complex concepts rapidly and consistently takes ownership of his assignments. What stands out most is his proactive approach: he actively identifies optimization opportunities and shares practical ideas to improve our deliverables. He is a valuable asset to our team.",
      author: "Ngo Lyheang",
      title: "Deputy Manager, Digital Development",
      org: "Cathay United Bank (Cambodia) Plc."
    }
  ]
};

/*  Recommendation letter.
    `image` is shown as a preview; `file` is the download.
    The recommender's direct phone number has been redacted from both. */
export const recommendation = {
  display: true,
  title: "Recommendation",
  author: "Frank C.-W Hung",
  authorTitle: "Head of Digital Development Section",
  photo: "/logos/frank-hung.jpg",
  org: "Cathay United Bank (Cambodia) Plc.",
  file: "/recommendation-letter.pdf",
  image: "/recommendation-letter.jpg",
  pullQuote:
    "Overall, I consider Sem Sethy a reliable and motivated engineer with good potential for continued growth. I believe his positive attitude, willingness to learn, and sense of responsibility will allow him to contribute effectively in his future role.",
  placeholderNote: ""
};

export const skills = {
  display: true,
  title: "Skills",
  subtitle: "The tools I reach for.",
  groups: [
    {
      name: "iOS Development",
      items: [
        "Swift",
        "SwiftUI",
        "UIKit",
        "iOS SDK",
        "Clean Architecture",
        "MVVM-C",
        "MVC",
        "Coordinator Pattern",
        "Combine",
        "Core Data",
        "Firebase",
        "REST APIs"
      ]
    },
    {
      name: "Tools & Methodologies",
      items: [
        "Git",
        "GitHub",
        "Gitea",
        "Git Fork",
        "Jenkins",
        "Fastlane",
        "Docker",
        "n8n",
        "Mantis",
        "Taiga",
        "Agile / Scrum",
        "CI/CD"
      ]
    },
    {
      name: "Additional Experience",
      items: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "ReactJS",
        "PHP",
        "Laravel",
        "MySQL",
        "Python"
      ]
    }
  ]
};

export const education = {
  display: true,
  title: "Education & Training",
  schools: [
    {
      name: "Royal University of Phnom Penh",
      credential: "Bachelor of Science in Computer Science",
      period: "2021 — 2025",
      location: "Phnom Penh",
      logo: "/logos/rupp.png"
    },
    {
      name: "TechPreneur Bootcamp",
      credential: "AI & Data Science",
      period: "Jul 2026 — Present",
      location: "Phnom Penh",
      logo: "/logos/techpreneur.jpg"
    },
    {
      name: "ADITI Academy",
      credential: "iOS App Development Professional Training",
      period: "Mar 2024 — Sep 2024",
      location: "Phnom Penh",
      logo: "/logos/aditi.jpg"
    }
  ]
};

export const certifications = {
  display: true,
  title: "Certifications",
  subtitle: "Tap any certificate to view the original.",
  items: [
    {
      name: "Certificate of Outstanding Student Performance",
      issuer: "ADITI Academy",
      year: "2024",
      cover: "/certs/outstanding.jpg",
      badge: "/logos/aditi-badge.jpg",
      url: "https://drive.google.com/file/d/1esPSn8De8GDg5ApNIaAGqDaD2lYA6TEt/view?usp=sharing"
    },
    {
      name: "Certificate of Achievement",
      issuer: "ADITI Academy",
      year: "2024",
      cover: "/certs/achievement.jpg",
      badge: "/logos/aditi-badge.jpg",
      url: "https://drive.google.com/file/d/15amhq_9K5aQOAab3S-Wz9jQfpySqep_G/view?usp=sharing"
    },
    {
      name: "Certificate of Appreciation",
      issuer: "USAID",
      year: "",
      cover: "/certs/appreciation.jpg",
      badge: "/logos/usaid.png",
      url: "https://drive.google.com/file/d/1hpB0oCa8cQxEb173G7JMUQaH9-H8wYqp/view?usp=sharing"
    },
    {
      name: "Certificate of Participation",
      issuer: "Veiron",
      year: "",
      cover: "/certs/participation.jpg",
      badge: "/logos/veiron.jpg",
      url: "https://drive.google.com/file/d/1VA0V2fBHciXDAm1sZ_2J4g85B3N8IpMG/view?usp=sharing"
    }
  ]
};

export const contact = {
  display: true,
  title: "Let's talk",
  subtitle:
    "Working on something interesting, or hiring for iOS? My inbox is always open — I read everything.",
  address: "Phnom Penh Thmey, Sen Sok, Phnom Penh"
};

export const nav = [
  {label: "About", href: "#about"},
  {label: "Experience", href: "#experience"},
  {label: "Projects", href: "#projects"},
  {label: "Testimonials", href: "#testimonials"},
  {label: "Skills", href: "#skills"},
  {label: "Contact", href: "#contact"}
];
