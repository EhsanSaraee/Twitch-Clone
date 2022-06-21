import Image from 'next/image';

const LiveChannelItem = ({ img, profile_img, title, user, game }) => {
   return (
      <div className="p-2">
         <Image src={img} alt={title} className="cursor-pointer" />
         <section className="flex pt-2">
            <div className="pr-2 hover:scale-110 ease-in duration-200 cursor-pointer">
               <Image
                  src={profile_img}
                  alt={title}
                  width={60}
                  height={60}
                  className="rounded-full"
               />
            </div>
            <div>
               <p className="text-sm font-bold hover:underline cursor-pointer">
                  {title}
               </p>
               <p className="text-sm text-gray-500 hover:underline cursor-pointer">
                  {user}
               </p>
               <p className="text-sm text-gray-500 hover:underline cursor-pointer">
                  {game}
               </p>
            </div>
         </section>
      </div>
   );
};
export default LiveChannelItem;
