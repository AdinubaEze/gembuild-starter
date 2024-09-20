import {
  FaTools,
  FaCheckCircle,
  FaClock,
  FaDraftingCompass,
  FaUserFriends,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaHome,
  FaBuilding,
} from "react-icons/fa";
import {
  user1,
  user2,
  user3,
  user4,
} from "./assets";

export const navigations = [
  {
    label: "Home",
    to: "header",
  },
  {
    label: "Services",
    to: "services",
  },
  {
    label: "About Us",
    to: "about",
  },
  {
    label: "Reviews",
    to: "testimonials",
  },
  {
    label: "Contact Us",
    to: "contact",
  },
];

export const keypoints = [
  {
    title: "Expert Craftsmanship",
    description:"Every detail matters. We ensure high-quality workmanship in every phase of construction."
  },
  {
    title: "On-Time, Within Budget",
    description:"Efficiency is key. We deliver your projects on schedule, without unexpected costs."
  },
  {
    title: "Innovative Solutions",
    description:"We use the latest technologies and sustainable materials to build for the future."
  },
  {
    title: "Client-Centered Approach",
    description:"We listen to your needs and tailor our services to exceed your expectations."
  },
];

export const whyChooseUs = [
  {
    title: "Unmatched Quality",
    icon: <FaCheckCircle />,
    description: "Craftsmanship guaranteed",
  },
  {
    title: "Timely Delivery",
    icon: <FaClock />,
    description: "Projects completed on schedule",
  },
  {
    title: "Innovative Designs",
    icon: <FaDraftingCompass />,
    description: "Creative and modern solutions",
  },
  {
    title: "Focused Service",
    icon: <FaUserFriends />,
    description: "Prioritizing client satisfaction always",
  },
];

export const services = [
  {
    title: "Residential Construction",
    icon: <FaHome />,
    description: `Building modern, high-quality homes tailored to your vision.`,
  },
  {
    title: "Commercial Projects",
    icon: <FaBuilding />,
    description: `Developing functional, innovative commercial spaces for businesses.`,
  },
  {
    title: "Renovation & Remodeling",
    icon: <FaTools />,
    description: `Transforming existing spaces with expert renovation and design.`,
  },
];

export const testimonials = [
  {
    name: "Folake Adekunle",
    image: user1,
    review: `The team at Confix exceeded our expectations. Their attention to detail and professionalism made our home renovation a smooth and enjoyable process.`,
  },
  {
    name: "Jide Akinwale",
    image: user2,
    review: `From start to finish, the project was handled with incredible skill and efficiency. I highly recommend Confix for any construction needs.`,
  },
  {
    name: "Chiamaka Nwachukwu",
    image: user3,
    review: `Working with Confix was a fantastic experience. Their team was professional, creative, and committed to delivering exactly what we envisioned.`,
  },
  {
    name: "Tunde Balogun",
    image: user4,
    review: `Exceptional service and quality workmanship! Confix transformed our industrial space efficiently and effectively. They are true professionals.`,
  },
];

export const footer = [
  {
    title: "Company",
    routes: [
      {
        name: "About Us",
        href: "#about",
      },
      {
        name: "Careers",
        href: "#",
      },
      {
        name: "Contact Us",
        href: "#contact",
      },
    ],
  },
  {
    title: "Services",
    routes: [
      {
        name: "Residential Construction",
        href: "#",
      },
      {
        name: "Commercial Projects",
        href: "#",
      },
      {
        name: "Renovation & Remodeling",
        href: "#",
      },
      {
        name: "Project Management",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    routes: [
      {
        name: "Case Studies",
        href: "#",
      },
      {
        name: "FAQs",
        href: "#",
      },
      {
        name: "Privacy Policy",
        href: "#",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];
