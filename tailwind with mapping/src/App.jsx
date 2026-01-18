import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

let users = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 28,
    gender: "Female",
    email: "sarah.johnson@email.com",
    city: "New York",
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 35,
    gender: "Male",
    email: "michael.chen@email.com",
    city: "San Francisco",
  },
  {
    id: 3,
    name: "Emma Williams",
    age: 22,
    gender: "Female",
    email: "emma.williams@email.com",
    city: "London",
  },
  {
    id: 4,
    name: "James Brown",
    age: 41,
    gender: "Male",
    email: "james.brown@email.com",
    city: "Chicago",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    age: 29,
    gender: "Female",
    email: "olivia.martinez@email.com",
    city: "Miami",
  },
  {
    id: 6,
    name: "David Kim",
    age: 33,
    gender: "Male",
    email: "david.kim@email.com",
    city: "Seattle",
  },
  {
    id: 7,
    name: "Sophia Anderson",
    age: 26,
    gender: "Female",
    email: "sophia.anderson@email.com",
    city: "Boston",
  },
  {
    id: 8,
    name: "Daniel Garcia",
    age: 38,
    gender: "Male",
    email: "daniel.garcia@email.com",
    city: "Los Angeles",
  },
  {
    id: 9,
    name: "Isabella Taylor",
    age: 31,
    gender: "Female",
    email: "isabella.taylor@email.com",
    city: "Austin",
  },
  {
    id: 10,
    name: "Christopher Lee",
    age: 27,
    gender: "Male",
    email: "christopher.lee@email.com",
    city: "Denver",
  },
];

function App() {
  const [showUsers, setShowUsers] = useState(false);

  const modifyShowUsers = () => {
    setShowUsers(!showUsers);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            User Directory
          </h1>
          <p className="text-white text-lg mb-8 opacity-90">
            Discover our amazing community members
          </p>
          <button
            onClick={modifyShowUsers}
            className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-purple-50"
          >
            {showUsers ? "Hide Users" : "Show Users"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {showUsers &&
            users.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                age={user.age}
                gender={user.gender}
                email={user.email}
                city={user.city}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
