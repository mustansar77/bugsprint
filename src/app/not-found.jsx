import Link from 'next/link';
export default function NotFound() {
  return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-[#F4F7FA] text-center px-4">
      <h1 className="text-6xl font-bold text-[#4F46E5] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-[#1F2937] mb-4">
        Page Not Found
      </h2>
      <p className="text-[#4B5563] mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
        <span className="px-6 py-3 bg-[#4F46E5] text-white font-medium rounded-lg cursor-pointer hover:bg-[#4338CA]">
          Go Back Home
        </span>
      </Link>
    </div>
  );
}
