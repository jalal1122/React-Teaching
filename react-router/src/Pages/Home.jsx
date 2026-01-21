import { Link } from "react-router";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is the description for Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is the description for Product 2",
      price: 200,
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is the description for Product 3",
      price: 300,
    },
  ];

  return (
    <div>
      <h1 className="text-amber-600">Home Page</h1>
      <h2>
        go to <Link to="/contact">contact page</Link>
      </h2>
      <div>
        <h1>Products</h1>
        <div>
          {products.map((product) => (
            <div key={product.id} className="m-2 p-2">
              <Link to={"/products/" + product.id}>
                <h2>{product.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
