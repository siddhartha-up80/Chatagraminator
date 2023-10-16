"use client";

import React, { useState, useEffect } from "react";

const Topics = () => {
  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    // setLoading(true);
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
    // setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-[90vh] bg-gradient-to-r flex items-center justify-center ml-[20vw] md:ml-[0vw]">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg md:shadow-lg">
        <div className="mb-5">
          <h1 className="text-3xl font-semibold">Topics</h1>
        </div>
        <div className="flex flex-wrap -mx-2">
          {allPosts.map((post, index) => (
            <div key={index} className="md:w-1/3 lg:w-1/4 px-2 mb-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="text-xl font-semibold mb-2">
                  {index + 1}. #{post.tag}
                </div>
                {/* Add more content related to the topic if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
