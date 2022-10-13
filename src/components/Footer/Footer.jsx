import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footerContent">
        Needham ACE <br />
        1132 Highland Ave, Needham, MA 02494
      </p>
      <div>
        <Link to="/">
          <FaFacebookF className="iconBtn" />
        </Link>
        <Link to="/">
          <BsInstagram className="iconBtn" />
        </Link>
        <Link to="/">
          <FaYoutube className="iconBtn" />
        </Link>
      </div>
    </footer>
  );
}
