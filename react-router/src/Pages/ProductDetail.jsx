import { Link, useParams } from "react-router";

const ProductDetail = () => {
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

  const { productId } = useParams();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <button className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <Link to={-1}>Back to Products</Link>
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Product Details Section */}
            {products
              .filter((p) => p.id === parseInt(productId))
              .map((product) => (
                <div key={product.id}>
                  <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                  <p className="mb-4">{product.description}</p>
                  <p className="text-lg font-semibold">${product.price}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
