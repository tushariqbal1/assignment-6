

function Banner() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="text-center md:text-left">
          <span className="text-xs sm:text-sm uppercase tracking-widest">New: AI-Powered Tools Available</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#101727] font-bold leading-tight mb-4 sm:mb-6">
            Supercharge Your<br className="hidden sm:block" />Digital Workflow
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#627382] opacity-90 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
            Premium digital tools to boost your productivity and creativity
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button className="btn btn-primary text-sm sm:text-base px-4 py-3 sm:py-4 rounded-full w-full sm:w-auto">Get Started Free</button>
            <button className="btn btn-outline border-[#9514FA] text-[#9514FA] px-4 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto">
              <img className="w-4 h-4" src="/src/assets2/triangle.png" alt="" /> Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/20 w-full max-w-sm sm:max-w-md">
            <img
              className="w-full h-auto"
              src="/src/assets2/banner.png"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;