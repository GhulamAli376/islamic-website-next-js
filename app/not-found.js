import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 text-center">

      <h1 className="text-7xl font-bold text-yellow-400 mb-6">
        404
      </h1>

      <h2 className="text-3xl font-semibold mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-400 mb-8 max-w-md">
        The page you are looking for does not exist or may have been moved.
      </p>

      <Link href="/">
        <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold transition">
          Go Back Home
        </button>
      </Link>

    </div>
  );
}