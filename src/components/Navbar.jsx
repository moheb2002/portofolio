/* eslint-disable react/prop-types */
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/moheb-adel-a31167126?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    hoverColor: "hover:text-blue-600",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/moheb2002",
    hoverColor: "hover:text-gray-700",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/moheb.adel.soliman/",
    hoverColor: "hover:text-pink-500",
  },
];

const SocialLink = ({ icon, url, hoverColor }) => (
  <span
    className={`${hoverColor} cursor-pointer`}
    onClick={() => window.open(url)}
  >
    {icon}
  </span>
);

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="font-extrabold text-3xl pl-5">Moheb Adel</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {socialLinks.map((social, index) => (
          <SocialLink
            key={index}
            icon={social.icon}
            url={social.url}
            hoverColor={social.hoverColor}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
