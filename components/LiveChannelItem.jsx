import Image from 'next/image';

const LiveChannelItem = ({ img, profile_img, title, user, game }) => {
   return (
      <div className="p-2">
         <Image src={img} alt={title} />
         <section className="flex pt-2">
            <div className="pr-2">
               <Image
                  src={profile_img}
                  alt={title}
                  width={60}
                  height={60}
                  className="rounded-full"
               />
            </div>
            <div>
               <p className="text-sm font-bold">{title}</p>
               <p className="text-sm text-gray-500">{user}</p>
               <p className="text-sm text-gray-500">{game}</p>
            </div>
         </section>
      </div>
   );
};
export default LiveChannelItem;
