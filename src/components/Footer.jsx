import { FaDiscord, FaGithub } from "react-icons/fa";
import "./styles/footer.css"; // Assuming you have a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="d-flex mt-5">
          <p className="flex-grow-1 text-white">
            Copyright &copy; 2024 | Design By Salif Kante
          </p>
          <div className="hstack gap-3">
            <a
              className="text-decoration-none"
              href="https://discord.com/users/695396084280852511"
            >
              <FaDiscord className="icon text-white" size={32} />
            </a>
            <a
              className="text-decoration-none"
              href="https://github.com/SalifKante?tab=repositories"
            >
              <FaGithub className="icon text-white" size={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
