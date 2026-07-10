import { useState, useEffect, useCallback } from "react";

const useRecaptchaV3 = () => {
	const [isRecaptchaReady, setIsRecaptchaReady] = useState(true);

	// console.log(isRecaptchaReady);

	useEffect(() => {
		if (window.grecaptcha) {
			setIsRecaptchaReady(true);
		} else {
			setIsRecaptchaReady(false);
			const script = document.createElement("script");
			script.src = `https://www.google.com/recaptcha/api.js?render=${
				import.meta.env.VITE_RECAPTCHA_CLIENTE
			}`;
			script.async = true;
			document.head.appendChild(script);
			script.onload = () => setIsRecaptchaReady(true);
		}
	}, []);

	const executeRecaptcha = useCallback(
		async (action) => {
			if (isRecaptchaReady && window.grecaptcha) {
				const rec = await window.grecaptcha.execute(
					import.meta.env.VITE_RECAPTCHA_CLIENTE,
					{ action },
				);
				return rec;
			}
			return null;
		},
		[isRecaptchaReady, window.grecaptcha],
	);

	return {
		executeRecaptcha,
	};
};

export default useRecaptchaV3;
