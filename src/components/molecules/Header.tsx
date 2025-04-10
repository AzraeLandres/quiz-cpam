import SocialIcons from "./SocialIcons";

const Header = () => {
  return (
    <header className="flex w-1/2 max-w-5xl  items-center justify-between ">
      <img src="./logoAz.svg" alt="logo azl " />
      <SocialIcons />
    </header>
  );
};
export default Header;
