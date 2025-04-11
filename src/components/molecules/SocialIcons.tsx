import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex  gap-2 justify-evenly items-center">
      <a
        href="https://www.linkedin.com/in/azraellandres/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-darkblue text-white p-2  rounded hover:bg-yellow transition"
      >
        <FaLinkedinIn className="w-4 h-4" />
      </a>
      <a
        href="https://github.com/AzraeLandres"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-darkblue text-white p-2 rounded hover:bg-yellow transition"
      >
        <FaGithub className="w-4 h-4" />
      </a>
      <a
        href="../../assets/cv.pdf"
        download
        className="bg-darkblue text-white p-2 rounded hover:bg-yellow transition"
      >
        <FaDownload className="w-4 h-4" />
      </a>
    </div>
  );
};

export default SocialIcons;
