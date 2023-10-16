import React from 'react'

const Right = () => {
  return (
    <>
      {/* Right */}
      <div className="hidden md:block w-290 lg:w-350 h-screen">
        <div className="flex flex-col fixed overflow-y-auto w-290 lg:w-350 h-screen">
          {/* Search */}
          <div className="relative m-2">
            <div className="absolute text-gray-600 flex items-center pl-4 h-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
              </svg>
            </div>
            <input
              className="w-full bg-gray-200 dark:bg-dim-400 border-gray-200 dark:border-dim-400 text-gray-100 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 font-normal h-9 flex items-center pl-12 text-sm rounded-full border shadow"
              placeholder="Search Twitter"
            />
          </div>
          {/* /Search */}
          {/* What’s happening */}
          <div className="bg-gray-50 dark:bg-dim-700 rounded-2xl m-2">
            <h1 className="text-gray-900 dark:text-white text-md font-bold p-3 border-b border-gray-200 dark:border-dim-200">
              What’s happening
            </h1>
            {/* Trending Topic */}
            <div className="text-blue-400 text-sm font-normal p-3 border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out">
              <h2 className="font-bold text-md text-gray-800 dark:text-white">
                #FreePS5Monday
              </h2>
              <p className="text-xs text-gray-400">29.7K Tweets</p>
            </div>
            {/* /Trending Topic */}
            {/* Trending Topic */}
            <div className="text-blue-400 text-sm font-normal p-3 border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out">
              <h2 className="font-bold text-md text-gray-800 dark:text-white">
                #BTSonGMA
              </h2>
              <p className="text-xs text-gray-400">351K Tweets</p>
            </div>
            {/* /Trending Topic */}
            {/* Trending Topic */}
            <div className="text-blue-400 text-sm font-normal p-3 border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out">
              <h2 className="font-bold text-md text-gray-800 dark:text-white">
                #AstraZeneca
              </h2>
              <p className="text-xs text-gray-400">52.7K Tweets</p>
            </div>
            {/* /Trending Topic */}
            <div className="text-blue-400 text-sm font-normal p-3 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out">
              Show more
            </div>
          </div>
          {/* /What’s happening */}
          {/* Who to follow */}
          <div className="bg-gray-50 dark:bg-dim-700 rounded-2xl m-2">
            <h1 className="text-gray-900 dark:text-white text-md font-bold p-3 border-b border-gray-200 dark:border-dim-200">
              Who to follow
            </h1>
            {/* Twitter Account */}
            <div className="text-blue-400 text-sm font-normal p-3 border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out">
              <div className="flex flex-row justify-between p-2">
                <div className="flex flex-row">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg"
                    alt="Joe Biden"
                  />
                  <div className="flex flex-col ml-2">
                    <h1 className="text-gray-900 dark:text-white font-bold text-sm">
                      Joe Biden
                    </h1>
                    <p className="text-gray-400 text-sm">@JoeBiden</p>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center h-full text-gray-800 dark:text-white">
                    <a
                      href="#"
                      className="text-xs font-bold text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400"
                    >
                      Follow
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /Twitter Account */}
            {/* Twitter Account */}
            <div className="text-blue-400 text-sm font-normal p-3 border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out">
              <div className="flex flex-row justify-between p-2">
                <div className="flex flex-row">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg"
                    alt="Joe Biden"
                  />
                  <div className="flex flex-col ml-2">
                    <h1 className="text-gray-900 dark:text-white font-bold text-sm">
                      Joe Biden
                    </h1>
                    <p className="text-gray-400 text-sm">@JoeBiden</p>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center h-full text-gray-800 dark:text-white">
                    <a
                      href="#"
                      className="text-xs font-bold text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400"
                    >
                      Follow
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /Twitter Account */}
            {/* Loader */}
            <div className="border-b border-gray-200 dark:border-dim-200 p-4 max-w-sm w-full mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-gray-400 h-12 w-12" />
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-gray-400 rounded w-3/4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-400 rounded" />
                    <div className="h-4 bg-gray-400 rounded w-5/6" />
                  </div>
                </div>
              </div>
            </div>
            {/* /Loader */}
            <div className="text-blue-400 text-sm font-normal p-3 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out">
              Show more
            </div>
          </div>
          {/* /Who to follow */}
          <footer>
            <ul className="text-xs text-gray-500 my-4 mx-2">
              <li className="inline-block mx-2">
                <a className="hover:underline" href="#">
                  Terms of Service
                </a>
              </li>
              <li className="inline-block mx-2">
                <a className="hover:underline" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="inline-block mx-2">
                <a className="hover:underline" href="#">
                  Cookie Policy
                </a>
              </li>
              <li className="inline-block mx-2">
                <a className="hover:underline" href="#">
                  Ads info
                </a>
              </li>
              <li className="inline-block mx-2">
                <a className="hover:underline" href="#">
                  More
                </a>
              </li>
              <li className="inline-block mx-2">© 2020 Twitter, Inc.</li>
            </ul>
          </footer>
        </div>
      </div>
      {/* /Right */}
    </>
  );
}

export default Right