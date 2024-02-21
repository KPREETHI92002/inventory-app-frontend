import React from 'react';

const Blog = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">📖 Bookstore Blog 📖</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog Post 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="src/assets/blog.jpg" alt="Blog Post 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">The Art of Reading</h2>
            <p className="text-gray-600">Explore the beauty and importance of reading in today's fast-paced world.</p>
          </div>
        </div>
        {/* Blog Post 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="src/assets/blog.jpg" alt="Blog Post 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Discover New Authors</h2>
            <p className="text-gray-600">Uncover hidden literary gems and dive into the works of emerging authors.</p>
          </div>
        </div>
        {/* Blog Post 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="src/assets/blog.jpg" alt="Blog Post 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Book Recommendations</h2>
            <p className="text-gray-600">Get inspired with our curated list of must-read books for every reader.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
