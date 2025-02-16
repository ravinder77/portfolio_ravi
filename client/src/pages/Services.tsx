import React from 'react'



import {
  CodeBracketIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
  
} from "@heroicons/react/24/outline";


const services = [
  {
    title: "Frontend Development",
    description: "Building responsive and user-friendly interfaces with Nextjs, React, and TailwindCSS.",

    icon: <CodeBracketIcon className="w-10 h-10 text-primaryYellow" />,

  },
  {
    title: "Backend Development",
    description: "Creating robust APIs and server-side solutions with Express and Nodejs.",

    icon: <ServerIcon className="w-10 h-10 text-primaryYellow" />,

  },
  {
    title: "Databases",
    description: "Designing and managing scalable databases with PostgreSQL and MongoDB.",

    icon: <ComputerDesktopIcon className="w-10 h-10 text-primaryYellow" />,

  },

  {
    title: "Responsive Design",
    description: "Ensuring seamless user experiences across all devices with mobile-first design.",

    icon: <DevicePhoneMobileIcon className="w-10 h-10 text-primaryYellow" />,

  },
  {
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code that follows best practices and design patterns.",

    icon: <DocumentTextIcon className="w-10 h-10 text-primaryYellow" />,

  },
  {
    title: "Client Support",
    description: "Providing technical assistance and guidance to clients, addressing their needs and concerns in a timely manner .",

    icon: <UserGroupIcon className="w-10 h-10 text-primaryYellow" />,

  },
];


const Services: React.FC = () => {
  return (

        <div className="min-h-screen  py-10 px-5 text-olivelight ">
      <h1 className="text-4xl font-bold text-center mb-16">
        Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`  rounded-xl border border-primaryYellow shadow-sm py-2 px-2 hover:shadow-xl `}
          >
            <div className="flex items-center flex-col gap-4 mb-4 ">
              {service.icon}
              <h2 className="text-xl font-semibold ">
                {service.title}
              </h2>
            </div>
            <p className=" text-center mb-4">{service.description}</p>
         
          </div>
        ))}
      </div>
    </div>

  )
}

export default Services



