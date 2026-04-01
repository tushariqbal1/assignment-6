

function Banner() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm uppercase tracking-widest">New: AI-Powered Tools Available</span>
          <h2 className="text-6xl text-[#101727] font-bold leading-tight mb-6">
            Supercharge Your<br />Digital Workflow
          </h2>
          <p className="text-xl text-[#627382] opacity-90 mb-10 max-w-lg">
            Premium digital tools to boost your productivity and creativity
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary text-[16px] px-3 rounded-full py-4">Get Started Free</button>
            <button className="btn btn-outline border-[#9514FA] text-[#9514FA] px-3 py-4 rounded-full">
              <img src="/src/assets2/triangle.png" alt="" /> Watch Demo
            </button>
          </div>
        </div>

        <div className="hidden md:flex justify-end">
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/20">
            <img
              className="max-w-[420px]"
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