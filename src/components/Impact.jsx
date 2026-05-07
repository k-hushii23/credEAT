import React from "react";

const Impact = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Real Impact,{" "}
        <span className="text-orange-500">Real Numbers</span>
      </h1>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="bg-gray-900 p-6 rounded-2xl hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-orange-500">62%</h2>
          <p className="text-lg font-semibold mt-2">
            Reduction in Food Wastage
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Smart meal planning helps reduce unnecessary food preparation and waste across campus.
          </p>
          <span className="text-green-400 text-xs mt-3 inline-block">
            ↓ Significant daily reduction
          </span>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900 p-6 rounded-2xl hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-orange-500">89%</h2>
          <p className="text-lg font-semibold mt-2">
            Student Satisfaction
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Flexible credit system gives students control over their meals and spending.
          </p>
          <span className="text-green-400 text-xs mt-3 inline-block">
            ↑ Improved experience
          </span>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-900 p-6 rounded-2xl hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-orange-500">₹45K+</h2>
          <p className="text-lg font-semibold mt-2">
            Vendor Earnings (Monthly)
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Increased student spending through credits boosts vendor revenue streams.
          </p>
          <span className="text-green-400 text-xs mt-3 inline-block">
            ↑ More transactions
          </span>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-900 p-6 rounded-2xl hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-orange-500">3×</h2>
          <p className="text-lg font-semibold mt-2">
            Better Demand Prediction
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Advance meal selection helps mess admins prepare accurate quantities.
          </p>
          <span className="text-green-400 text-xs mt-3 inline-block">
            ↑ Efficient planning
          </span>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-16 max-w-5xl mx-auto bg-gray-900 p-6 rounded-2xl border border-orange-500/20">
        <h3 className="text-xl font-semibold text-orange-500 mb-4">
          Key Insights
        </h3>

        <div className="space-y-2 text-gray-400 text-sm">
          <p>• 78% students choose meals in advance</p>
          <p>• 94% on-time meal decisions before deadline</p>
          <p>• Reduced overproduction across campus mess</p>
        </div>
      </div>

    </div>
  );
};

export default Impact;