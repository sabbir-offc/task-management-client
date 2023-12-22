// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const userDemographicsAndBenefits = [
  {
    category: "Developers",
    benefits: [
      "Streamline project management for coding tasks.",
      "Visualize task progress through drag-and-drop status updates.",
      "Efficient collaboration with team members.",
      "Prioritize and organize coding assignments effectively.",
    ],
  },
  {
    category: "Corporate Professionals",
    benefits: [
      "Manage and coordinate team projects effortlessly.",
      "Track individual and team task progress in real-time.",
      "Enhance communication and collaboration within departments.",
      "Utilize a user-friendly interface for efficient task management.",
    ],
  },
  {
    category: "Bankers and Financial Professionals",
    benefits: [
      "Organize financial tasks and deadlines systematically.",
      "Easily track and manage ongoing financial projects.",
      "Collaborate with team members on financial planning.",
      "Stay organized with a centralized platform for task management.",
    ],
  },
  {
    category: "Students and Aspiring Professionals",
    benefits: [
      "Plan and organize academic assignments efficiently.",
      "Track progress on personal and group projects.",
      "Learn effective task management skills for future careers.",
      "Access a user-friendly platform for academic task tracking.",
    ],
  },
  {
    category: "Entrepreneurs",
    benefits: [
      "Manage multiple projects and tasks simultaneously.",
      "Track progress and deadlines for business-related activities.",
      "Collaborate with team members and freelancers seamlessly.",
      "Utilize a visual representation of project status for better decision-making.",
    ],
  },
  {
    category: "Researchers and Academics",
    benefits: [
      "Organize and track research tasks and deadlines.",
      "Collaborate with fellow researchers on shared projects.",
      "Efficiently manage academic tasks and priorities.",
      "Utilize a visual task board for streamlined research workflows.",
    ],
  },
  {
    category: "Technology Enthusiasts",
    benefits: [
      "Track personal tech projects and experiments effectively.",
      "Collaborate with others on technology-related tasks.",
      "Stay organized with a visual representation of task status.",
      "Enhance personal productivity in tech-related endeavors.",
    ],
  },
];

const Slider = () => {
  return (
    <>
      <div className="border-l-4 px-2 border-l-purple-600 py-1 rounded-l-lg">
        <h1 className="text-2xl md:text-4xl">
          Who/Whom can be benefit usign our website?
        </h1>
      </div>
      <div className="my-5">
        <Swiper navigation={true} modules={[Navigation]} style={{ padding: 5 }}>
          {userDemographicsAndBenefits.map((i) => (
            <SwiperSlide key={i.category}>
              <div className="flex flex-col justify-center items-center flex-wrap px-5">
                <h1 className="text-2xl md:text-5xl mb-3 text-purple-600 font-bold">
                  {i.category}
                </h1>

                <ul className="list-disc">
                  {i.benefits.map((benefit) => (
                    <li className="text-lg" key={benefit}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;

/* 

1. Developers
Benefits:

Streamline project management for coding tasks.
Visualize task progress through drag-and-drop status updates.
Efficient collaboration with team members.
Prioritize and organize coding assignments effectively.
2. Corporate Professionals
Benefits:

Manage and coordinate team projects effortlessly.
Track individual and team task progress in real-time.
Enhance communication and collaboration within departments.
Utilize a user-friendly interface for efficient task management.
3. Bankers and Financial Professionals
Benefits:

Organize financial tasks and deadlines systematically.
Easily track and manage ongoing financial projects.
Collaborate with team members on financial planning.
Stay organized with a centralized platform for task management.
4. Students and Aspiring Professionals
Benefits:

Plan and organize academic assignments efficiently.
Track progress on personal and group projects.
Learn effective task management skills for future careers.
Access a user-friendly platform for academic task tracking.
5. Entrepreneurs
Benefits:

Manage multiple projects and tasks simultaneously.
Track progress and deadlines for business-related activities.
Collaborate with team members and freelancers seamlessly.
Utilize a visual representation of project status for better decision-making.
6. Researchers and Academics
Benefits:

Organize and track research tasks and deadlines.
Collaborate with fellow researchers on shared projects.
Efficiently manage academic tasks and priorities.
Utilize a visual task board for streamlined research workflows.
7. Technology Enthusiasts
Benefits:

Track personal tech projects and experiments effectively.
Collaborate with others on technology-related tasks.
Stay organized with a visual representation of task status.
Enhance personal productivity in tech-related endeavors.*/
