

import React, { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from '../ui/Toast/toast';


interface FormState {
    name: string;
    email: string;
    message: string;
}

const useContactForm = (initialEmail: string) => {
    const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formState.name.trim()) { toast('Please enter your name', 'error'); return; }
        if (!formState.email.trim()) { toast('Please enter your email', 'error'); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) { toast('Please enter a valid email address', 'error'); return; }
        if (!formState.message.trim()) { toast('Please enter your message', 'error'); return; }

        setIsSubmitting(true);

        try {
            const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.PUBLIC_EMAILJS_API_KEY;

            if (serviceId && templateId && publicKey) {
                await emailjs.send(serviceId, templateId, {
                    from_name: formState.name,
                    from_email: formState.email,
                    message: formState.message,
                    to_email: initialEmail,
                }, publicKey);
                toast('Thanks for your message!', 'success');
                setFormState({ name: '', email: '', message: '' });
            } else {
                console.log('Form submission (Dev Mode):', formState);
                toast('Development: Form submitted locally', 'success');
                setFormState({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            toast('Failed to send message. Please try again.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return { formState, isSubmitting, handleChange, handleSubmit };
};


interface ContactFormProps {
    email: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ email }) => {
    const { formState, isSubmitting, handleChange, handleSubmit } = useContactForm(email);

    return (
        <section className="group p-5 flex flex-col md:flex-row md:justify-between md:gap-[9.375rem] items-center bg-transparent font-display w-full transition-all duration-300 hover:scale-[1.01] cursor-pointer">
            <div className="text-center md:text-left mb-7 md:ml-auto">
                <h2 className="text-[clamp(2.2rem,5vw,2.8rem)] font-bold mb-[0.625rem] text-text-base transition-colors">Got a project?</h2>
                <h3 className="text-heading-accent text-[2rem] mb-[1.25rem] font-bold">Lets Talk!</h3>
                <p className="text-text-base text-[1.13rem] transition-colors">
                    {email}
                    <button
                        id="copy-email"
                        className="ml-2 cursor-pointer hover:text-link-hover transition-colors inline-flex items-center align-middle"
                        aria-label="Copy email to clipboard"
                        onClick={() => {
                            navigator.clipboard.writeText(email)
                                .then(() => toast('Email copied to clipboard!', 'success'))
                                .catch(() => toast('Failed to copy email', 'error'));
                        }}
                    >

                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </button>
                </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="glassmorphism w-full md:max-w-[50%] lg:max-w-[28.125rem] rounded-[0.625rem] p-4 lg:p-[1.875rem] md:mr-auto shadow-sm transition-all duration-300">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-text-base font-bold mb-2 ml-1">Name</label>
                    <input id="name" type="text" name="name" placeholder="Your Name" autoComplete="name" required value={formState.name} onChange={handleChange} className="w-full p-[0.625rem] rounded-[0.3125rem] bg-transparent border border-border-base text-text-base outline-none placeholder:text-text-muted/50 focus:border-accent transition-colors" />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-text-base font-bold mb-2 ml-1">Email</label>
                    <input id="email" type="email" name="email" placeholder="Your email" autoComplete="email" required value={formState.email} onChange={handleChange} className="w-full p-[0.625rem] rounded-[0.3125rem] bg-transparent border border-border-base text-text-base outline-none placeholder:text-text-muted/50 focus:border-accent transition-colors" />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-text-base font-bold mb-2 ml-1">Message</label>
                    <textarea id="message" name="message" placeholder="Your message" rows={4} required value={formState.message} onChange={handleChange} className="w-full p-[0.625rem] rounded-[0.3125rem] bg-transparent border border-border-base text-text-base h-[6.25rem] resize-none outline-none placeholder:text-text-muted/50 focus:border-accent transition-colors"></textarea>
                </div>
                <div className="flex pt-4 md:pt-6">
                    <button type="submit" disabled={isSubmitting} className={`px-[1.5rem] py-[0.75rem] font-bold text-[1.13rem] bg-accent text-black rounded-[0.5rem] hover:bg-accent-hover hover:scale-105 transition-all ml-auto shadow-[0_4px_14px_0_rgba(214,234,46,0.39)] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
