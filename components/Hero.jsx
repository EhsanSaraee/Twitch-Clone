const Hero = () => {
   return (
      <div id="hero" className="p-2 md:p-8">
         <div className="relative overflow-hidden w-full pt-[56.25%]">
            <iframe
               src="https://www.youtube.com/embed/fJje8GEHrsU"
               className="absolute inset-0 w-full h-full border-0"
               title="YouTube video player"
               allowFullScreen
            />
         </div>
      </div>
   );
};

export default Hero;
