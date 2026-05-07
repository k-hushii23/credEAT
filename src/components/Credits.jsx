import React from "react";

const Credits = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

      <h1 className="text-4xl font-bold mb-6">
        Your <span className="text-orange-500">Credits</span>
      </h1>

      <div className="bg-gray-900 p-8 rounded-2xl max-w-xl">

        <h2 className="text-3xl font-bold text-orange-500 mb-4">
          ₹250
        </h2>

        <p className="text-gray-400 mb-6">
          Credits earned by skipping meals.
        </p>

        <div className="space-y-3 text-gray-400">
          <p>• Skipped Lunch → +₹50</p>
          <p>• Skipped Dinner → +₹50</p>
          <p>• Skipped Breakfast → +₹30</p>
        </div>

      </div>

    </div>
  );
};

export default Credits;