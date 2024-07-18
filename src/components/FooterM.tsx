import { FaXTwitter } from "react-icons/fa6";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";

export default function Footer11  (props)  {
  const { logo, logoDark, address, contact, columnLinks, socialMediaLinks, footerText, footerLinks } = {
    ...Footer11Defaults,
    ...props,
  };
  return (
    <footer className="px-[5%] pb-2">
      <div className="container">
        <div className="text-center md:text-start grid grid-cols-1 gap-x-[4vw] gap-y-12 border border-border-primary dark:border-myYellow p-8 md:gap-y-16 md:p-12 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4">
          <div>
            <div className="mb-6 md:mb-8 ">
              <a href={logo.url}>
                <img src={logo.src} alt={logo.alt} className="inline-block w-20 dark:hidden" />
                <img src={logoDark.src} alt={logoDark.alt} className="dark:inline-block w-20 hidden"/>
              </a>
            </div>
            <div className="mb-6 md:mb-8 ">
              <div>
                <p className="mb-1 text-sm font-semibold">{address.label}</p>
                <p className="mb-5 text-sm md:mb-6">{address.value}</p>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold">{contact.label}</p>
                <p className="flex flex-col text-sm underline decoration-black underline-offset-1 md:mb-6">
                  <a href={`https://wa.me/${+963948911648}`} target="_blank" rel="noopener noreferrer">
                    {contact.phone}
                  </a>
                  <a href={`mailto:${contact.email}`} className="focus-visible:outline-none">
                    {contact.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] md:items-start items-center md:justify-start justify-center gap-x-3 gap-y-0">
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url} className="focus-visible:outline-none">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 items-start gap-x-6 gap-y-10 sm:grid-cols-2 md:gap-x-8 md:gap-y-4">
            {columnLinks.map((column, index) => (
              <ul key={index}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="py-2 text-sm font-semibold">
                    <a href={link.url} className="focus-visible:outline-none">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">
            {footerText}
            <br />
            Develpoer, UI/UX:{' '}
            <a href={`https://wa.me/+963948911648`} target="_blank" rel="noopener noreferrer" className="text-myYellow">
              { ' '}Louay
            </a>
            {/* {' '}&{ ' '}
            <a href={`https://wa.me/+963936066472`} target="_blank" rel="noopener noreferrer" className="text-myYellow">
                    Khaola
                  </a> */}
          </p>
          <ul className="flex justify-between items-center gap-5 gap-y-4 text-sm  md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li key={index} className="underline text-center">
                <a href={link.url} className="focus-visible:outline-none">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

 const Footer11Defaults = {
  logo: {
    url: "#",
    src: "/images/logo-light.svg",
    alt: "Logo image",
  },
  logoDark: {
    url: "#",
    src: "/images/logo-dark.svg",
    alt: "Logo image",
  },
  address: {
    label: "Address:",
    value: "Tartuos, Syria",
  },
  contact: {
    label: "Contact:",
    phone: "00963948911648",
    email: "louaydeeb05@gmail.com",
  },
  columnLinks: [
    {
      links: [
        { title: "Link One", url: "#" },
        { title: "Link Two", url: "#" },
        { title: "Link Three", url: "#" },
        { title: "Link Four", url: "#" },
        { title: "Link Five", url: "#" },
      ],
    },
    {
      links: [
        { title: "Link Six", url: "#" },
        { title: "Link Seven", url: "#" },
        { title: "Link Eight", url: "#" },
        { title: "Link Nine", url: "#" },
        { title: "Link Ten", url: "#" },
      ],
    },
  ],
  socialMediaLinks: [
    { url: "#", icon: <BiLogoFacebookCircle className="size-6" /> },
    { url: "#", icon: <BiLogoInstagram className="size-6" /> },
    { url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
    { url: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
    { url: "#", icon: <BiLogoYoutube className="size-6" /> },
  ],
  footerText: "© 2024 Relume. All rights reserved. ",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};

// Footer11.displayName = "Footer11";
