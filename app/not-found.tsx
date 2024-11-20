// app/not-found.tsx

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <div className="max-w-lg w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Oops! Page not found</h2>
        <p className="text-lg text-gray-500 mb-4">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
          <a href="/" className="mt-4 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300">
            Go back to Home
          </a>
      </div>
    </div>
  );
};

export default NotFound;
