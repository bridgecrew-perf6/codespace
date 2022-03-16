import { Code, MoreVertical, Trash } from "react-feather";
import { ReactComponent as DefaultThumbnail } from "../assets/codespace-logo-mono.svg";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import moment from "moment";

const CodeCard = ({ codeTitle = "Untitled", timestamp = "0", code ,handleDeleteCode}) => {
    return (
        <div className="bg-neutral-800 hover:scale-[1.02] transition-all duration-100 cursor-pointer rounded">
            <div className="">
                <div className="flex items-center justify-center py-16 bg-neutral-dark">
                    <DefaultThumbnail height={48} className="fill-neutral-900" />
                </div>
            </div>
            <div className="flex p-4 space-x-4 items-center">
                <div className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center text-neutral-500">
                    <Code width={24} height={24} />
                </div>
                <div className="flex-1">
                    <div className="text-neutral-200 font-bold leading-none">{codeTitle}</div>
                    <div className="text-neutral-500 text-sm">
                        {moment(new Date(parseInt(timestamp) || 0)).fromNow()}
                    </div>
                </div>
                <div onClick={(e) => e.stopPropagation()}>
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="">
                            <div className="btn-secondary w-10 h-10">
                                <MoreVertical width={24} height={24} />
                            </div>
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-neutral-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2">
                                <Menu.Item>
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            handleDeleteCode(code.codeID);
                                        }}
                                        className="flex justify-center text-neutral-500 p-3 hover:bg-neutral-700 hover:text-neutral-300 cursor-pointer rounded"
                                    >
                                        <Trash width={24} height={24} />
                                        <div className="ml-3">Delete Code</div>
                                    </div>
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default CodeCard;
