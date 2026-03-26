import { useState } from "react";
import { Images } from "../../images/Images";
import Button from "../../components/buttons/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../context/AuthContext";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState({
        email: "",
        password: ""
    });
    const schema = yup.object().shape({
        email: yup
            .string()
            .email("Invalid email")
            .required("Email is required"),
        password: yup
            .string()
            .min(8, "At least 8 characters required")
            .matches(/\d/, "At least one number required")
            .required("Password is required"),
    });
    const handleLogin = async (data) => {
        try {
            const response = await axios.post(
                "https://b17q02g4-5051.asse.devtunnels.ms/rest2/0.1/login",
                {
                    email: data.email,
                    password: data.password,
                }
            );
            const res = response.data.message;
            console.log(res);

            login({
                accessToken: res.accessToken,
                refreshToken: res.refToken,
                user: { id: res.user_id },
            });

            setLoginError({ email: "", password: "" });
            navigate("/");

        } catch (error) {
            console.log("ERROR:", error);
            let errorMessage = "Something went wrong";
            if (error.response) {
                const status = error.response.status;

                if (status === 401 || status === 400) {
                    errorMessage = "Invalid email or password";
                }
                else if (status === 422) {
                    errorMessage = error.response.data?.message || "Validation error";
                }
                else if (status >= 500) {
                    errorMessage = "Server error. Please try again later";
                }
                else {
                    errorMessage = error.response.data?.message || "Login failed";
                }
            }
            else if (error.request) {
                errorMessage = "Network error. Check your internet connection";
            }
            else {
                errorMessage = error.message || "Unexpected error occurred";
            }
            setLoginError({
                email: errorMessage,
                password: errorMessage,
            });
        }
    };
    const {
        register,
        watch,
        handleSubmit,
        formState: { isValid: formIsValid, errors }
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    const password = watch("password");
    return (
        <div className='container-fluid'>
            <div className="login-container">
                <div className="login">
                    <div className="login-left" style={{
                        backgroundImage: "url('/assets/images/Login/Frame 2897.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}>
                        <div className="login-text">
                            <h1>Simplify <br />
                                management with <br />
                                our <span className="highlight">dashboard.
                                    <svg xmlns="http://www.w3.org/2000/svg" className="curve" viewBox="0 0 281 15" fill="none">
                                        <path d="M1.3002 12.7846C54.1335 4.11795 183.6 -8.01538 278.8 12.7846" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h1>
                            <p>Get complete control over operations, performance, and
                                business growth from one powerful panel.</p>
                        </div>
                    </div>

                    <div className="login-right">
                        <div className="login-right-head">
                            <img className="logo" src={Images.logo} alt="error" />
                            <h2>Login Your Account</h2>
                            <p>Continue managing your sales, purchases, and reports by signing in securely.</p>
                        </div>

                        <form className="login-form" onSubmit={handleSubmit(handleLogin)}>

                            <div className={`input-box ${loginError.email ? "error-box" : ""}`}>
                                <span className="input-icon">
                                    <svg className="input-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.2757 13.9315C11.6379 13.9315 11.0019 13.7208 10.4698 13.2994L6.19345 9.85156C5.88547 9.60365 5.8378 9.15265 6.08475 8.84563C6.33361 8.53956 6.78366 8.49093 7.09068 8.73789L11.3633 12.1819C11.9001 12.6071 12.6562 12.6071 13.1968 12.1781L17.4265 8.73979C17.7335 8.48903 18.1836 8.5367 18.4334 8.84372C18.6822 9.14979 18.6355 9.59984 18.3294 9.84965L14.0921 13.2937C13.5563 13.7189 12.9155 13.9315 12.2757 13.9315Z" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.9307 20.1628C16.9326 20.1609 16.9402 20.1628 16.9459 20.1628C18.0339 20.1628 18.9988 19.7738 19.7387 19.0348C20.5978 18.1795 21.0698 16.9505 21.0698 15.5746V9.02605C21.0698 6.36295 19.3287 4.43023 16.9307 4.43023H7.56933C5.1713 4.43023 3.43023 6.36295 3.43023 9.02605V15.5746C3.43023 16.9505 3.90316 18.1795 4.7613 19.0348C5.50121 19.7738 6.46709 20.1628 7.55407 20.1628H16.9307ZM7.55121 21.593C6.07998 21.593 4.76607 21.0591 3.75156 20.0484C2.62167 18.9213 2 17.3328 2 15.5746V9.02605C2 5.59063 4.39421 3 7.56933 3H16.9307C20.1058 3 22.5 5.59063 22.5 9.02605V15.5746C22.5 17.3328 21.8783 18.9213 20.7484 20.0484C19.7349 21.0581 18.42 21.593 16.9459 21.593H7.55121Z" />
                                    </svg>                                </span>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    {...register("email")} />
                            </div>
                            {loginError.email && <p className="login-error">{loginError.email}</p>}

                            <div className={`input-box ${loginError.password ? "error-box" : ""}`}>
                                <span className="input-icon">
                                    <svg className="input-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M17 23H7C5.93948 22.9989 4.92272 22.5771 4.17282 21.8272C3.42292 21.0773 3.00113 20.0605 3 19V13C3.00113 11.9395 3.42292 10.9227 4.17282 10.1728C4.92272 9.42292 5.93948 9.00113 7 9H17C18.0605 9.00113 19.0773 9.42292 19.8272 10.1728C20.5771 10.9227 20.9989 11.9395 21 13V19C20.9989 20.0605 20.5771 21.0773 19.8272 21.8272C19.0773 22.5771 18.0605 22.9989 17 23ZM7 11C6.46975 11.0006 5.9614 11.2115 5.58646 11.5865C5.21151 11.9614 5.00061 12.4698 5 13V19C5.00061 19.5302 5.21151 20.0386 5.58646 20.4135C5.9614 20.7885 6.46975 20.9994 7 21H17C17.5302 20.9994 18.0386 20.7885 18.4135 20.4135C18.7885 20.0386 18.9994 19.5302 19 19V13C18.9994 12.4698 18.7885 11.9614 18.4135 11.5865C18.0386 11.2115 17.5302 11.0006 17 11H7Z" strokeWidth="0.4" />
                                        <path d="M16.5 11H7.5C7.36867 11 7.23862 10.9742 7.11728 10.9239C6.99594 10.8737 6.88568 10.8 6.79282 10.7072C6.69995 10.6143 6.62629 10.5041 6.57605 10.3827C6.52581 10.2614 6.49997 10.1313 6.5 10V6.5C6.5 5.04131 7.07946 3.64236 8.11091 2.61091C9.14236 1.57946 10.5413 1 12 1C13.4587 1 14.8576 1.57946 15.8891 2.61091C16.9205 3.64236 17.5 5.04131 17.5 6.5V10C17.5 10.1313 17.4742 10.2614 17.4239 10.3827C17.3737 10.5041 17.3 10.6143 17.2072 10.7072C17.1143 10.8 17.0041 10.8737 16.8827 10.9239C16.7614 10.9742 16.6313 11 16.5 11ZM8.5 9H15.5V6.5C15.5 5.57174 15.1313 4.6815 14.4749 4.02513C13.8185 3.36875 12.9283 3 12 3C11.0717 3 10.1815 3.36875 9.52513 4.02513C8.86875 4.6815 8.5 5.57174 8.5 6.5V9Z" strokeWidth="0.4" />
                                        <path d="M12 16.5C12.8284 16.5 13.5 15.8284 13.5 15C13.5 14.1716 12.8284 13.5 12 13.5C11.1716 13.5 10.5 14.1716 10.5 15C10.5 15.8284 11.1716 16.5 12 16.5Z" strokeWidth="0.4" />
                                    </svg>
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    {...register("password")}
                                    onKeyDown={(e) => {
                                        const allowed = /^[A-Za-z0-9!@#$%^&*]$/;
                                        if (
                                            e.key === "Backspace" ||
                                            e.key === "Tab" ||
                                            e.key === "ArrowLeft" ||
                                            e.key === "ArrowRight"
                                        ) return;
                                        if (!allowed.test(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                    onPaste={(e) => {
                                        const paste = e.clipboardData.getData("text");
                                        const allowed = /^[A-Za-z0-9!@#$%^&*]+$/;
                                        if (!allowed.test(paste)) {
                                            e.preventDefault();
                                        }
                                    }} />

                                <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <img src={Images.closedeye} alt="error" /> : <img src={Images.openeye} alt="error" />}
                                </span>
                            </div>

                            {loginError.password && <p className="login-error">{loginError.password}</p>}
                            <div className="rules">
                                {password ? (
                                    errors.password ? (
                                        <>
                                            <p>Password must contain:</p>
                                            <ul>
                                                <li className={password.length < 8 ? "error" : "success"}>
                                                    at least 8 characters
                                                </li>
                                                <li className={!/\d/.test(password) ? "error" : "success"}>
                                                    a number (0-9)
                                                </li>
                                            </ul>
                                        </>
                                    ) : (
                                        <p className="success">Password meets all requirements</p>
                                    )
                                ) : null}
                            </div>

                            <div className="login-btns">
                                <Button variant="primary" disabled={!formIsValid} type="submit">
                                    Login
                                </Button>
                            </div>

                        </form>

                        <span>© 2026 Sri animalife Biotech. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;