import SocialIcons from "./SocialIcons";

const Header = () => {
  return (
    <header className="flex md:w-1/2 max-w-5xl  w-full items-center justify-between px-10 md:px-2">
      <img src="./logoAz.svg" alt="logo azl " />
      <SocialIcons />
    </header>
  );
};
export default Header;
