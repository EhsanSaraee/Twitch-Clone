import { rec_channels, top_channels } from '../data/mock-data';
import { RiMovieLine } from 'react-icons/ri';
import Channel from './Channel';

const SideMenu = () => {
   return (
      <section className="fixed w-14 sm:w-16 md:w-[14rem] xl:w-[16rem] h-screen p-2 bg-[#0e0e10]">
         <div>
            <p className="hidden lg:flex uppercase font-bold text-sm pb-4">
               Recommended Channels
            </p>
            <p>
               <RiMovieLine
                  size={20}
                  className="md:hidden justify-center w-full"
               />
            </p>
         </div>
         {rec_channels?.map((channel) => (
            <Channel key={channel.id} {...channel} />
         ))}
         <div>
            <p className="hidden lg:flex uppercase font-bold text-sm py-4">
               Top Channels
            </p>
            <p>
               <RiMovieLine
                  size={20}
                  className="md:hidden justify-center w-full"
               />
            </p>
         </div>
         {top_channels?.map((channel) => (
            <Channel key={channel.id} {...channel} />
         ))}
      </section>
   );
};
export default SideMenu;
