import { LogOut, User } from "react-feather";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Avatar = ({currentUser,signout}) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="">
                <div className="h-12 w-12 rounded-full bg-neutral-800 text-neutral-500 flex items-center justify-center">
                    <User width={24} height={24} />
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
                        <div className="text-center my-3 text-neutral-200 font-bold">
                            {currentUser && currentUser.displayName}
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div
                            onClick={() => signout()}
                            className="flex items-center justify-center text-neutral-500 p-3 hover:bg-neutral-700 hover:text-neutral-300 cursor-pointer rounded"
                        >
                            <LogOut width={24} height={24} />
                            <div className="ml-3">Logout</div>
                        </div>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default Avatar;
