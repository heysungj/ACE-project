import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Needham ACE <br />
        1132 Highland Ave, Needham, MA 02494
      </p>
      <div>
        <FaFacebookF />
        <BsInstagram />
        <FaYoutube />
      </div>
    </footer>
  );
}
