import "../styles/contact.css";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_nmklml8', // remplacer par votre Service ID
        'template_rzt0d08', // remplacer par votre Template ID
        data,
        'VieaPYXHXcfidLGrX' // remplacer par votre Public Key
      );
      alert('Message sent successfully!');
      reset();
    } catch (error) {
      alert('An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="flex flex-row mx-32 mb-36">
      <div className="self-stretch w-6/12 flex flex-col justify-between">
        <div>
          <h2 className="highlight-text-small text-black text-4xl font-bold mb-4">
            Contact
          </h2>
          <p className="text-sm w-10/12">I would be happy to discuss a project with you, address any questions you may have, or collaborate with you in any way possible.</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="infos bg-white px-4 py-2 shadow-input w-[300px] rounded-lg mb-1 flex items-center gap-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-black w-4" />
            <p>evaorlandini.pro@gmail.com</p>
          </div>

          <div className="infos bg-white px-4 py-2 shadow-input w-[300px] rounded-lg mb-1 flex items-center gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-black w-4" />
            <p>+33 . 6 . 35. 11. 13 . 05</p>
          </div>

          <div className="infos bg-white px-4 py-2 shadow-input w-[300px] rounded-lg mb-1 flex items-center gap-3">
            <FontAwesomeIcon icon={faLocationDot} className="text-black w-4" />
            <p>Bali, Indonesia</p>
          </div>
        </div>
      </div>

      <div className="w-6/12 border-[1px] border-primary-100 rounded-md px-8 py-4">
        <h3 className="text-black text-lg text-center font-bold mb-4">Let's get in touch</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label htmlFor="Contact" className="font-medium">Contact information</label>
          <div className="flex flex-row gap-4 my-2">
            <input
              {...register("firstName", { required: "First name is required" })}
              type="text"
              id="firstName"
              placeholder="First Name"
              className="w-full px-4 py-2 rounded-md shadow-input"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName.message}</span>
            )}
            <input
              {...register("lastName", { required: "Last name is required" })}
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-2 rounded-md shadow-input"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName.message}</span>
            )}
          </div>

          <div >
            <input
              {...register("email", {
                required: false,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 my-2 rounded-md shadow-input"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>

          <div>
            <input
              {...register("phone", {
                required: false,
                pattern: {
                  value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                  message: "Invalid phone number"
                }
              })}
              type="tel"
              id="phone"
              placeholder="Phone number"
              className="w-full px-4 py-2 my-2 rounded-md shadow-input"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="font-medium mt-4">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              rows="5"
              placeholder="Hello, I'm interested in..."
              className="w-full px-4 py-2 my-2 rounded-md shadow-input focus:border-[1px] focus:border-primary-100 focus:shadow-none focus:bg-[#F6F6F6] focus:outline-none"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black font-bold text-white py-3 my-2 rounded-md shadow-input"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
