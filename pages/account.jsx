import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

const Account = () => {
   const { data: session } = useSession();

   if (session) {
      return (
         <div className="pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4">
            <h2 className="text-2xl font-bold">Welcome, {session.user.name}</h2>
            <p className="py-3">Signed in as {session.user.email}</p>
            <div className="pb-4 m-auto">
               <Image
                  src={session.user.image}
                  alt="profile"
                  width={100}
                  height={100}
                  className="rounded-full"
               />
            </div>
            <button
               className="flex items-center justify-center p-3 bg-gray-600 border border-gray-600 rounded-2xl hover:bg-gray-500 ease-in duration-200 my-2"
               onClick={() => signOut()}
            >
               Sing out
            </button>
         </div>
      );
   }

   return (
      <section className="pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4">
         <h2 className="text-3xl font-bold">Login</h2>
         <p className="py-3">Choose the account you want to sign in with.</p>
         <button
            onClick={() => signIn()}
            className="flex items-center justify-center p-3 bg-gray-600 border border-gray-600 rounded-2xl hover:bg-gray-500 ease-in duration-200 my-2"
         >
            {' '}
            <FaGithub className="mr-2" /> Sign in with{' '}
            <span className="font-bold pl-1">Github</span>{' '}
         </button>
      </section>
   );
};
export default Account;
