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
        <a href="https://www.facebook.com/needham.ace/">
          <FaFacebookF className="iconBtn" />
        </a>
        <a href="https://www.instagram.com/needham.ace/">
          <BsInstagram className="iconBtn" />
        </a>
        <a href="https://www.youtube.com/@NeedhamACE">
          <FaYoutube className="iconBtn" />
        </a>
      </div>
    </footer>
  );
}
