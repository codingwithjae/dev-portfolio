import type React from 'react';
import { useCallback, useEffect, useId, useRef, useState } from 'react';

interface FaqItemProps {
	question: string;
	answer: string;
}

const useAccordion = (initialState = false) => {
	const [isOpen, setIsOpen] = useState(initialState);
	const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
	return { isOpen, toggle, setIsOpen };
};

export const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
	const { isOpen, toggle } = useAccordion();
	const id = useId();
	const panelId = `faq-panel-${id}`;
	const triggerId = `faq-trigger-${id}`;
	const contentRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState<number | string>(0);

	useEffect(() => {
		if (isOpen && contentRef.current) {
			setHeight(contentRef.current.scrollHeight);
		} else {
			setHeight(0);
		}
	}, [isOpen]);

	return (
		<div className="faq-item group py-[0.9375rem] mx-[0.9375rem] border-b border-border-base transition-colors duration-300">
			<button
				id={triggerId}
				type="button"
				onClick={toggle}
				aria-expanded={isOpen}
				aria-controls={panelId}
				className="faq-trigger group/trigger w-full font-bold cursor-pointer flex items-center justify-between text-[18px] text-left text-text-base font-display outline-none select-none bg-transparent border-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
			>
				<span className="group-hover/trigger:text-heading-accent transition-colors duration-300">
					{question}
				</span>
				<span
					className={`relative w-[2.1875rem] h-[2.1875rem] flex items-center justify-center rounded-full border border-border-base transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-[#d6ea2e] border-[#d6ea2e]' : 'bg-transparent'}`}
					aria-hidden="true"
				>
					<div className={`relative w-3 h-3 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'rotate-180' : ''}`}>
						{/* Horizontal line */}
						<div className={`absolute top-1/2 left-0 w-full h-[3px] -translate-y-1/2 rounded-full transition-colors duration-300 ${isOpen ? 'bg-black' : 'bg-text-base'}`}></div>
						{/* Vertical line (hides when open) */}
						<div className={`absolute top-0 left-1/2 w-[3px] h-full -translate-x-1/2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'rotate-90 scale-0 bg-black' : 'bg-text-base'}`}></div>
					</div>
				</span>
			</button>

			<section
				id={panelId}
				aria-labelledby={triggerId}
				ref={contentRef}
				style={{
					maxHeight: isOpen ? `${height}px` : '0px',
					opacity: isOpen ? 1 : 0,
				}}
				className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
			>
				<div className="pt-[0.9375rem] pb-[0.625rem]">
					<p className="leading-[1.5625rem] text-text-muted text-left text-[18px] font-display transition-colors">
						{answer}
					</p>
				</div>
			</section>
		</div>
	);
};

export default FaqItem;
