import React, { useState } from "react";

const Vendor = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

      <h1 className="text-4xl font-bold mb-6">
        Pay <span className="text-orange-500">Vendor</span>
      </h1>

      <p className="text-gray-400 mb-10">
        Use your credits to pay campus vendors.
      </p>

      <div className="bg-gray-900 p-8 rounded-2xl max-w-xl space-y-4">

        <select className="w-full p-3 rounded-lg bg-black text-white">
          <option>Select Vendor</option>
          <option>Cafe</option>
          <option>Stationery Shop</option>
          <option>Juice Corner</option>
        </select>

        <input
          type="number"
          placeholder="Enter amount"
          className="w-full p-3 rounded-lg bg-black text-white"
        />

        <button
          onClick={() => setMessage("Payment Successful")}
          className="w-full bg-orange-500 py-3 rounded-lg font-semibold"
        >
          Pay with Credits
        </button>

        {message && (
          <p className="text-green-400">{message}</p>
        )}

      </div>

    </div>
  );
};

export default Vendor;