import { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from './useToast';

/**
 * Shape of the contact form data.
 */
interface FormState {
    /** The sender's name */
    name: string;
    /** The sender's email address */
    email: string;
    /** The message body */
    message: string;
}

/**
 * Return type definition for the useContactForm hook.
 */
interface UseContactFormReturn {
    /** Current values of the form fields */
    formState: FormState;
    /** Loading state indicating if the form is currently being sent */
    isSubmitting: boolean;
    /** Standard change handler for text inputs and textareas */
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /** Form submission handler with built-in validation and EmailJS integration */
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

/**
 * Hook to manage a production-ready contact form.
 * Provides state management, validation, and integration with EmailJS for delivery.
 * 
 * @param initialEmail - The recipient email address (stored in Sanity) to pass to the email service.
 * @returns Form state and handlers for input and submission.
 * 
 * @example
 * ```tsx
 * const { formState, isSubmitting, handleChange, handleSubmit } = useContactForm("me@example.com");
 * return (
 *   <form onSubmit={handleSubmit}>
 *     <input name="name" value={formState.name} onChange={handleChange} />
 *     <button disabled={isSubmitting}>Send</button>
 *   </form>
 * );
 * ```
 */
export const useContactForm = (initialEmail: string): UseContactFormReturn => {
    const { notify } = useToast();
    const [formState, setFormState] = useState<FormState>({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    /**
     * Updates form state based on input name and value.
     */
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    }, []);

    /**
     * Validates and submits the form data.
     * Triggers toast notifications for errors or success.
     */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // --- Basic Validation ---
        if (!formState.name.trim()) {
            notify('Please enter your name', 'error');
            return;
        }

        if (!formState.email.trim()) {
            notify('Please enter your email', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formState.email)) {
            notify('Please enter a valid email address', 'error');
            return;
        }

        if (!formState.message.trim()) {
            notify('Please enter your message', 'error');
            return;
        }

        setIsSubmitting(true);

        try {
            const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.PUBLIC_EMAILJS_API_KEY;

            if (serviceId && templateId && publicKey) {
                await emailjs.send(
                    serviceId,
                    templateId,
                    {
                        from_name: formState.name,
                        from_email: formState.email,
                        message: formState.message,
                        to_email: initialEmail,
                    },
                    publicKey
                );
                notify('Thanks for your message!', 'success');
                setFormState({ name: '', email: '', message: '' });
            } else {
                // Fallback for development if keys are missing
                console.log('Form submission (Dev Mode):', formState);
                notify('Development: Form submitted locally', 'success');
                setFormState({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            notify('Failed to send message. Please try again.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return { formState, isSubmitting, handleChange, handleSubmit };
};
