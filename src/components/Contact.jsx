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
    <div id="contact" className="flex flex-row max-md:flex-col max-md:mx-10 mx-32 mb-36">
      <div className="self-stretch w-6/12 max-md:w-full flex flex-col justify-between">
        <div>
          <h2 className="slideSide2 highlight-text-small text-text dark:text-text-dark text-4xl font-bold mb-4">
            Contact
          </h2>
          <p className="slideSide3 text-sm w-10/12 text-text max-md:text-sm dark:text-text-dark max-md:mb-8">I would be happy to discuss a project with you, address any questions you may have, or collaborate with you in any way possible.</p>
        </div>
        <div className="slideSide4 flex flex-col gap-y-4 max-md:mb-8">
          <div className="infos bg-white dark:bg-transparent dark:border-[1px] dark:border-primary-dark px-4 py-2 shadow-input w-[300px] max-md:w-[270px] rounded-lg mb-1 flex items-center gap-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-text w-4 dark:text-text-dark" />
            <p className="text-text max-md:text-sm dark:text-text-dark">evaorlandini.pro@gmail.com</p>
          </div>

          <div className="infos bg-white dark:bg-transparent dark:border-[1px] dark:border-primary-dark px-4 py-2 shadow-input w-[300px] max-md:w-[270px] rounded-lg mb-1 flex items-center gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-text w-4 dark:text-text-dark" />
            <p className="text-text max-md:text-sm dark:text-text-dark">+33 . 6 . 35. 11. 13 . 05</p>
          </div>

          <div className="infos bg-white dark:bg-transparent dark:border-[1px] dark:border-primary-dark px-4 py-2 shadow-input w-[300px] max-md:w-[270px] rounded-lg mb-1 flex items-center gap-3">
            <FontAwesomeIcon icon={faLocationDot} className="text-text w-4 dark:text-text-dark" />
            <p className="text-text max-md:text-sm dark:text-text-dark">Bali, Indonesia</p>
          </div>
        </div>
      </div>

      <div className="slideSide1 w-6/12 max-md:w-full border-[1px] border-primary-100 rounded-md px-8 py-4 dark:border-none dark:bg-gray-200">
        <h3 className="text-text text-lg text-center font-bold mb-4">Let's get in touch</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label htmlFor="Contact" className="font-medium text-text">Contact information</label>
          <div className="flex flex-row gap-4 my-2">
            <input
              {...register("firstName", { required: "First name is required" })}
              type="text"
              id="firstName"
              placeholder="First Name"
              className="w-full px-4 py-2 rounded-md shadow-input max-md:text-sm focus:border-[1px] focus:border-primary-100 dark:focus:border-primary-dark focus:shadow-none focus:bg-[#F6F6F6] focus:outline-none"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName.message}</span>
            )}
            <input
              {...register("lastName", { required: "Last name is required" })}
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-2 rounded-md shadow-input max-md:text-sm focus:border-[1px] focus:border-primary-100 dark:focus:border-primary-dark focus:shadow-none focus:bg-[#F6F6F6] focus:outline-none"
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
              className="w-full px-4 py-2 my-2 rounded-md shadow-input max-md:text-sm focus:border-[1px] focus:border-primary-100 dark:focus:border-primary-dark focus:shadow-none focus:bg-[#F6F6F6] focus:outline-none"
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
              className="w-full px-4 py-2 my-2 rounded-md shadow-input max-md:text-sm focus:border-[1px] focus:border-primary-100 dark:focus:border-primary-dark focus:shadow-none focus:bg-[#F6F6F6] focus:outline-none"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="font-medium mt-4 text-text">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              rows="5"
              placeholder="Hello, I'm interested in..."
              className="w-full px-4 py-2 my-2 rounded-md max-md:text-sm shadow-input focus:border-[1px] focus:border-primary-100 dark:focus:border-primary-dark focus:shadow-none focus:bg-[#F6F6F6] focus:outline-none"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-text hover:bg-primary dark:hover:bg-primary-dark font-bold text-white py-3 my-2 rounded-md shadow-input"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
