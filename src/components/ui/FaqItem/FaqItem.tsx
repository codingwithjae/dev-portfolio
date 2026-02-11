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
				className="faq-trigger w-full font-bold cursor-pointer flex items-center justify-between text-[18px] text-left text-text-base font-display outline-none select-none bg-transparent border-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
			>
				{question}
				<span
					className="relative w-[2.1875rem] h-[2.1875rem] flex items-center justify-center rounded-full border border-border-base bg-primary transition-colors duration-300 flex-shrink-0"
					aria-hidden="true"
				>
					{/* Plus/Minus icons with smooth spin transitions */}
					<svg
						className={`absolute w-3 h-3 transition-all duration-500 ease-out ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'}`}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2.5}
					>
						<title>{isOpen ? 'Close FAQ' : 'Open FAQ'}</title>
						<path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
					</svg>
					<svg
						className={`absolute w-3 h-3 transition-all duration-500 ease-out ${!isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-50'}`}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2.5}
					>
						<title>{isOpen ? 'Close FAQ' : 'Open FAQ'}</title>
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
					</svg>
				</span>
			</button>

			<section
				id={panelId}
				aria-labelledby={triggerId}
				ref={contentRef}
				style={{
					height: isOpen ? `${height}px` : '0px',
					opacity: isOpen ? 1 : 0,
				}}
				className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
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
