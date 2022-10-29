import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function ContactForm() {
  const [disable, setDisable] = useState(true);

  console.log(window.innerWidth);
  function onChange() {
    setDisable(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div
      class="cotainer border contactFormContainer"
      style={{
        marginTop: "50px",
        width: "70%",
        backgroundImage:
          "url('https://img.freepik.com/free-vector/hand-drawn-world-children-s-day-background_23-2149111154.jpg?w=2000')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ marginTop: "25px" }}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div
          class="form-group"
          style={{ marginLeft: "25px", marginRight: "25px", marginTop: "10px" }}
        >
          <label for="exampleFormControlInput1">Name</label>
          <input type="text" class="form-control" name="name" required />
        </div>
        <div
          class="form-group"
          style={{ marginLeft: "25px", marginRight: "25px", marginTop: "10px" }}
        >
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
            required
          />
        </div>
        <div
          class="form-group"
          style={{ marginLeft: "25px", marginRight: "25px", marginTop: "10px" }}
        >
          <label for="exampleFormControlInput1">Phone</label>
          <input type="tel" class="form-control" name="phone" required />
        </div>
        <div
          class="form-group"
          style={{ marginLeft: "25px", marginRight: "25px", marginTop: "10px" }}
        >
          <label for="exampleFormControlTextarea1"> Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            name="message"
            required
          ></textarea>

          <ReCAPTCHA
            class="form-group"
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            onChange={onChange}
            size={window.innerWidth < 500 ? "compact" : "normal"}
            style={{ marginTop: "10px" }}
          />
          <input
            className="form-group btn btn-primary"
            style={{ marginBottom: "25px", marginTop: "10px" }}
            value="Send"
            type="submit"
            disabled={disable}
          />
        </div>
      </form>
    </div>
  );
}
