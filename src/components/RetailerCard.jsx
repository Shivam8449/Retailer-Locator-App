import { MessageCircle } from "lucide-react";

const RetailerCard = ({ retailer }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-xl p-4 flex flex-col gap-2 transition hover:scale-[1.01]">
      <h2 className="text-base font-bold text-gray-900">{retailer.name}</h2>
      <p className="text-sm text-gray-500">{retailer.category}</p>
      <p className="text-sm text-gray-700">{retailer.location}</p>
      <p className="text-xs text-gray-500">Approx. {retailer.distance.toFixed(2)} km away</p>

      <a
        href={`https://wa.me/${retailer.phoneNumber}?text=Hi`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 w-full flex items-center justify-center gap-2 py-2 text-sm font-medium 
          rounded-lg shadow transition
          text-white bg-gradient-to-r from-green-400 to-green-600
          hover:from-green-500 hover:to-green-700 active:scale-95"
      >
        <MessageCircle className="w-4 h-4" />
        Chat on WhatsApp
      </a>
    </div>
  );
};

export default RetailerCard;
