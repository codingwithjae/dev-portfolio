export type ToastType = "success" | "error";

export interface ToastEventDetail {
	message: string;
	type: ToastType;
}

export const toast = (message: string, type: ToastType = "success") => {
	const event = new CustomEvent<ToastEventDetail>("toast-notify", {
		detail: { message, type },
	});
	window.dispatchEvent(event);
};

declare global {
	interface Window {
		triggerToast: typeof toast;
	}
}

if (typeof window !== "undefined") {
	window.triggerToast = toast;
}
