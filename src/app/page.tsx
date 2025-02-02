import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-36">
      <section className="w-4/5 mx-auto">
        <section className="flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Revolutionize Conversations with AI</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Integrate our chatbot seamlessly into your website to enhance user engagement and automate responses with AI-driven technology.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link href="/signup" className="bg-blue-500 px-6 py-3 rounded-lg text-sm md:text-lg font-semibold hover:bg-blue-600 transition">
              Get Started
            </Link>
            <Link href="/features" className="border border-gray-600 px-6 py-3 rounded-lg text-sm md:text-lg font-semibold hover:bg-gray-800 transition">
              Learn More
            </Link>
          </div>
        </section>

        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Chatbot?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Instant Responses</h3>
              <p className="text-gray-400">Our AI chatbot replies to customers in real-time, ensuring a smooth experience.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
              <p className="text-gray-400">Easily integrate with your existing website or platform without hassle.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Customizable AI</h3>
              <p className="text-gray-400">Tailor the chatbot responses to match your business needs and customer interactions.</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
