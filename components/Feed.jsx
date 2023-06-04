"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layoutss'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  //  to check no. of items

const numPrompts = allPosts.length;
const uniqueTags = [...new Set(allPosts.map((post) => post.tag))];
const numTags = uniqueTags.length;
const uniqueCreators = [...new Set(allPosts.map((post) => post.creator._id))];
const numCreators = uniqueCreators.length;

  return (
    <section className="feedss ">
      {/* no of post bar */}
      <div className="w-full justify-center flex items-center">
        <ul className="list-reset flex">
          <li className="text-center py-3 px-4 border-b-2 border-solid border-transparent border-teal">
            <Link
              href="#"
              className="text-grey-darker no-underline hover:no-underline"
            >
              <div className="text-sm font-bold tracking-tight mb-1">
                Prompts
              </div>
              <div className="text-lg tracking-tight font-bold text-teal">
                {numPrompts}
              </div>
            </Link>
          </li>
          <li className="text-center py-3 px-4 border-b-2 border-solid border-transparent hover:border-teal">
            <Link
              href="#"
              className="text-grey-darker no-underline hover:no-underline"
            >
              <div className="text-sm font-bold tracking-tight mb-1">Tags</div>
              <div className="text-lg tracking-tight font-bold hover:text-teal">
                {numTags}
              </div>
            </Link>
          </li>
          <li className="text-center py-3 px-4 border-b-2 border-solid border-transparent hover:border-teal">
            <Link
              href="#"
              className="text-grey-darker no-underline hover:no-underline"
            >
              <div className="text-sm font-bold tracking-tight mb-1">Users</div>
              <div className="text-lg tracking-tight font-bold hover:text-teal">
                {numCreators}
              </div>
            </Link>
          </li>
         
        </ul>
      </div>
      {/* no of post bar */}

      <form className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search for Link tag or Link username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer w-full "
        />
      </form>

      {/* feed */}

      <div>
        <div className="container mx-auto flex flex-col lg:flex-row mt-3 text-sm leading-normal">
          <div className="w-full  bg-white mb-4">
            <div className="p-3 text-lg font-bold border-b border-solid border-grey-light">
              <Link
                href="#"
                className="text-black mr-6 no-underline hover-underline"
              >
                Posts
              </Link>
             
            </div>
            <div className="md:w-5/6 -mt-10">
             
              {/* All Prompts */}
              {searchText ? (
                <PromptCardList
                  data={searchedResults}
                  handleTagClick={handleTagClick}
                />
              ) : (
                <PromptCardList
                  data={allPosts}
                  handleTagClick={handleTagClick}
                />
              )}
            </div>
          </div>
          <div className="w-full lg:w-1/4 pl-4 ">
            <div className="bg-white p-3 mb-3 ">
              <div className="mb-3 pb-4 border-b-2 border-solid  hover:border-teal">
                <span className="text-lg font-bold ">Topics</span>
              </div>
              {allPosts.map((post) => (
                <div>
                  <div className="mb-3 leading-tight">
                    <div>
                      <button
                        onClick={() =>
                          handleTagClick && handleTagClick(post.tag)
                        }
                        className="text-teal font-bold"
                      >
                        #{post.tag}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3 text-xs">
        <span className="mr-2">
          <Link href="/" className="text-grey-darker">
            © 2023 Chatagraminator
          </Link>
        </span>
        <span className="mr-2">
          <Link href="/about" className="text-grey-darker">
            About
          </Link>
        </span>
        <span className="mr-2">
          <Link href="/help" className="text-grey-darker">
            Help Center
          </Link>
        </span>
      </div>
      {/* end of twitter feed */}
    </section>
  );
};

export default Feed;
