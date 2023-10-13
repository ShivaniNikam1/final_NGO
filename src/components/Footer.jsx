import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import "../pages/Home.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" srcset="" />
          </Link>
          <p>
            We believe that positive change is achieved through collective
            efforts. Together, we can build a better world. Join us in the
            journey of giving and connecting for a brighter tomorrow.
          </p>
          <div className="footer_socials">
            <a href="https://linkedin.com/">
              <FaLinkedinIn />
            </a>
            <a href="https://facebook.com/">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/">
              <BsInstagram />
            </a>
            <a href="https://twitter.com/">
              <FaXTwitter />
            </a>
          </div>
        </article>

        <article>
          <h4>Services</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/allngos">All NGO's</Link>
        </article>

        <article>
          <h4>Company</h4>
          <Link to="/about">About us</Link>
          <Link to="/home">Blog</Link>
          <Link to="/allngos">Partnership</Link>
          <Link to="/allngos">Career</Link>
        </article>

        <article>
          <h4>Let us Help us</h4>
          <Link to="/about">Phone: 7977818072</Link>
          <Link to="/home">shivani1710@gmail.com</Link>
          <Link to="/allngos">Your Account</Link>
          <Link to="/allngos">Your Volunteership</Link>
          <Link to="/allngos">Your Donation</Link>
        </article>
      </div>

      <div className="footer__copyright">
        <small>2023 NGOConnect Team &copy; All Right Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
