import { rec_channels, top_channels } from '../data/mock-data';
import { RiMovieLine } from 'react-icons/ri';
import RecChannel from './RecChannel';

const SideMenu = () => {
   return (
      <section className="fixed w-14 sm:w-15 xl:w-[15rem] h-screen p-2 bg-[#0e0e10]">
         <div>
            <p className="hidden xl:flex uppercase font-bold text-sm">
               Recommended Channels
            </p>
            <p>
               <RiMovieLine
                  size={20}
                  className="xl:hidden justify-center w-full"
               />
            </p>
         </div>
         {rec_channels?.map((channel) => (
            <RecChannel key={channel.id} {...channel} />
         ))}
      </section>
   );
};
export default SideMenu;
