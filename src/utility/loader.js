import { ReactComponent as DefaultThumbnail } from "../assets/codespace-logo-mono.svg";


const Loader = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <DefaultThumbnail height={48} className="fill-neutral-700" />
        </div>
    );
};

export default Loader;