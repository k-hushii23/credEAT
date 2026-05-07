import { Link } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"

const Process = () => {
  return (
    <section className="bg-black py-30 px-6 md:px-16">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight py-10 text-center pb-20 bg-black text-white">
           Your Journey with
            <span className="text-orange-500"> CredEAT</span>
          </h1>

      <div className="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto">

        {/* Card 1 - Today's Meals */}
        <div className="w-full bg-gray-900 rounded-3xl p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition">
          
          <h2 className="text-white text-xl font-bold mb-2">
            Today's Meals
          </h2>

          <p className="text-gray-400 text-sm mb-4">
            Check today's available meals and confirm whether you want to eat or skip.
            This helps reduce unnecessary food preparation and waste.
          </p>

          <Link to="/meals">
            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold">
              Explore
            </button>
          </Link>
        </div>


        {/* Card 2 - Your Credits */}
        <div className="w-full bg-gray-900 rounded-3xl p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition">
          
          <h2 className="text-white text-xl font-bold mb-2">
            Your Credits
          </h2>

          <p className="text-gray-400 text-sm mb-4">
            Earn credits when you skip meals. Track your savings and use them
            smartly across campus services.
          </p>
        

          <Link to="/credits">
            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold">
              Explore
            </button>
          </Link>
        </div>


        {/* Card 3 - Pay Vendor */}
        <div className="w-full bg-gray-900 rounded-3xl p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition">
          
          <h2 className="text-white text-xl font-bold mb-2">
            Pay Vendor
          </h2>

          <p className="text-gray-400 text-sm mb-4">
            Use your saved credits to pay campus vendors like cafes, shops,
            or other services easily without extra spending.
          </p>

          <Link to="/vendor">
            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold">
              Explore
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Process