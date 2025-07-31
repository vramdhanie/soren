export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Soren</h1>
        <p className="text-xl text-gray-600 mb-8">A digital artist</p>
        <div className="space-y-4">
          <p className="text-gray-700">
            Welcome to my digital art portfolio. Here you&apos;ll find a collection of my latest works,
            showcasing various styles and techniques in digital art.
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <a 
              href="#portfolio" 
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Portfolio
            </a>
            <a 
              href="#contact" 
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
