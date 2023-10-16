'use client'

import React from "react";
// import Link from "next/link";

const Help = () => {
  return (
    <div className="min-h-screen py-10 rounded-xl w-[90vw]">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Help Page</h1>
        <p className="text-lg mb-6">
          Welcome to the Chatagraminator Help Center!
        </p>
        <p className="text-lg mb-6">
          Follow the instructions below to make the most of Chatagraminator:
        </p>

        <div className="bg-blue-100  rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-2">How to Create a New Post</h2>
          <p className="text-lg">
            To create a new post, click on the "Create Post" button located in
            the navbar. It will take you to the Create Post page where you can
            enter your question and get an AI-generated answer.
          </p>
        </div>

        <div className="bg-blue-100  rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-2">Getting AI Answers</h2>
          <p className="text-lg">
            On the Create Post page, you'll find an "AI Answer" button. Clicking
            on it will generate an AI answer based on your question using Chat
            GPT. You can review and modify the answer before posting it.
          </p>
        </div>

        <div className="bg-blue-100 border rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-2">Posting to the Feed</h2>
          <p className="text-lg">
            Once you have your question and AI-generated answer ready, click the
            "Create" button on the Create Post page. This will post your
            question and answer to the Feed page, where other users can see and
            interact with it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
