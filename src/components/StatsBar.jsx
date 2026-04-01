function StatsBar() {
  return (
    <div className="bg-purple-700 py-10 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-5xl font-bold">50K+</div>
          <div className="text-purple-200 mt-2">Happy Users</div>
        </div>
        <div>
          <div className="text-5xl font-bold">200+</div>
          <div className="text-purple-200 mt-2">Tools & Templates</div>
        </div>
        <div>
          <div className="text-5xl font-bold">4.9</div>
          <div className="text-purple-200 mt-2">Average Rating</div>
        </div>
      </div>
    </div>
  );
}

export default StatsBar;