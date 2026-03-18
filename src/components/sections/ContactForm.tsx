import emailjs from "@emailjs/browser";
import React, { type ChangeEvent, type FormEvent, useCallback, useEffect, useState } from "react";
import { toast } from "../ui/Toast/toast";

interface FormState {
	name: string;
	email: string;
	message: string;
}

export interface ContactFormLabels {
	heading: string;
	subheading: string;
	copyEmailAriaLabel: string;
	copyEmailSuccess: string;
	copyEmailError: string;
	nameLabel: string;
	namePlaceholder: string;
	emailLabel: string;
	emailPlaceholder: string;
	messageLabel: string;
	messagePlaceholder: string;
	submitButton: string;
	sendingButton: string;
	configurationError: string;
	nameRequired: string;
	emailRequired: string;
	emailInvalid: string;
	messageRequired: string;
	submissionSuccess: string;
	submissionError: string;
	unexpectedError: string;
}

const defaultContactFormLabels: ContactFormLabels = {
	heading: "Got a project?",
	subheading: "Lets Talk!",
	copyEmailAriaLabel: "Copy email to clipboard",
	copyEmailSuccess: "Email copied to clipboard!",
	copyEmailError: "Failed to copy email",
	nameLabel: "Name",
	namePlaceholder: "Your Name",
	emailLabel: "Email",
	emailPlaceholder: "Your email",
	messageLabel: "Message",
	messagePlaceholder: "Your message",
	submitButton: "Send Message",
	sendingButton: "Sending...",
	configurationError: "Configuration error. Please try again later.",
	nameRequired: "Please enter your name",
	emailRequired: "Please enter your email",
	emailInvalid: "Please enter a valid email address",
	messageRequired: "Please enter your message",
	submissionSuccess: "Thanks for your message!",
	submissionError: "Something went wrong. Please try again.",
	unexpectedError: "Failed to send message. Please try again.",
};

const getErrorMessage = (error: unknown, labels: ContactFormLabels): string => {
	if (typeof error === "object" && error !== null) {
		const maybeError = error as { text?: unknown; message?: unknown };
		if (typeof maybeError.text === "string") return maybeError.text;
		if (typeof maybeError.message === "string") return maybeError.message;
	}
	return labels.unexpectedError;
};

