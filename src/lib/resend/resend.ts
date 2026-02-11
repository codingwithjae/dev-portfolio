import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export interface EmailSubmission {
	name: string;
	email: string;
	message: string;
}

/**
 * Sends a contact form email using Resend.
 * This is a server-side utility intended for use in API routes or server components.
 */
export async function sendContactEmail(submission: EmailSubmission) {
	const { name, email, message } = submission;

	try {
		const { data, error } = await resend.emails.send({
			from: 'Portfolio Contact <onboarding@resend.dev>',
			to: ['connect@johandercampos.com'],
			subject: `New message from ${name}`,
			html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
			replyTo: email,
		});

		if (error) {
			return { success: false, error: error.message };
		}

		return {
			success: true,
			message: 'Email sent successfully',
			data,
		};
	} catch (error: unknown) {
		const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
		return { success: false, error: errorMessage };
	}
}
