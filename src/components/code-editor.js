import Editor from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import { emmetHTML, emmetCSS } from "emmet-monaco-es";
import { Maximize2, Minimize2, Play } from "react-feather";
import Loader from "../utility/loader";
import { htmlTemlplate } from "../utility/template";
import { ReactComponent as JsIcon } from "../assets/js.svg";
import { ReactComponent as HTMLIcon } from "../assets/html.svg";
import { ReactComponent as CssIcon } from "../assets/css.svg";
import PanelGroup from "react-panelgroup/lib/PanelGroup";

const CodeEditor = ({ setNavVisible, navVisible }) => {
    const [activeTab, setActiveTab] = useState("html");
    const [editorInstance, setEditorInstance] = useState(null);
    const [resizing, setResizing] = useState(false);
    const htmlModelRef = useRef();
    const cssModelRef = useRef();
    const jsModelRef = useRef();
    const outputFrame = useRef();
    const handleOnMount = (editor, monaco) => {
        let themeData = require("./onedarkpro.json");
        monaco.editor.defineTheme("onedarkpro", themeData);
        monaco.editor.setTheme("onedarkpro");
        emmetHTML(monaco);
        emmetCSS(monaco);
        htmlModelRef.current = monaco.editor.createModel(htmlTemlplate, "html");
        cssModelRef.current = monaco.editor.createModel("/* CSS */", "css");
        jsModelRef.current = monaco.editor.createModel("// JS", "javascript");
        editor.setModel(htmlModelRef.current);
        setEditorInstance(editor);
    };

    function run() {
        let htmlCode = htmlModelRef.current.getValue();
        let cssCode = cssModelRef.current.getValue();
        let jsCode = jsModelRef.current.getValue();
        let code = `${htmlCode}<style>${cssCode}</style><script>${jsCode}</script>`;
        outputFrame.current.contentWindow.document.body.innerHTML = code;
    }

    function changeActiveTab(tab) {
        if (!editorInstance) return;
        switch (tab) {
            case "html":
                editorInstance.setModel(htmlModelRef.current);
                break;
            case "css":
                editorInstance.setModel(cssModelRef.current);
                break;
            case "javascript":
                editorInstance.setModel(jsModelRef.current);
                break;
        }
        setActiveTab(tab);
    }

    return (
        <PanelGroup direction="row" onResizeStart={() => setResizing(true)} onResizeEnd={() => setResizing(false)}>
            <div className="w-full h-full relative">
                <div className="flex flex-col flex-1 h-full w-full">
                    <div className="flex h-10">
                        <div
                            onClick={() => changeActiveTab("html")}
                            className={activeTab === "html" ? "active-tab" : "tab"}
                        >
                            <HTMLIcon height={18} width={18} className="mr-2 text-[#E44D26]" />
                            HTML
                        </div>
                        <div
                            onClick={() => changeActiveTab("css")}
                            className={activeTab === "css" ? "active-tab" : "tab"}
                        >
                            <CssIcon height={18} width={18} className="mr-2 text-[#1572B6]" />
                            CSS
                        </div>
                        <div
                            onClick={() => changeActiveTab("javascript")}
                            className={activeTab === "javascript" ? "active-tab" : "tab"}
                        >
                            <JsIcon height={18} width={18} className="mr-2 text-[#F0DB4F]" />
                            JS
                        </div>
                        <div className="flex-1"></div>
                        <div className="flex p-1.5">
                            <button className="btn-secondary px-2" onClick={run}>
                                <Play height={18} width={18} />
                            </button>
                            <button className="btn-secondary px-2" onClick={() => setNavVisible((v) => !v)}>
                                {navVisible ? (
                                    <Maximize2 height={18} width={18} />
                                ) : (
                                    <Minimize2 height={18} width={18} />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 flex overflow-hidden">
                        <Editor
                            height="100%"
                            theme="vs-dark"
                            onMount={handleOnMount}
                            loading={<Loader></Loader>}
                            onChange={run}
                            options={{
                                minimap: {
                                    enabled: false,
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-full relative">
                <iframe
                    title="Output"
                    ref={outputFrame}
                    className={
                        resizing
                            ? "block flex-1 bg-white w-full h-full pointer-events-none"
                            : "block flex-1 bg-white w-full h-full"
                    }
                ></iframe>
                {/* <PanelGroup
                    direction="column"
                    borderColor="grey"
                    onResizeStart={() => setResizing(true)}
                    onResizeEnd={() => setResizing(false)}
                >
                    <div></div>
                </PanelGroup> */}
            </div>
        </PanelGroup>
    );
};

export default CodeEditor;
