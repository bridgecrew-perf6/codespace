import { useEffect, useRef, useState } from "react";
import { Lock, Mail, User } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactComponent as Background } from "../assets/background.svg";
import { ReactComponent as Logo } from "../assets/codespace-logo.svg";
import { useAuth } from "../contexts/auth-context";
import { HOME_ROUTE, LOGIN_ROUTE } from "../routes";

const Signup = () => {
    const { currentUser, signup } = useAuth();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const navigate = useNavigate();

    useEffect(()=>{
        if(currentUser) {
            navigate(HOME_ROUTE);
        }
    },[currentUser]);

    const [errorMsg, setErrorMsg] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setErrorMsg("");
        let name = nameRef.current.value;
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        let confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            setErrorMsg("Passwords do not match");
        } else {
            let promise = signup(email, password, name);
            toast.promise(
                promise,
                {
                    pending: {
                        render() {
                            return "Signing up";
                        },
                    },
                    success: {
                        render() {
                            return "Signup Successfull";
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
                    autoClose: 3000,
                }
            );
        }
    }

    return (
        <div className="flex flex-col md:flex-row items-center w-screen h-screen">
            <div className="md:flex-1 flex items-center justify-center">
                <Background className="hidden md:block h-[80vh]" />
                <Logo className="md:hidden my-8" height={48} />
            </div>
            <div className="flex-1 w-full p-4 flex items-center justify-center">
                <form onSubmit={handleSubmit} className="w-full block max-w-[24rem] space-y-2">
                    <h3 className="text-center text-lg text-neutral-500 mb-8">SIGNUP</h3>

                    {errorMsg && (
                        <div className="border-2 border-neutral-700 text-red-500 p-4 rounded text-center">
                            {errorMsg}
                        </div>
                    )}

                    <div className="relative">
                        <User className="absolute top-4 left-4 stroke-neutral-500" width={18} height={18} />
                        <input ref={nameRef} className="custom-input" type="text" placeholder="full name" required />
                    </div>
                    <div className="relative">
                        <Mail className="absolute top-4 left-4 stroke-neutral-500" width={18} height={18} />
                        <input ref={emailRef} className="custom-input" type="text" placeholder="email" required />
                    </div>
                    <div className="relative">
                        <Lock className="absolute top-4 left-4 stroke-neutral-500" width={18} height={18} />
                        <input
                            ref={passwordRef}
                            className="custom-input"
                            type="password"
                            placeholder="password"
                            required
                        />
                    </div>
                    <div className="relative">
                        <Lock className="absolute top-4 left-4 stroke-neutral-500" width={18} height={18} />
                        <input
                            ref={confirmPasswordRef}
                            className="custom-input"
                            type="password"
                            placeholder="confirm password"
                            required
                        />
                    </div>
                    <div className="row flex space-x-2">
                        <Link to={LOGIN_ROUTE} className="flex-1">
                            <div className="btn-secondary border-2 border-neutral-800 h-12">Login</div>
                        </Link>
                        <button className="btn-secondary border-2 border-neutral-800 flex-1 h-12">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
