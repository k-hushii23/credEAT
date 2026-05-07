import React, { useState } from "react";

const Meals = () => {
  const [status, setStatus] = useState("");

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20 flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold mb-6">
        Today's <span className="text-orange-500">Meals</span>
      </h1>

      <p className="text-gray-400 mb-10">
        Confirm whether you want today's meal or skip it to earn credits.
      </p>

      <div className="bg-gray-900 p-8 rounded-2xl max-w-xl">
        
        <h2 className="text-xl font-semibold mb-4">Lunch Menu</h2>
        <ul className="text-gray-400 mb-6">
          <li>• Rice</li>
          <li>• Dal</li>
          <li>• Paneer Curry</li>
          <li>• Roti</li>
        </ul>

        <div className="flex gap-4">
          <button
            onClick={() => setStatus("Meal Confirmed")}
            className="bg-green-500 px-5 py-2 rounded-lg"
          >
            Accept Meal
          </button>

          <button
            onClick={() => setStatus("Meal Skipped → Credits Added")}
            className="bg-red-500 px-5 py-2 rounded-lg"
          >
            Skip Meal
          </button>
        </div>

        {status && (
          <p className="mt-4 text-orange-400">{status}</p>
        )}
      </div>

    </div>
  );
};

export default Meals;