import Hero from './Hero';
import IconBar from './IconBar';
import LiveChannels from './LiveChannels';

const MainSide = () => {
   return (
      <section className="absolute left-[64px] xl:left-[220px]">
         <Hero />
         <LiveChannels />
         <IconBar />
      </section>
   );
};
export default MainSide;
