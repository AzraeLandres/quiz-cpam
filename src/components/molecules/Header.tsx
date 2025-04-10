import SocialIcons from "./SocialIcons";

const Header = () => {
  return (
    <header className="flex w-[80%] items-center justify-between p-4 ">
      <img src="./logoAz.svg" alt="logo azl " />
      <SocialIcons />
    </header>
  );
};
export default Header;
