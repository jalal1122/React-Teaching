import React from "react";

const UserCard = ({ name, age, gender, email, city }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-24 relative">
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
            <span className="text-3xl font-bold text-white">
              {name.charAt(0)}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-16 pb-6 px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
          {name}
        </h2>

        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <span className="font-semibold">Age:</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
              {age}
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-600">
            <span className="font-semibold">Gender:</span>
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
              {gender}
            </span>
          </div>

          <div className="pt-3 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2 break-all">📧 {email}</p>
            <p className="text-sm text-gray-500">📍 {city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
