/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Pratik",
  logo_name: "Pratik.A()",
  nickname: "pratik",
  full_name: "Pratik Agnihotri",
  subTitle: "Full Stack Developer, New Tech Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1S0_e6d9xcQQxEBY8dCZCBAb40fik9v0c/view?usp=sharing",
  mail: "mailto:pratikagnihotri1234@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/King0311",
  linkedin: "https://www.linkedin.com/in/pratik-agnihotri-5a24b5222/",
  gmail: "pratikagnihotri1234@gmail.com",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter and Android",
        "⚡ Creating application backend in Django, FastApi & Flask",
        "⚡ Scripting and Scraping in Python Using Modern Packages",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "FastApi",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "A. P. Shah College of Engineering",
      subtitle: "Bachelor in Computer Engineering",
      logo_path: "engg.jpeg",
      alt_name: "APShah",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied core subjects like Database Management Systems, Data Structures, Computer Networks, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
        "⚡ I had done many internships during my course which helped me to gain practical knowledge.",
        "⚡ I have secured 9.12 CGPA.",
      ],
      website_link: "https://www.apsit.edu.in/",
    },
    {
      title: "Shri T. P. Bhatia College of Science",
      subtitle: "Junior College with Science",
      logo_path: "junior.png",
      alt_name: "TPBhatia",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ I have studied core subjects of Science",
        "⚡ I have secured 77% in my 12th Boards.",
      ],
      website_link: "https://tpbhatiacollege.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CLA: Programming Essentials in C",
      subtitle: "Cisco Networking Academy",
      logo_path: "Cpp.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1VeSuMs5hmG6PiQhyMu7Sstk-kyPfGhLu/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "Java Programming",
      subtitle: "Oracle Academy",
      logo_path: "oracle.png",
      certificate_link:
        "https://drive.google.com/file/d/1VeSuMs5hmG6PiQhyMu7Sstk-kyPfGhLu/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#fe0037",
    },
    {
      title: "IT Essentials",
      subtitle: "Cisco Networking Academy",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1VeSuMs5hmG6PiQhyMu7Sstk-kyPfGhLu/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Basics of Python Programming",
      subtitle: "APSIT SKILLS",
      logo_path: "apskill.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1VeSuMs5hmG6PiQhyMu7Sstk-kyPfGhLu/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "NDG LINUX ESSENTIALS",
      subtitle: "Cisco Networking Academy",
      logo_path: "ndg.png",
      certificate_link:
        "https://drive.google.com/file/d/1VeSuMs5hmG6PiQhyMu7Sstk-kyPfGhLu/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "Django Application with MySql",
      subtitle: "IBM",
      logo_path: "ibmdjango.png",
      certificate_link:
        "https://drive.google.com/file/d/1VeSuMs5hmG6PiQhyMu7Sstk-kyPfGhLu/view?usp=sharing",
      alt_name: "Flutter International Hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "React + Redux",
      subtitle: "SoloLearn",
      logo_path: "solo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1VeSuMs5hmG6PiQhyMu7Sstk-kyPfGhLu/view?usp=sharing",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As a Full Stack Developer, I have worked with real projects for over a years. I've done projects and built new features in existing real world project. I love getting my hands dirty with new technologies and frameworks.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Restaverse Pvt. Ltd.",
          company_url: "https://www.restaverse.com/",
          logo_path: "resta.jpeg",
          duration: "Aug 2024 - Present",
          location: "Mumbai, Maharashtra",
          description: `Developed ORM Emailer – Built a Python-based PDF generator that extracts data from the database and creates structured reports to help clients
visualize their reviews and complaints.Worked across multiple features of the company’s product, contributing to FastAPI backend development, React frontend UI/logic, and Python
scripting.Implemented API and web scraping – Scraped client reviews from Swiggy, Zomato, and other aggregators to enhance data-driven insights.Built and optimized scalable systems using AWS services (EC2, Load Balancer, RDS, S3, Route 53, CloudFront, IAM).`,
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer Intern",
          company: "Restaverse Pvt. Ltd.",
          company_url: "https://www.restaverse.com/",
          logo_path: "resta.jpeg",
          duration: "Mar 2024 - Aug 2024",
          location: "Mumbai, Maharashtra",
          description: `Developed an Emailer system in Python, consolidating five AWS Lambda functions into three efficient Python scripts to improve maintainability
and performance.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "Django Developer Intern",
          company: "Xircls Pvt. Ltd.",
          company_url: "https://www.xircls.com/",
          logo_path: "xircls.jpeg",
          duration: "Aug 2024 - Present",
          location: "Mumbai, Maharashtra",
          description: `Created multiple APIs for Shopify apps to enable detailed store analytics, leading to improved decision-making and user satisfaction.`,
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create Python(FastApi and Django) projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet since they were made for a private organization.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "my2.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Project Connector",
      url: "https://github.com/King0311/Project_connector",
      description:
        "A collaborative portal enhancing project team communication and coordination by providing a centralized space for students and guides to share updates, progress, and summaries, thereby reducing the need for in-person meetings.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Django",
          iconifyClass: "simple-icons:django",
        },
        {
          name: "My Sql",
          iconifyClass: "logos-mysql",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/King0311/Project_connector",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "1",
      name: "FITHO",
      url: "https://github.com/King0311/FITHO",
      description:
        "Personalized fitness app offering custom exercise plans by utilizing user data to tailor workouts for specific goals and body traits",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Django",
          iconifyClass: "simple-icons:django",
        },
        {
          name: "My Sql",
          iconifyClass: "logos-mysql",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/King0311/FITHO",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "2",
      name: "Find Your Job",
      url: "https://github.com/King0311/find_your_job_django",
      description:
        "Find your Job is a platform connecting job seekers and recruiters through intelligent matching algorithms for a personalized and efficient job search process.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Django",
          iconifyClass: "simple-icons:django",
        },
        {
          name: "My Sql",
          iconifyClass: "logos-mysql",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/King0311/find_your_job_django",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "3",
      name: "Vendor Management System",
      url: "https://github.com/King0311/VenderManagment",
      description:
        "A Vendor Management App simplifies supplier onboarding, contract tracking, and performance monitoring. It centralizes procurement, invoicing, and compliance, ensuring cost efficiency and seamless collaboration.",
      languages: [
        {
          name: "Django",
          iconifyClass: "simple-icons:django",
        },
        {
          name: "My Sql",
          iconifyClass: "logos-mysql",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/King0311/VenderManagment",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "4",
      name: "News Website",
      url: "none",
      description:
        "An app that show latest news from all around the world. It has a simple and clean UI/UX.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
