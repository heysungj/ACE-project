import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";

export default function ContactForm() {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // use navigate
  console.log(window.innerWidth);

  function onChange() {
    setDisable(false);
  }

  //   update formData while typing
  function handleChange(e) {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
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

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    // show success message
    toastr.success("Message Sent Successfully");
  }

  // toastr.options = {
  //   "closeButton": false,
  //   "debug": false,
  //   "newestOnTop": false,
  //   "progressBar": false,
  //   "positionClass": "toast-top-center",
  //   "preventDuplicates": true,
  //   "onclick": null,
  //   "showDuration": "50",
  //   "hideDuration": "1000",
  //   "timeOut": "1000",
  //   "extendedTimeOut": "1000",
  //   "showEasing": "swing",
  //   "hideEasing": "linear",
  //   "showMethod": "fadeIn",
  //   "hideMethod": "fadeOut"
  // }
  return (
    <div
      class="cotainer border contactFormContainer"
      style={{
        marginTop: "50px",
        width: "90%",
        backgroundColor: "bisque",
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
          <label
            for="exampleFormControlInput1"
            style={{ width: "100%", marginBottom: "5px", textAlign: "justify" }}
          >
            Name <span style={{ color: "red" }}> *</span>
          </label>
          <input
            type="text"
            class="form-control"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>
        <div
          class="form-group"
          style={{ marginLeft: "25px", marginRight: "25px", marginTop: "10px" }}
        >
          <label
            for="exampleFormControlInput1"
            style={{ width: "100%", marginBottom: "5px", textAlign: "justify" }}
          >
            Email<span style={{ color: "red" }}> *</span>
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>
        <div
          class="form-group"
          style={{ marginLeft: "25px", marginRight: "25px", marginTop: "10px" }}
        >
          <label
            for="exampleFormControlInput1"
            style={{ width: "100%", marginBottom: "5px", textAlign: "justify" }}
          >
            Phone <span style={{ color: "red" }}> *</span>
          </label>
          <input
            type="tel"
            class="form-control"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            required
          />
        </div>
        <div
          class="form-group"
          style={{ marginLeft: "25px", marginRight: "25px", marginTop: "10px" }}
        >
          <label
            for="exampleFormControlTextarea1"
            style={{ width: "100%", marginBottom: "5px", textAlign: "justify" }}
          >
            {" "}
            Message <span style={{ color: "red" }}> *</span>
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            name="message"
            onChange={handleChange}
            value={formData.message}
            required
          ></textarea>

          <ReCAPTCHA
            class="form-group"
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            onChange={onChange}
            size={window.innerWidth < 500 ? "compact" : "normal"}
            style={{ marginTop: "10px" }}
          />
        </div>
        <input
          className="form-group btn btn-primary"
          style={{ marginBottom: "25px", marginTop: "10px" }}
          value="Send"
          type="submit"
          disabled={disable}
        />
      </form>
    </div>
  );
}
