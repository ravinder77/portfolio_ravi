
interface ProjectProps {
    title: string;
    description: string;
    link?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, link }) => (
    <div className="w-full sm:w-4/5 p-6 transition flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-10">
        <h4 className="text-xl font-semibold mb-2 text-gray-300">
            {link ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-500"
                >
                    {title}
                </a>
            ) : (
                title
            )}
        </h4>
        <hr className="border-t border-gray-200" />
        <p className="text-gray-500 text-sm sm:w-3/5  leading-relaxed">{description}</p>
    </div>
);

export default ProjectCard;