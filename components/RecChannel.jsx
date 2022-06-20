import Image from 'next/image';

const RecChannel = ({ username, avatar, game_name }) => {
   return (
      <section className="inline-flex w-full items-center py-[2px]">
         <div>
            <Image src={avatar} alt={username} width={50} height={50} />
         </div>
         <div className="hidden xl:flex justify-between w-full">
            <div>
               <p>{username}</p>
               <p className="text-gray-400">{game_name}</p>
            </div>
         </div>
      </section>
   );
};
export default RecChannel;
