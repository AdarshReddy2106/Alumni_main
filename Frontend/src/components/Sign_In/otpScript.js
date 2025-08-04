const BASE_URL = "https://alumni-website-v7pq.onrender.com"
    // window.location.hostname === "localhost" ?
    // "http://localhost:3000" :
    // "https://your-production-url.com";


export function initializeOTPSignIn({

    emailInputRef,
    otpInputRef,
    sendOtpBtnRef,
    loginBtnRef,
    resendBtnRef,
    otpSectionRef,
    successMessageRef,
    formRef,
    setToken,
    onSuccessRedirect = () => {
        window.close();

    },
    onEmailNotFound = () => {},
}) {


    let currentEmail = "";
    let resendTimer = null;
    let attempts = 0;

    function showLoader(button) {
        button.classList.add("loading");
        button.disabled = true;
    }

    function hideLoader(button) {
        button.classList.remove("loading");
        button.disabled = false;
    }

    async function sendOTP() {
        const email = emailInputRef.current.value.trim();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError("emailError", "Enter a valid email address");
            return;
        }
        showLoader(sendOtpBtnRef.current);
        try {
            const emailCheck = await fetch(`${BASE_URL}/check-email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await emailCheck.json();
            if (data.exists === false) {
                onEmailNotFound();
                showError("emailError", "Email not registered");
                hideLoader(sendOtpBtnRef.current);
                console.log("Email not registered:", email);
                return;
            }

            const res = await fetch(`${BASE_URL}/send-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                currentEmail = email;
                otpSectionRef.current.classList.add("active");
                sendOtpBtnRef.current.textContent = "OTP Sent ✓";
                sendOtpBtnRef.current.disabled = true;
                emailInputRef.current.disabled = true;
                startResendTimer();
            } else {
                showError("emailError", "Failed to send OTP. Try again.");
            }
        } catch (err) {
            showError("emailError", "Network error.");
        }
        hideLoader(sendOtpBtnRef.current);

    }

    async function verifyOTP() {
        const otp = otpInputRef.current.value.trim();
        if (otp.length !== 6) {
            showError("otpError", "Enter a 6-digit OTP");
            return;
        }

        showLoader(loginBtnRef.current);
        try {
            const res = await fetch(
                `${BASE_URL}/verify-otp `, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: currentEmail, otp }),
                }
            );
            const result = await res.json();

            if (result.success) {
                setToken(true); 
                formRef.current.style.display = "none";
                successMessageRef.current.classList.add("active");
                let counter = 2;
                const successText = successMessageRef.current.querySelector("p");

                const interval = setInterval(() => {
                    counter--;
                    if (counter > 0) {
                        successText.textContent = `Redirecting in ${counter} seconds...`;
                    } else {
                        clearInterval(interval);
                        resetForm();
                        window.location.href = "/"; // Redirect to home page
                    }
                }, 1000);
            } else {
                attempts++;
                if (attempts >= 3) {
                    showError("otpError", "Too many failed attempts. Request OTP again.");
                    resetForm();
                } else {
                    showError("otpError", `Invalid OTP. ${3 - attempts} attempts left.`);
                }
            }
        } catch (err) {
            showError("otpError", "Network error");
        }
        hideLoader(loginBtnRef.current);
    }

    function resendOTP() {
        if (resendBtnRef.current.disabled) return;
        attempts = 0;
        otpInputRef.current.value = "";
        sendOTP();
    }

    function startResendTimer() {
        let seconds = 30;
        resendBtnRef.current.disabled = true;
        resendBtnRef.current.textContent = `Resend OTP(${seconds}s)`;

        resendTimer = setInterval(() => {
            seconds--;
            if (seconds <= 0) {
                clearInterval(resendTimer);
                resendBtnRef.current.disabled = false;
                resendBtnRef.current.textContent = "Resend OTP";
            } else {
                resendBtnRef.current.textContent = `
                    Resend OTP(${seconds }
                        s)
                    `;
            }
        }, 1000);
    }

    function resetForm() {
        currentEmail = "";
        attempts = 0;
        emailInputRef.current.disabled = false;
        emailInputRef.current.value = "";
        otpInputRef.current.value = "";
        sendOtpBtnRef.current.textContent = "Send OTP";
        sendOtpBtnRef.current.disabled = false;
        otpSectionRef.current.classList.remove("active");
        resendBtnRef.current.disabled = false;
        resendBtnRef.current.textContent = "Resend OTP";
    }

    function showError(id, message) {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = message;
            el.classList.add("active");
        }
    }

    function clearError(id) {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = "";
            el.classList.remove("active");
        }
    }

    // Event Listeners
    if (!sendOtpBtnRef.current.dataset.bound) {
        sendOtpBtnRef.current.addEventListener("click", sendOTP);
        sendOtpBtnRef.current.dataset.bound = true;
    }
    if (!loginBtnRef.current.dataset.bound) {
        loginBtnRef.current.addEventListener("click", verifyOTP);
        loginBtnRef.current.dataset.bound = true;
    }

    if (!resendBtnRef.current.dataset.bound) {
        resendBtnRef.current.addEventListener("click", resendOTP);
        resendBtnRef.current.dataset.bound = true;
    }

    emailInputRef.current.addEventListener("input", () =>
        clearError("emailError")
    );
    otpInputRef.current.addEventListener("input", () => clearError("otpError"));
}