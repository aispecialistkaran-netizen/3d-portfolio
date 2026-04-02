import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/karanverma-95944a219/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — karanverma-95944a219
              </a>
            </p>
            <p>
              <a
                href="mailto:karanverma005@hotmail.com"
                data-cursor="disable"
              >
                karanverma005@hotmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              MCA, Vivekananda Institute of Professional Studies — 2017–2020
            </p>
            <p>
              BCA, Jagannath International Management School, Vasant Kunj —
              2014–2017
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/karanverma-95944a219/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:karanverma005@hotmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Portfolio of <br /> <span>Karan Verma</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
