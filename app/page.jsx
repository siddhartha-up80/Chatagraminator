import Link from "next/link";

import Feed from "@components/Feed";

const Home = () => (
  <>
    <div className="">
      <div className="min-h-[90vh] bg-gradient-to-r flex items-center justify-center md:max-w-[65vw] md:ml-20">
        <div className="w-full max-w-4xl p-8 rounded-lg text-center">
          <h1 className="text-4xl font-semibold mb-6">
            Welcome to Chatagram - Where AI Answers Connect!
          </h1>
          <p className="text-lg mb-6">
            Chatagram is a revolutionary AI post sharing platform that harnesses
            the power of AI to generate and share insightful answers through the
            ChatGPT API from OpenAI.
          </p>

          <div className="flex justify-center space-x-4">
            <Link
              href="/feed"
              className="bg-blue-400 hover:bg-blue-600 text-white px-6 py-3 rounded-md"
            >
              View Feed
            </Link>
            <Link
              href="/help"
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md border"
            >
              Get Help
            </Link>
          </div>

          <div className="mt-8 space-y-6">
            <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
              <p className="text-lg">
                Join the community of knowledge enthusiasts. Share, create, and
                explore with Chatagram's question answer interface powered by
                AI.
              </p>
            </div>

            <div className="bg-green-100 p-4 rounded-lg  shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Key Features</h2>
              <ul className=" pl-5 text-lg">
                <li>AI-powered answers and discussions</li>
                <li>Connect with a global community of users</li>
                <li>Intuitive and user-friendly interface</li>
                <li>Seamless knowledge exchange</li>
                <li>Stay ahead with future-ready technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Feed />
    </div>
  </>
);

export default Home;
