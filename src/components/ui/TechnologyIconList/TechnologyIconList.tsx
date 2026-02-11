import type { IconType } from 'react-icons';
import { FaCheckCircle, FaSearch } from 'react-icons/fa';
import {
	FaCss3Alt,
	FaFigma,
	FaGitAlt,
	FaHtml5,
	FaJs,
	FaKey,
	FaNodeJs,
	FaPython,
	FaReact,
	FaRocket,
	FaServer,
	FaVial,
} from 'react-icons/fa6';
import { RiSeoFill } from 'react-icons/ri';
import {
	SiExpress,
	SiFramer,
	SiPostgresql,
	SiPrisma,
	SiSanity,
	SiStorybook,
	SiTailwindcss,
	SiTypescript,
	SiVitest,
} from 'react-icons/si';

/**
 * Mapping of technology names to their respective React Icons.
 * Includes common aliases and direct icon names for flexibility.
 */
export const technologyIconMapping: Record<string, IconType> = {
	React: FaReact,
	HTML: FaHtml5,
	CSS: FaCss3Alt,
	JavaScript: FaJs,
	TypeScript: SiTypescript,
	Figma: FaFigma,
	'Tailwind CSS': SiTailwindcss,
	Tailwind: SiTailwindcss,
	Framer: SiFramer,
	'Node JS': FaNodeJs,
	'Node.js': FaNodeJs,
	Express: SiExpress,
	Prisma: SiPrisma,
	PostgreSQL: SiPostgresql,
	Postgres: SiPostgresql,
	'Git/Github': FaGitAlt,
	'Git/GitHub': FaGitAlt,
	Vitest: SiVitest,
	Sanity: SiSanity,
	SEO: FaSearch,
	Zod: FaCheckCircle,
	JWT: FaKey,
	'REST APIs': FaServer,
	Testing: FaVial,
	Deployments: FaRocket,
	Python: FaPython,
	Storybook: SiStorybook,
	FaReact: FaReact,
	FaHtml5: FaHtml5,
	FaCss3Alt: FaCss3Alt,
	FaJs: FaJs,
	SiTypescript: SiTypescript,
	FaFigma: FaFigma,
	SiTailwindcss: SiTailwindcss,
	SiFramer: SiFramer,
	FaNodeJs: FaNodeJs,
	SiExpress: SiExpress,
	SiPrisma: SiPrisma,
	SiPostgresql: SiPostgresql,
	FaGitAlt: FaGitAlt,
	SiVitest: SiVitest,
	FaCheckCircle: FaCheckCircle,
	FaKey: FaKey,
	FaServer: FaServer,
	FaVial: FaVial,
	FaRocket: FaRocket,
	FaPython: FaPython,
	FaSearch: FaSearch,
	SiPostgres: SiPostgresql,
	SiSanity: SiSanity,
	RiSeoFill: RiSeoFill,
};

interface TechnologyIconListProps {
	technologies: string;
}

/**
 * Renders a list of technology icons based on a provided tech stack string.
 * Technologies should be separated by a forward slash (/).
 */
export const TechnologyIconList: React.FC<TechnologyIconListProps> = ({ technologies }) => {
	if (!technologies) return null;

	const techArray = technologies.split('/').map((t) => t.trim());

	return (
		<div className="flex flex-wrap gap-2 mt-2">
			{techArray.map((tech) => {
				const Icon = technologyIconMapping[tech];
				return (
					<div
						key={tech}
						className="flex items-center gap-1 px-2 py-1 bg-background-base/50 border border-border-base/30 rounded-md text-[0.75rem] font-medium text-text-muted hover:text-accent-hover-text transition-colors"
						title={tech}
					>
						{Icon && <Icon className="text-[0.9rem]" />}
						<span>{tech}</span>
					</div>
				);
			})}
		</div>
	);
};
