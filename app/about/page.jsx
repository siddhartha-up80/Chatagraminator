"use client";

import React from "react";

const About = () => {
  return (
    <div className="min-h-[90vh] bg-gradient-to-r flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 rounded-lg ">
        <h1 className="text-3xl font-semibold mb-6">About Chatagram</h1>
        <p className="text-lg mb-4">
          Discover Chatagram, the cutting-edge app utilizing Chat GPT API to
          generate and share answers in a user-friendly interface.
        </p>
        <p className="text-lg mb-4">
          Connect with a global community, post discussions, and unleash the
          power of AI-driven knowledge exchange.
        </p>
        <p className="text-lg mb-4">
          Embrace the future of answer-sharing with Chatagram.
        </p>

        <div className="mt-8 space-y-6">
          <div className="bg-blue-100 p-4 rounded-lg border ">
            <p className="text-lg">
              At Chatagram, sharing is more accessible and engaging. Believe in
              the power of AI and user communities to drive innovation and
              learning.
            </p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg border border-green-400">
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>AI-powered answers and discussions</li>
              <li>Global community of users</li>
              <li>User-friendly interface</li>
              <li>Seamless knowledge exchange</li>
              <li>Future-ready technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
