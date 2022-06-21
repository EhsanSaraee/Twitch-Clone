import Image from 'next/image';

const CategoryItem = ({ img, title, viewers, tag1, tag2 }) => {
   return (
      <div className="p-2 hover:scale-110 ease-in duration-150 cursor-pointer">
         <Image src={img} width={261} height={350} alt={title} />
         <div>
            <p className="font-bold hover:underline cursor-pointer">{title}</p>
            <p className="text-sm text-gray-500 py-[2px] hover:underline cursor-pointer">
               {viewers}
            </p>
            <div className="flex">
               <div>
                  <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3 hover:underline cursor-pointer">
                     {tag1}
                  </p>
               </div>
               <div>
                  {tag2 ? (
                     <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3 hover:underline cursor-pointer">
                        {tag2}
                     </p>
                  ) : null}
               </div>
            </div>
         </div>
      </div>
   );
};

export default CategoryItem;
