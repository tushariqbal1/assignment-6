function StepsSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-white border border-gray-100 rounded-3xl p-10 md:p-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Get Started In 3 Steps</h2>
          <p className="text-gray-600 text-lg">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group cursor-pointer shadow-2xl p-5 rounded-md">
            <div className="mx-auto mb-6 w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center text-4xl transition-transform group-hover:scale-110">
              <img src="/assets2/user.png" alt="" />
            </div>
            <div className="inline-flex items-center justify-center w-8 h-8 bg-purple-600 text-white text-sm font-bold rounded-full mb-4">01</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Create Account</h3>
            <p className="text-gray-600 leading-relaxed">Sign up for free in seconds. No credit card required to get started.</p>
          </div>

          <div className="text-center group cursor-pointer shadow-2xl p-5 rounded-md">
            <div className="mx-auto mb-6 w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center text-4xl transition-transform group-hover:scale-110"><img src="/assets2/package.png" alt="" /></div>
            <div className="inline-flex items-center justify-center w-8 h-8 bg-purple-600 text-white text-sm font-bold rounded-full mb-4">02</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Choose Products</h3>
            <p className="text-gray-600 leading-relaxed">Browse our catalog and select the tools that fit your needs.</p>
          </div>

          <div className="text-center group cursor-pointer shadow-2xl p-5 rounded-md">
            <div className="mx-auto mb-6 w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center text-4xl transition-transform group-hover:scale-110"><img src="/assets2/rocket.png" alt="" /></div>
            <div className="inline-flex items-center justify-center w-8 h-8 bg-purple-600 text-white text-sm font-bold rounded-full mb-4">03</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Start Creating</h3>
            <p className="text-gray-600 leading-relaxed">Download and start using your premium tools immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepsSection;