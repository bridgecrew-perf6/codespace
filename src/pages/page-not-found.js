
import { ReactComponent as Logo } from "../assets/codespace-logo.svg";

const PageNotFound = () => {
    return (
        <>
            <main className="w-screen h-screen flex items-center justify-center">
                <div className="flex items-center mr-4">
                    <Logo height={48} />
                </div>
                <div className="border-l border-neutral-800 pl-4">
                    <h3 className="text-4xl text-neutral-300 font-bold">404</h3>
                    <p className="text-lg text-neutral-500">Page Not Found</p>
                </div>
            </main>
        </>
    );
};

export default PageNotFound;
