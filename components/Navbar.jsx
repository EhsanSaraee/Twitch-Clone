import { Menu, Transition } from '@headlessui/react';
import { classNames } from 'helpers/classes';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import Logo from '../public/assets/logo.png';
import { BsThreeDotsVertical, BsSearch, BsPerson } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
   const [nav, setNav] = useState(false);

   const { data: session } = useSession();

   return (
      <div className="fixed w-full p-4 h-14 flex flex-nowrap items-center mb-[2px] bg-[#0e0e10] z-10">
         {/* Left Side */}
         <section className="flex grow items-center justify-start">
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
            <section className="p-4">
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
                                 <Link
                                    href="/account"
                                    className={classNames(
                                       active
                                          ? 'bg-gray-500 text-gray-100'
                                          : 'text-gray-200',
                                       'block px-4 py-2 text-sm'
                                    )}
                                 >
                                    Account
                                 </Link>
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
            </section>
         </section>
         {/* Middle */}
         <section className="hidden md:flex grow-[2] items-center justify-center">
            <div className="bg-gray-500 text-white flex items-center justify-around max-w-[400px] w-full m-auto p-2 rounded-2xl">
               <div>
                  <input
                     type="text"
                     placeholder="Search"
                     className="bg-transparent border-none text-white focus:outline-none"
                  />
               </div>
               <div>
                  <BsSearch className="cursor-pointer" />
               </div>
            </div>
         </section>
         {/* Right Side */}
         <section className="hidden md:flex grow items-center justify-end">
            {session ? (
               <section className="flex items-center">
                  <Link href="/account">
                     <div>
                        <p className="pr-4 cursor-pointer">
                           Welcome, {session.user.name}
                        </p>
                     </div>
                  </Link>
                  <Menu as="div" className="relative text-left">
                     <div className="flex">
                        <Menu.Button>
                           <Image
                              src={session.user.image}
                              alt="avatar"
                              width={45}
                              height={45}
                              className="rounded-full"
                           />
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
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                           <div className="py-1">
                              <Menu.Item>
                                 {({ active }) => (
                                    <Link href="/account">
                                       <a
                                          className={classNames(
                                             active
                                                ? 'bg-gray-500 text-gray-100'
                                                : 'text-gray-200',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          Account
                                       </a>
                                    </Link>
                                 )}
                              </Menu.Item>
                              <Menu.Item>
                                 {({ active }) => (
                                    <p
                                       onClick={() => signOut()}
                                       className={classNames(
                                          active
                                             ? 'bg-gray-500 text-gray-100 cursor-pointer'
                                             : 'text-gray-200',
                                          'block px-4 py-2 text-sm'
                                       )}
                                    >
                                       Logout
                                    </p>
                                 )}
                              </Menu.Item>
                           </div>
                        </Menu.Items>
                     </Transition>
                  </Menu>
               </section>
            ) : (
               <div className="flex items-center">
                  <Link href="/account">
                     <button className="px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] hover:bg-[#9567db] ease-in duration-200 mr-2">
                        Account
                     </button>
                  </Link>
                  <BsPerson size={30} className="cursor-pointer" />
               </div>
            )}
         </section>
         {/* Hamburger Menu */}
         <div
            className="block md:hidden z-10 cursor-pointer"
            onClick={() => setNav(!nav)}
         >
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
         </div>
         {/* Mobile Menu */}
         <section
            className={
               nav
                  ? 'md:hidden fixed top-0 left-0 w-full h-screen bg=[#0e0e10] flex justify-center items-center ease-in duration-300'
                  : 'md:hidden fixed top-[-100%] left-0 w-full h-screen bg=[#0e0e10] flex justify-center items-center ease-in duration-300'
            }
         >
            <nav>
               <ul className="text-center">
                  <li className="p-4 text-3xl font-bold">
                     <Link href="/">Home</Link>
                  </li>
                  <li className="p-4 text-3xl font-bold">
                     <Link href="/">Live Channels</Link>
                  </li>
                  <li className="p-4 text-3xl font-bold">
                     <Link href="/">Top Categories</Link>
                  </li>
                  <li className="p-4 text-3xl font-bold">
                     <Link href="/account">Account</Link>
                  </li>
               </ul>
            </nav>
         </section>
      </div>
   );
};
export default Navbar;
