import React from "react";
import image11 from "../assets/images/image11.jpg";
import image12 from "../assets/images/image12.jpg";
import image13 from "../assets/images/image13.jpg";
import image14 from "../assets/images/image14.jpg";

const team = [
  { 
    name: "Md Asad Ali Haider", 
    role: "Full Stack Developer", 
    imgSrc: image11, 
    description: "Passionate about building scalable web applications and exploring new technologies.",
    linkedIn: "https://www.linkedin.com/in/md-asad-ali-haidar-7aab43199/"
  },
  { 
    name: "Bishal Bhattacharjee", 
    role: "Full Stack Developer", 
    imgSrc: image14, 
    description: "Driven by a love for coding and creating intuitive user experiences. with competitive coding skills.",
    linkedIn: "https://www.linkedin.com/in/bishal-bhattacharjee-805769232/"
  },
  { 
    name: "Aditya Shaw", 
    role: "Frontend Developer", 
    imgSrc: image12, 
    description: "Specializes in crafting visually stunning and responsive web designs.",
    linkedIn: "https://www.linkedin.com/in/aditya-shaw-216171224/"
  },
  { 
    name: "Md Amir Khan", 
    role: "Frontend Developer", 
    imgSrc: image13, 
    description: "Enthusiastic about modern JavaScript frameworks and clean UI development.",
    linkedIn: "https://www.linkedin.com/in/md-amir-khan-a0849a236/"
  },
];

const ContactUs = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Meet the dedicated team behind our success!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {team.map((member, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt={member.name}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={member.imgSrc}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">{member.name}</h2>
                  <h3 className="text-gray-500 mb-3">{member.role}</h3>
                  <p className="mb-4">{member.description}</p>
                  <span className="inline-flex">
                    {/* LinkedIn Icon */}
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                      
                        <path d="M19 0h-14C4.447 0 4 0.447 4 1v22c0 .553.447 1 1 1h14c.553 0 1-.447 1-1V1c0-.553-.447-1-1-1zm-7 18h-3v-7h3v7zm-1.5-8.167c-.823 0-1.5-.677-1.5-1.5 0-.823.677-1.5 1.5-1.5s1.5.677 1.5 1.5c0 .823-.677 1.5-1.5 1.5zm7.5 8.167h-3v-4.5c0-2.406-3-2.225-3 0v4.5h-3V9h3v1.5c0 3 5 3.332 5-1.5V9h3v9.833z"></path>
                      </svg>
                    </a>
                    {/* GitHub Icon */}
                    <a
                      href={`https://github.com/${member.name.split(' ').join('').toLowerCase()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-gray-500"
                      aria-label={`${member.name} GitHub`}
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.28 3.44 9.8 8.19 11.39.6.11.82-.26.82-.58v-2.1c-3.33.72-4.03-1.59-4.03-1.59-.55-1.42-1.35-1.79-1.35-1.79-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26.92 1.58 2.41 1.13 2.99.86 1.44-1.02.6-2.74.23-3.22C9.16 16.78 7.58 14.54 7.58 12c0-2.51 2.07-4.58 4.58-4.58 2.51 0 4.58 2.07 4.58 4.58 0 2.54-1.58 4.78-4.42 5.92-.47.26-.86.73-.86 1.34v2.06c0 .33.22.69.83.58C20.56 21.8 24 17.28 24 12c0-6.63-5.37-12-12-12z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
