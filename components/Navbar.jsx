import { Menu, Transition } from '@headlessui/react';
import { classNames } from 'helpers/classes';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import Logo from '../public/assets/logo.png';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Navbar = () => {
   return (
      <div className="fixed w-full p-4 h-14 flex flex-nowrap items-center mb-[2px] bg-[#0e0e10] z-10">
         {/* Left Side */}
         <div className="flex grow items-center justify-start">
            <Link href="/">
               <a className="flex">
                  <Image
                     src={Logo}
                     alt="logo"
                     width="36"
                     height="36"
                     className="cursor-pointer"
                     priority
                  />
               </a>
            </Link>
            <p className="p-4">Browse</p>
            <div className="p-4">
               <Menu as="div" className="relative text-left">
                  <div className="flex">
                     <Menu.Button>
                        <BsThreeDotsVertical size={20} />
                     </Menu.Button>
                  </div>

                  <Transition
                     as={Fragment}
                     enter="transition ease-out duration-100"
                     enterFrom="transform opacity-0 scale-95"
                     enterTo="transform opacity-100 scale-100"
                     leave="transition ease-in duration-75"
                     leaveFrom="transform opacity-100 scale-100"
                     leaveTo="transform opacity-0 scale-95"
                  >
                     <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                           <Menu.Item>
                              {({ active }) => (
                                 <a
                                    href="#"
                                    className={classNames(
                                       active
                                          ? 'bg-gray-500 text-gray-100'
                                          : 'text-gray-200',
                                       'block px-4 py-2 text-sm'
                                    )}
                                 >
                                    Account Settings
                                 </a>
                              )}
                           </Menu.Item>
                           <Menu.Item>
                              {({ active }) => (
                                 <a
                                    href="#"
                                    className={classNames(
                                       active
                                          ? 'bg-gray-500 text-gray-100'
                                          : 'text-gray-200',
                                       'block px-4 py-2 text-sm'
                                    )}
                                 >
                                    Support
                                 </a>
                              )}
                           </Menu.Item>
                           <Menu.Item>
                              {({ active }) => (
                                 <a
                                    href="#"
                                    className={classNames(
                                       active
                                          ? 'bg-gray-500 text-gray-100'
                                          : 'text-gray-200',
                                       'block px-4 py-2 text-sm'
                                    )}
                                 >
                                    License
                                 </a>
                              )}
                           </Menu.Item>
                        </div>
                     </Menu.Items>
                  </Transition>
               </Menu>
            </div>
         </div>
         {/* Middle */}
         {/* Right Side */}
      </div>
   );
};
export default Navbar;
