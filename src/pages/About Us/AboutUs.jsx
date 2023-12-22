import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>About | Tame Task</title>
      </Helmet>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">About Tame Task</h1>
        <p className="mb-6">
          Welcome to Tame Task, where we believe in simplifying task management
          to enhance your productivity and efficiency. Our platform is designed
          to empower individuals and teams in organizing, tracking, and
          completing tasks with ease.
        </p>

        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="mb-6">
          At Tame Task, our mission is to provide a user-friendly and intuitive
          task management experience. We aim to create a central hub where users
          from various backgrounds can streamline their workflows, collaborate
          seamlessly, and achieve their goals efficiently.
        </p>

        <h2 className="text-2xl font-bold mb-2">Key Features</h2>
        <p className="mb-4">
          Tame Task comes equipped with powerful features that cater to the
          diverse needs of our users:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Effortless task creation, editing, and deletion.</li>
          <li>
            Intuitive drag-and-drop functionality to update task statuses.
          </li>
          <li>Real-time collaboration for teams and individuals.</li>
          <li>Customizable task boards to suit your workflow.</li>
          <li>
            Deadline reminders and notifications for timely task completion.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Who We Serve</h2>
        <p className="mb-6">
          Tame Task is utilized by a wide range of individuals, including
          developers, corporate professionals, bankers, students, entrepreneurs,
          researchers, and technology enthusiasts. Our platform adapts to your
          unique needs, providing a tailored experience for each user category.
        </p>

        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="mb-6">
          We value your feedback and suggestions. If you have any questions or
          would like to get in touch with us, please feel free to contact us at{" "}
          <Link to="/contact" className="text-blue-500">
            Contact Page
          </Link>
        </p>

        <p>
          Thank you for choosing Tame Task as your task management companion. We
          look forward to helping you tame your tasks and achieve new heights of
          productivity!
        </p>
      </div>
    </>
  );
};

export default AboutUsPage;
