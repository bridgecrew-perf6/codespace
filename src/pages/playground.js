import CodeEditor from "../components/code-editor";
import PlaygroundNavBar from "../components/playground-navbar";

const Playground = () => {
    return ( <>
        <PlaygroundNavBar />
        <main className="mt-20 mb-16 md:mb-0 flex h-[calc(100vh-5rem)] w-full">
            <div className="flex flex-1">
                <CodeEditor />
            </div>
        </main>
    </> );
}
 
export default Playground;