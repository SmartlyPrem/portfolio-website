import { links } from "@/config";

export const navItems = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "iShop - e-Commerce Website",
    des: "I created an e-commerce website as my final coaching project, earning the highest marks for it. This project showcased my skills and marked a proud achievement.",
    img: "/ishop.webp",
    iconLists: ["/re.svg", "/tail.svg", "/express-js-icon.svg", "node-js-icon.svg",  "/mongodb-icon.svg"],
    link: "https://ishopeshopping.vercel.app/",
    sourceCode: "https://github.com/SmartlyPrem/E-commerce",
  },
  {
    id: 2,
    title: "Meesho Clone Website",
    des: "I created a Meesho clone website as a project during my coaching and earned an A+ grade for my outstanding performance and dedication to web development.",
    img: "/meesho.webp",
    iconLists: ["/re.svg", "/tail.svg", "/express-js-icon.svg", "node-js-icon.svg",  "/mongodb-icon.svg"],
    link: "https://github.com/SmartlyPrem/meesho-clone",
    sourceCode: "https://github.com/SmartlyPrem/meesho-clone",
  },
  {
    id: 3,
    title: "Bakery Shop Website",
    des: "This is my fifth website, fully responsive for mobile and desktop, built using HTML, CSS, and JavaScript. It's my first experience creating a mobile-friendly website.",
    img: "/bakery.webp",
    iconLists: ["/html-icon.svg", "/css-icon.svg", "/javascript-icon.svg",],
    link: "https://smartlyprem.github.io/fifth-website/",
    sourceCode: "https://github.com/SmartlyPrem/fifth-website",
  },
  {
    id: 4,
    title: "YellowKitchen a Responcive Website",
    des: "I created a responsive website using CSS and Bootstrap, featuring a menu bar with toggle logic via JavaScript. This project enhanced my Bootstrap CSS skills and responsiveness expertise.",
    img: "/yelkitch.webp",
    iconLists: ["/html-icon.svg", "/css-icon.svg", "/javascript-icon.svg",],
    link: "https://smartlyprem.github.io/figma-responsive/",
    sourceCode: "https://github.com/SmartlyPrem/figma-responsive",
  },
  {
    id: 5,
    title: "Netflix Clone Website",
    des: "I created a Netflix clone using React and Tailwind CSS, enhancing my frontend development skills and deepening my understanding of React technology through hands-on experience in this project.",
    img: "/netflix.webp",
    iconLists: ["/re.svg", "/tail.svg", "/javascript-icon.svg"],
    link: "https://github.com/SmartlyPrem/netflix-clone/",
    sourceCode: "https://github.com/SmartlyPrem/netflix-clone/",
  },
  {
    id: 6,
    title: "Live Movie Searching App",
    des: "I created this project using JavaScript and learned to fetch APIs. The project retrieves data through API calls, enhancing my skills in API integration and data handling.",
    img: "/movieapp.webp",
    iconLists: ["/html-icon.svg", "/css-icon.svg", "/javascript-icon.svg"],
    link: "https://smartlyprem.github.io/Weather-Search-App-by-js/movie-serch.html",
    sourceCode: "https://github.com/SmartlyPrem/Weather-Search-App-by-js",
  },
] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Rakesh Kumawat",
    title: "Director of MVM School",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
     name: "Rakesh Kumawat",
    title: "Director of MVM School",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
     name: "Rakesh Kumawat",
    title: "Director of MVM School",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
     name: "Rakesh Kumawat",
    title: "Director of MVM School",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
     name: "Rakesh Kumawat",
    title: "Director of MVM School",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    desc: "After completing my coaching, I joined DevDevGo.com as a remote web developer, enhancing my skills through diverse projects before leaving to pursue personal growth and advance my web development career.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelancing, Self-Employee",
    desc: "For the past few months, I’ve been freelancing and it’s been an incredible journey, providing me with valuable experience, new skills, and the opportunity to grow professionally.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/SmartlyPrem?tab=repositories",
  },
  {
    name: "Instagram",
    img: "/ig-instagram-icon.svg",
    link: "https://www.instagram.com/prem_jatol/",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/prem-jatol",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
