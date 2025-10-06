import { HeaderStyle, Logo, Credits } from "./Header.styled";
import logoImg from "../../assets/BioSearch.png";

import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <HeaderStyle>
      <Logo href="/">
        <img src={logoImg} alt="logo" />
        BioSearch
      </Logo>
      <Credits
        target="_blank"
        href="https://github.com/raulcabralc/nasa-space-jampa-2025"
      >
        <FaGithub size={32} />
      </Credits>
    </HeaderStyle>
  );
}

export default Header;
