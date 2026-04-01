function PricingSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Simple, Transparent Pricing</h2>
        <p className="text-gray-600 text-lg">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all">
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">Starter</h3>
          <p className="text-gray-500 mb-6">Perfect for getting started</p>
          <div className="mb-8">
            <span className="text-5xl text-green-400 font-bold">$0</span>
            <span className="text-gray-500">/Month</span>
          </div>
          <ul className="space-y-4 mb-10 text-gray-700">
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Access to 10 free tools</li>
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Basic templates</li>
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Community support</li>
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> 1 project per month</li>
          </ul>
          <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-2xl transition-all">
            Get Started Free
          </button>
        </div>

        {/* Pro Plan - Popular */}
        <div className="bg-gradient-to-br from-purple-600 to-violet-600 text-white rounded-3xl p-8 border-2 border-purple-400 relative scale-105 shadow-2xl">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-6 py-1 rounded-full">
            Most Popular
          </div>
          <h3 className="text-3xl font-bold mb-1">Pro</h3>
          <p className="opacity-90 mb-6">Best for professionals</p>
          <div className="mb-8">
            <span className="text-5xl font-bold">$29</span>
            <span className="opacity-80">/Month</span>
          </div>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3"><span className="text-green-300">✓</span> Access to all premium tools</li>
            <li className="flex items-center gap-3"><span className="text-green-300">✓</span> Unlimited templates</li>
            <li className="flex items-center gap-3"><span className="text-green-300">✓</span> Priority support</li>
            <li className="flex items-center gap-3"><span className="text-green-300">✓</span> Unlimited projects</li>
            <li className="flex items-center gap-3"><span className="text-green-300">✓</span> Cloud sync</li>
            <li className="flex items-center gap-3"><span className="text-green-300">✓</span> Advanced analytics</li>
          </ul>
          <button className="w-full py-4 bg-white text-purple-700 font-semibold rounded-2xl hover:bg-gray-100 transition-all">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all">
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">Enterprise</h3>
          <p className="text-gray-500 mb-6">For teams and businesses</p>
          <div className="mb-8">
            <span className="text-5xl text-green-400 font-bold">$99</span>
            <span className="text-gray-500">/Month</span>
          </div>
          <ul className="space-y-4 mb-10 text-gray-700">
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Everything in Pro</li>
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Team collaboration</li>
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Custom integrations</li>
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Dedicated support</li>
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> SLA guarantee</li>
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Custom branding</li>
          </ul>
          <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-2xl transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;