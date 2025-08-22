import React from 'react'
import ProjectCard from "../components/ProjectCard.tsx";
const Projects: React.FC = () => {
  return (
    <div className="container w-full">
        {/*Title*/}
        <h3 className="text-4xl font-bold text-center">Projects</h3>

        <div className="flex flex-wrap flex-col items-center justify-between w-full mt-6">

        {/* project-1 */}
            <ProjectCard
                title="Learning Management System"
                link="https://github.com/ravinder77/lms"
                description=" A robust and scalable online education platform built with TypeScript,
                Node.js, Express, and Turborepo, designed to simplify course management
                and enhance learning experiences. The system supports role-based user access
                for students, instructors, and admins, allowing seamless creation,
                organization, and delivery of courses and lessons. Features include progress tracking,
                quizzes, content uploads, and notifications, all built on a clean,
                API-driven architecture. With a modular design and fully typed backend,
                this LMS ensures maintainability, performance, and flexibility,
                making it suitable for both small educational setups and enterprise-level e-learning platforms."

            />
        {/*    Project - 2*/}
            <ProjectCard
                title="SkillMatch"
                link="https://github.com/ravinder77/skillmatch"
                description="SkillMatch is a job-matching platform built with Python FastAPI,
                 featuring a job board, resume parsing, and job parsing services. It leverages natural
                  language processing to extract skills and experience from resumes and standardize
                  job descriptions, enabling a smart matching engine that connects candidates with the
                   most relevant opportunities. With its scalable backend and structured data handling,
                    SkillMatch streamlines recruitment by reducing manual effort and improving the accuracy
                     of talent-to-job alignment."
            />
        </div>

    </div>
  )
}

export default Projects
