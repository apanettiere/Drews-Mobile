import { BiMath } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";

import logo from "./assets/logo.png";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";

export const navlogo = [logo];

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "subjects",
    link: "Subjects",
  },
  {
    id: 4,
    href: "tutors",
    link: "Tutors",
  },
  {
    id: 5,
    href: "contact",
    link: "Contact",
  },
];

export const categories = [
  {
    id: 1,
    icon: <BiMath />,
    category: "Mathematics",
  },
  {
    id: 2,
    icon: <BsBook />,
    category: "Reading",
  },
  {
    id: 3,
    icon: <MdOutlineScience />,
    category: "Science",
  },
  {
    id: 4,
    icon: <BiCodeAlt />,
    category: "Coding",
  },
];

export const logos = [logo1, logo2, logo3, logo4];
