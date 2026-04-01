function Banner() {
  return (
    <div className="bg-gradient-to-br from-purple-300 via-indigo-300 to-violet-300 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm uppercase tracking-widest">New: AI-Powered Tools Available</span>
          <h2 className="text-6xl font-bold leading-tight mb-6">
            Supercharge Your<br />Digital Workflow
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-lg">
            Premium digital tools to boost your productivity and creativity
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary text-lg px-10 py-3">Get Started Free</button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-700 text-lg px-10 py-3">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="hidden md:flex justify-end">
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/20">
            <img 
              className="max-w-[420px]" 
              src="/src/Image/assets/banner.png" 
              alt="Banner" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;