import "../../styles/scss/style.scss";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_nmklml8", // remplacer par votre Service ID
        "template_rzt0d08", // remplacer par votre Template ID
        data,
        "VieaPYXHXcfidLGrX" // remplacer par votre Public Key
      );
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      alert("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container container--contact">
        <div className="contact-info">
          <div className="contact-info__header">
            <h2 className="contact-info__title heading--h2 title__highlight title__highlight--sm">
              Contact
            </h2>
            <p className="contact-info__description paragraph paragraph--md">
              I would be happy to discuss a project with you, address any
              questions you may have, or collaborate with you in any way
              possible.
            </p>
          </div>

          <div className="contact-info__details">
            <div className="contact-info__item animation--move-right">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="contact-info__icon"
              />
              <p className="contact-info__text paragraph paragraph--md">
                evaorlandini.pro@gmail.com
              </p>
            </div>

            <div className="contact-info__item animation--move-right">
              <FontAwesomeIcon icon={faPhone} className="contact-info__icon" />
              <p className="contact-info__text paragraph paragraph--md">
                +33 . 6 . 35. 11. 13 . 05
              </p>
            </div>

            <div className="contact-info__item animation--move-right">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="contact-info__icon"
              />
              <p className="contact-info__text paragraph paragraph--md">
                Bali, Indonesia
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3 className="contact-form__title">Let's get in touch</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <label htmlFor="Contact" className="form__label">
              Contact information
            </label>
            <div className="form__group">
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                type="text"
                id="firstName"
                placeholder="First Name"
                className="form__input"
              />
              {errors.firstName && (
                <span className="form__input--error">
                  {errors.firstName.message}
                </span>
              )}
              <input
                {...register("lastName", { required: "Last name is required" })}
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="form__input"
              />
              {errors.lastName && (
                <span className="form__input--error">
                  {errors.lastName.message}
                </span>
              )}
            </div>

            <div>
              <input
                {...register("email", {
                  required: false,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                id="email"
                placeholder="Email"
                className="form__input"
              />
              {errors.email && (
                <span className="form__input--error">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <input
                {...register("phone", {
                  required: false,
                  pattern: {
                    value:
                      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                    message: "Invalid phone number",
                  },
                })}
                type="tel"
                id="phone"
                placeholder="Phone number"
                className="form__input mt-3"
              />
              {errors.phone && (
                <span className="form__input--error">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <label htmlFor="message" className="form__label mt-4">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              rows="5"
              placeholder="Hello, I'm interested in..."
              className="form__input my-3"
            ></textarea>
            {errors.message && (
              <span className="form__input--error">
                {errors.message.message}
              </span>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn--secondary btn--w-full"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