const useContactForm = (labels: ContactFormLabels) => {
	const [formState, setFormState] = useState<FormState>({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		const publicKey = import.meta.env.PUBLIC_EMAILJS_API_KEY;
		if (publicKey) {
			emailjs.init(publicKey);
		}
	}, []);

	const handleChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		setFormState((previousState: FormState) => ({
			...previousState,
			[name]: value,
		}));
	}, []);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
		const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;

		if (!serviceId || !templateId) {
			console.error("EmailJS service ID or template ID is missing");
			toast(labels.configurationError, "error");
			return;
		}

		if (!formState.name.trim()) {
			toast(labels.nameRequired, "error");
			return;
		}
		if (!formState.email.trim()) {
			toast(labels.emailRequired, "error");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
			toast(labels.emailInvalid, "error");
			return;
		}
		if (!formState.message.trim()) {
			toast(labels.messageRequired, "error");
			return;
		}

		setIsSubmitting(true);

		try {
			const templateParams = {
				from_name: formState.name,
				from_email: formState.email,
				message: formState.message,
				to_name: "Johander",
			};

			const publicKey = import.meta.env.PUBLIC_EMAILJS_API_KEY;
			const result = await emailjs.send(serviceId, templateId, templateParams, {
				publicKey: publicKey,
			});

			if (result.status === 200) {
				toast(labels.submissionSuccess, "success");
				setFormState({ name: "", email: "", message: "" });
			} else {
				toast(labels.submissionError, "error");
			}
		} catch (error: unknown) {
			console.error("Submission Error:", error);
			const errorMessage = getErrorMessage(error, labels);
			toast(errorMessage, "error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return { formState, isSubmitting, handleChange, handleSubmit };
};

interface ContactFormProps {
	email: string;
	labels?: ContactFormLabels;
}

export const ContactForm: React.FC<ContactFormProps> = ({
	email,
	labels = defaultContactFormLabels,
}) => {
	const { formState, isSubmitting, handleChange, handleSubmit } = useContactForm(labels);

	return (
		<section className="group p-5 flex flex-col md:flex-row md:justify-between md:gap-[9.375rem] items-center bg-transparent font-display w-full transition-all duration-300 hover:scale-[1.01] cursor-pointer">
			<div className="text-center md:text-left mb-7 md:ml-auto">
				<h2 className="text-[clamp(2.2rem,5vw,2.8rem)] font-bold mb-[0.625rem] text-text-base transition-colors">
					{labels.heading}
				</h2>
				<h3 className="text-heading-accent text-[2rem] mb-[1.25rem] font-bold">
					{labels.subheading}
				</h3>
				<p className="text-text-base text-[1.13rem] transition-colors flex items-center justify-center md:justify-start gap-3 w-full">
					<span className="truncate max-w-[calc(100vw-100px)] sm:max-w-none">{email}</span>
					<button
						id="copy-email"
						type="button"
						className="cursor-pointer hover:text-link-hover transition-colors inline-flex items-center"
						aria-label={labels.copyEmailAriaLabel}
						onClick={() => {
							navigator.clipboard
								.writeText(email)
								.then(() => toast(labels.copyEmailSuccess, "success"))
								.catch(() => toast(labels.copyEmailError, "error"));
						}}
					>
						<svg
							className="w-5 h-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={1.5}
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
							/>
						</svg>
					</button>
				</p>
			</div>

			<form
				onSubmit={handleSubmit}
				noValidate
				className="glassmorphism w-full md:max-w-[50%] lg:max-w-[28.125rem] rounded-[0.625rem] p-4 lg:p-[1.875rem] md:mr-auto shadow-sm transition-all duration-300"
			>
				<div className="mb-6">
					<label htmlFor="name" className="block text-text-base font-bold mb-2 ml-1">
						{labels.nameLabel}
					</label>
					<input
						id="name"
						type="text"
						name="name"
						placeholder={labels.namePlaceholder}
						autoComplete="name"
						required
						value={formState.name}
						onChange={handleChange}
						className="w-full p-[0.625rem] rounded-[0.3125rem] bg-transparent border border-border-base text-text-base outline-none focus:ring-0 focus:border-[var(--color-input-focus-border)] placeholder:text-text-muted/50 transition-colors"
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="email" className="block text-text-base font-bold mb-2 ml-1">
						{labels.emailLabel}
					</label>
					<input
						id="email"
						type="email"
						name="email"
						placeholder={labels.emailPlaceholder}
						autoComplete="email"
						required
						value={formState.email}
						onChange={handleChange}
						className="w-full p-[0.625rem] rounded-[0.3125rem] bg-transparent border border-border-base text-text-base outline-none focus:ring-0 focus:border-[var(--color-input-focus-border)] placeholder:text-text-muted/50 transition-colors"
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="message" className="block text-text-base font-bold mb-2 ml-1">
						{labels.messageLabel}
					</label>
					<textarea
						id="message"
						name="message"
						placeholder={labels.messagePlaceholder}
						rows={4}
						required
						value={formState.message}
						onChange={handleChange}
						className="w-full p-[0.625rem] bg-transparent border border-border-base text-text-base h-[6.25rem] resize-none outline-none focus:ring-0 focus:border-[var(--color-input-focus-border)] placeholder:text-text-muted/50 transition-colors"
					></textarea>
				</div>
				<div className="flex pt-4 md:pt-6">
					<button
						type="submit"
						disabled={isSubmitting}
						className={`px-[1.5rem] py-[0.75rem] font-bold text-[1.13rem] bg-accent-hover text-black rounded-[0.5rem] hover:scale-105 transition-all ml-auto shadow-[0_4px_14px_0_rgba(214,234,46,0.39)] ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
					>
						{isSubmitting ? labels.sendingButton : labels.submitButton}
					</button>
				</div>
			</form>
		</section>
	);
};

export default ContactForm;
