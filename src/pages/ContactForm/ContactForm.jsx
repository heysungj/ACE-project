import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const [disable, setDisable] = useState(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function onChange() {
    setDisable(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
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
          <input type="text" class="form-control" />
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
          />
        </div>
        <div
          class="form-group"
          style={{ marginLeft: "25px", marginRight: "25px", marginTop: "10px" }}
        >
          <label for="exampleFormControlInput1">Phone</label>
          <input type="tel" class="form-control" />
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
          ></textarea>

          <ReCAPTCHA
            class="form-group"
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
            style={{ width: "70%", marginTop: "10px" }}
          />
          <input
            className="form-group btn btn-primary"
            style={{ marginBottom: "25px", marginTop: "10px" }}
            value="Send"
            disabled={disable}
          />
        </div>
      </form>
    </div>
  );
}
