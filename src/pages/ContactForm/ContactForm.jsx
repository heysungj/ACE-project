import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div
      className="cotainer border"
      style={{ marginTop: "50px", width: "50%", backgroundImage: "url()" }}
    >
      <h1>Contact Us</h1>
      <form>
        <label>Name</label>
        <input type="text" name="name" />

        <label>Email</label>
        <input type="email" name="email" />

        <label>Message</label>
        <textarea type="email" name="message" rows="4" />
      </form>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_RECAPTURE_SITE_KEY}
        onChange={onChange}
      />
    </div>
  );
}
