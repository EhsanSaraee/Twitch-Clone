import MainSide from './MainSide';
import SideMenu from './SideMenu';

const Aside = () => {
   return (
      <aside className="pt-[60px] flex w-full">
         <SideMenu />
         <MainSide />
      </aside>
   );
};
export default Aside;
