import React from 'react';
import { useContactForm } from './useContactForm';
import { useToast } from '../../molecules/Toast/useToast';
import { CopyIcon } from '../../atoms/icons';

interface ContactFormProps {
    email: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ email }) => {
    const { formState, isSubmitting, handleChange, handleSubmit } = useContactForm(email);
    const { notify } = useToast();

    return (
        <section className="group p-5 flex flex-col md:flex-row md:justify-between md:gap-[9.375rem] items-center bg-transparent font-display w-full transition-all duration-300 hover:scale-[1.01] cursor-pointer">
            <div className="text-center md:text-left mb-7 md:ml-auto">
                <h2 className="text-[clamp(2.2rem,5vw,2.8rem)] font-bold mb-[0.625rem] text-text-base transition-colors">Got a project?</h2>
                <h3 className="text-accent text-[2rem] mb-[1.25rem] font-bold">Lets Talk!</h3>
                <p className="text-text-base text-[1.13rem] transition-colors">
                    {email}
                    <button
                        id="copy-email"
                        className="ml-2 cursor-pointer hover:text-accent transition-colors inline-flex items-center align-middle"
                        aria-label="Copy email to clipboard"
                        onClick={() => {
                            navigator.clipboard.writeText(email)
                                .then(() => notify('Email copied to clipboard!', 'success'))
                                .catch(() => notify('Failed to copy email', 'error'));
                        }}
                    >
                        <CopyIcon />
                    </button>
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                noValidate
                className="glassmorphism w-full md:max-w-[50%] lg:max-w-[28.125rem] rounded-[0.625rem] p-4 lg:p-[1.875rem] md:mr-auto md:my-[6.25rem] shadow-sm transition-all duration-300"
            >
                <div className="mb-6">
                    <label htmlFor="name" className="block text-text-base font-bold mb-2 ml-1">Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        autoComplete="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full p-[0.625rem] rounded-[0.3125rem] bg-transparent border border-border-base text-text-base outline-none placeholder:text-text-muted/50 focus:border-accent transition-colors"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-text-base font-bold mb-2 ml-1">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your email"
                        autoComplete="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full p-[0.625rem] rounded-[0.3125rem] bg-transparent border border-border-base text-text-base outline-none placeholder:text-text-muted/50 focus:border-accent transition-colors"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-text-base font-bold mb-2 ml-1">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={4}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full p-[0.625rem] rounded-[0.3125rem] bg-transparent border border-border-base text-text-base h-[6.25rem] resize-none outline-none placeholder:text-text-muted/50 focus:border-accent transition-colors"
                    ></textarea>
                </div>
                <div className="flex">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-[1.25rem] py-[0.625rem] font-bold text-[1.13rem] bg-accent text-black rounded-[0.3125rem] 
                       hover:bg-accent-hover hover:scale-105 transition-all ml-auto relative top-[1.25rem] shadow-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form >
        </section >
    );
};

export default ContactForm;
