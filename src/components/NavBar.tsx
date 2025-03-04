import { useState } from "react";
import { Logo, Punch, Globe } from "./icons";
import Search from "./Search";
import Button from "./common/Button";

const textMenus = [
  { name: "WHO WE ARE", href: "" },
  { name: "WORK WITH US", href: "" },
  { name: "NEWS", href: "" },
];

const NavBar = () => {
  const [logoColor, setLogoColor] = useState("#ffffff");

  const handleMouseEnter = () => {
    setLogoColor("#ff0000");
  };

  const handleMouseLeave = () => {
    setLogoColor("#ffffff");
  };

  return (
  );
};

export default NavBar;
