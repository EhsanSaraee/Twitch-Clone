import Image from 'next/image';
import { BsDot } from 'react-icons/bs';

const Channel = ({ username, avatar, game_name, rank }) => {
   return (
      <section className="inline-flex w-full items-center py-[2px]">
         <div>
            <Image src={avatar} alt={username} width={40} height={40} />
         </div>
         <div className="hidden lg:flex justify-between w-full">
            <div>
               <p className="text-sm">{username}</p>
               <p className="text-gray-400 text-sm">{game_name}</p>
            </div>
            <p className="flex text-sm items-center">
               <BsDot size={40} color="red" />
               {rank}K
            </p>
         </div>
      </section>
   );
};
export default Channel;
