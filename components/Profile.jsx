import PromptCard from "./PromptCard";
import "./style.css";
import { useSession } from "next-auth/react";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
// console.log(data);
  return (
    <div className="w-screen ml-20 md:ml-0">
      <main className="bg-opacity-25">
        <div className="lg:w-8/12 lg:mx-auto mb-8">
          <div>
            <header className="flex flex-wrap items-center p-4 md:py-8">
              <div className="md:w-3/12 md:ml-16">{/* profile image */}</div>
              {/* profile meta */}
              <div className="w-8/12 md:w-7/12 ml-4">
                <div className="md:flex md:flex-wrap md:items-center mb-4">
                  <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                    {name} Profile
                  </h2>
                  {/* badge */}
                  <span
                    className="inline-block fas fa-certificate fa-lg text-blue-500 
                         relative mr-6 text-xl transform -translate-y-2"
                    aria-hidden="true"
                  >
                    <i
                      className="fas fa-check text-white text-xs absolute inset-x-0
                         ml-1 mt-px"
                    />
                  </span>
                </div>

                {/* user meta form medium screens */}
                <div className="hidden md:block">
                  <h1 className="font-semibold">{session?.user.name}</h1>
                  <span>{session?.user.email}</span>
                </div>
              </div>
              {/* user meta form small screens */}
              <div className="md:hidden text-sm my-2">
                <h1 className="font-semibold">{session?.user.name}</h1>
                <span>{session?.user.email}</span>
              </div>
            </header>
            {/* posts */}
            <div className="px-px md:px-3">
              {/* user following for mobile only */}
              <ul
                className="flex md:hidden justify-around space-x-8 border-t 
          text-center p-2 text-gray-600 leading-snug text-sm"
              >
                <li>
                  <span className="font-semibold text-gray-800 block">
                    {data.length}
                  </span>
                  posts
                </li>
              </ul>

              <ul
                className="flex items-center justify-around md:justify-center space-x-12  
              uppercase tracking-widest font-semibold text-xs text-gray-600
              border-t"
              >
                <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                  <a className="inline-block p-3" href="#">
                    <i className="fas fa-th-large text-xl md:text-xs" />
                    <span className="hidden md:inline">
                      {" "}
                      {data.length} post
                    </span>
                  </a>
                </li>
              </ul>
              {/* flexbox grid */}
              <div className="">
                {/* column */}

                <div className="mt-10">
                  {data.map((post) => (
                    <PromptCard
                      key={post._id}
                      post={post}
                      handleEdit={() => handleEdit && handleEdit(post)}
                      handleDelete={() => handleDelete && handleDelete(post)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
