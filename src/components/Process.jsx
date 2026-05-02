// Process.jsx
const Process = () => {
  return (
    <section className="bg-[rgb(232,234,238)] py-36 px-6 md:px-16 ">
      
      {/* 3 cards in a row */}
      <div className="flex items-start justify-center gap-26  mx-auto">
        {/* Card 1 - Today's Meals */}
        <div className="bg-white rounded-2xl shadow-md w-72 min-h-106 p-4 cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]">
          <h3 className="text-center font-bold text-white bg-orange-500  py-4 -mx-4 -mt-4 rounded-t-2xl ">
            Today's Meals
          </h3>
        </div>
        {/* Card 2 - Your Credits */}
        <div className="bg-white rounded-2xl shadow-md w-72 min-h-106 p-4 cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]">
          <h3 className="text-center font-bold text-white bg-orange-500 py-4 -mx-4 -mt-4 rounded-t-2xl">
            Your Credits
          </h3>
        </div>
        {/* Card 3 - Pay Vendor */}
        <div className="bg-white rounded-2xl shadow-md w-72 min-h-106 p-4 cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]">
          <h3 className="text-center font-bold text-white bg-orange-500 py-4 -mx-4 -mt-4 rounded-t-2xl">
            Pay Vendor
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Process