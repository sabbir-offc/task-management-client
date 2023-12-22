import { useEffect } from "react";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    emailjs.init("rps7HsvPhdSnjADeo");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const templateParams = {
        to_email: e.target.userEmail.value,
        userName: e.target.userName.value,
        userEmail: e.target.userEmail.value,
        message: e.target.message.value,
      };

      await emailjs.send(
        "service_aod4p0x",
        "template_g06l8ij",
        templateParams,
        "rps7HsvPhdSnjADeo"
      );

      toast.success("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      toast.error("Error sending message. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

        <p className="text-base mb-4">
          Have questions or feedback? Reach out to us by filling out the form
          below.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <input
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Your Name"
                name="userName"
              />
            </div>

            <div>
              <input
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="email"
                placeholder="Your Email"
                name="userEmail"
              />
            </div>

            <div className="col-span-2">
              <textarea
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Message"
                rows="4"
                name="message"
              />
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
