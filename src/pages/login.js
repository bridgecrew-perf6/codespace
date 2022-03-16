import { useEffect, useRef } from "react";
import { Lock, Mail } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactComponent as Background } from "../assets/background.svg";
import { ReactComponent as Logo } from "../assets/codespace-logo.svg";
import { useAuth } from "../contexts/auth-context";
import { HOME_ROUTE, SIGNUP_ROUTE } from "../routes";

const Login = () => {
    const { currentUser, signin ,passwordReset} = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate(HOME_ROUTE);
        }
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        let promise = signin(email, password);
        toast.promise(
            promise,
            {
                pending: {
                    render() {
                        return "Logging in";
                    },
                },
                success: {
                    render() {
                        return "Login Successfull";
                    },
                    onClose: () => {
                        navigate(HOME_ROUTE);
                    },
                },
                error: {
                    render({ data }) {
                        return data.message;
                    },
                },
            },
            {
                theme: "dark",
                autoClose: 2000,
                position : "bottom-right"
            }
        );
    }

    function handleForgotPassword(){
        let passwordResetPromise = passwordReset(emailRef.current.value) ;
        toast.promise(
            passwordResetPromise,
            {
                pending: {
                    render() {
                        return "We are on it!";
                    },
                },
                success: {
                    render() {
                        return "Passsword Reset Link Sent to your Email";
                    }
                },
                error: {
                    render({ data }) {
                        return data.message;
                    },
                },
            },
            {
                theme: "dark",
                autoClose: 2000,
                position : "bottom-right"
            }
        );
    }

    return (
        <div className="flex flex-col md:flex-row items-center w-screen h-screen">
            <div className="md:flex-1 flex items-center justify-center">
                <Background className="hidden md:block h-[80vh]" />
                <Logo className="md:hidden my-8" height={48} />
            </div>
            <div className="flex-1 w-full p-4 flex items-center justify-center">
                <form onSubmit={handleSubmit} className="w-full block max-w-[24rem] space-y-2">
                    <h3 className="text-center text-lg text-neutral-500 mb-8">LOGIN</h3>
                    <div className="relative">
                        <Mail className="absolute top-4 left-4 stroke-neutral-500" width={18} height={18} />
                        <input ref={emailRef} className="custom-input" type="email" placeholder="email" />
                    </div>
                    <div className="relative">
                        <Lock className="absolute top-4 left-4 stroke-neutral-500" width={18} height={18} />
                        <input ref={passwordRef} className="custom-input" type="password" placeholder="password" />
                    </div>
                    <div className="text-neutral-500 hover:text-primary-500 cursor-pointer" onClick={handleForgotPassword}>
                        Forgot Password ?
                    </div>
                    <div className="row flex space-x-2">
                        <Link to={SIGNUP_ROUTE} className="flex-1">
                            <div className="btn-secondary border-2 border-neutral-800 h-12">Signup</div>
                        </Link>
                        <button className="btn-secondary border-2 border-neutral-800 flex-1 h-12">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
