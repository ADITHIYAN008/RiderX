import { FiMail } from "react-icons/fi";

const Newsletter = () => {
  return (
    <div className="bg-black rounded-3xl p-8 text-white max-w-[350px] mx-auto text-center mb-20">
      <h2 className="text-2xl font-extrabold uppercase leading-tight space-y-2 mb-6">
        Stay Upto Date About Our Latest Offers
      </h2>

      <div className="flex items-center w-[250px] bg-white rounded-full px-4 py-2 mx-auto mb-4">
        <FiMail className="text-gray-500 text-xl mr-2" />
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 text-sm text-black focus:outline-none placeholder-gray-500 bg-transparent"
        />
      </div>

      <button className="w-[250px] text-sm bg-white text-black font-semibold rounded-full py-3 hover:bg-gray-200 transition cursor-pointer">
        Subscribe to Newsletter
      </button>
    </div>
  );
};

export default Newsletter;
