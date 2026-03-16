import React, { useEffect, useState } from "react";
import axiosInstance, { endpoints } from "../apiConfig";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get(endpoints.products);
        setPosts(response.data);
      } catch (err) {
        console.error(err);
        setError(" wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return <p className="text-center mt-10">Loading...</p>;

  if (error)
    return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Services Products
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.slice(0, 9).map((post) => (
          <div
            key={post.id}
            className="border rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={post.images[0]}
              alt={post.title}
              className="h-48 w-full object-cover rounded-md mb-3"
            />

            <h2 className="text-lg font-semibold mb-2">
              {post.title}
            </h2>

            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
              {post.description}
            </p>

            <p className="font-bold text-blue-600">
              ${post.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
