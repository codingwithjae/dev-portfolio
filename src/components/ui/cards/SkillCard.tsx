import type React from 'react';
import { useEffect, useState } from 'react';
import { technologyIconMapping } from '../TechnologyIconList/TechnologyIconList';

interface Skill {
	name: string;
	experience: string;
	logo?: string;
}

interface SkillCardProps {
	category: string;
	skills: Skill[];
}

const useSkillTicker = (itemCount: number, intervalMs: number = 2400) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovering, setIsHovering] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(true);

	useEffect(() => {
		if (isHovering || itemCount <= 1) return;

		const interval = setInterval(() => {
			setIsTransitioning(true);
			setCurrentIndex((prev) => prev + 1);
		}, intervalMs);

		return () => clearInterval(interval);
	}, [isHovering, itemCount, intervalMs]);

	useEffect(() => {
		if (currentIndex === itemCount - 1) {
			const timeout = setTimeout(() => {
				setIsTransitioning(false);
				setCurrentIndex(0);
			}, 500);
			return () => clearTimeout(timeout);
		}
		return undefined;
	}, [currentIndex, itemCount]);

	return { currentIndex, isHovering, setIsHovering, isTransitioning };
};

export const SkillCard: React.FC<SkillCardProps> = ({ category, skills }) => {
	const { currentIndex, setIsHovering, isTransitioning } = useSkillTicker(skills.length);

	return (
		<section
			className="skill-card-container glassmorphism-interactive relative p-5 rounded-[1.25rem] overflow-hidden min-w-[17.5rem] h-[11.25rem] flex flex-col justify-center group"
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			aria-label={`${category} skills`}
		>
			<h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] font-bold text-text-base opacity-[0.05] whitespace-nowrap font-display select-none pointer-events-none">
				{category}
			</h2>

			<div className="relative w-full h-full overflow-hidden z-10">
				<div
					className="ticker-content flex flex-col h-full"
					style={{
						transform: `translateY(-${currentIndex * 100}%)`,
						transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.85, 0, 0.15, 1)' : 'none',
					}}
				>
					{skills.map((skill, index) => {
						const Icon = skill.logo
							? technologyIconMapping[skill.logo] || technologyIconMapping[skill.name]
							: technologyIconMapping[skill.name];

						return (
							<div
								key={`${skill.name}-${index}`}
								className="skill-item w-full h-full flex flex-col justify-center items-center shrink-0 px-7 text-center cursor-pointer hover:scale-105 transition-transform duration-300"
							>
								<div className="flex items-center gap-3 mb-2 justify-center">
									{Icon && (
										<Icon className="text-[1.5rem] text-text-muted group-hover:text-accent-hover-text transition-colors" />
									)}
									<h3 className="text-[2.2rem] font-bold font-display leading-tight text-text-base">{skill.name}</h3>
								</div>
								<p className="font-sans text-text-muted text-[1rem] tracking-wide uppercase">{skill.experience}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default SkillCard;
