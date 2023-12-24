"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Leftbar = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <div className="hidden md:block">
      <div className="w-68 xs:w-88 xl:w-275">
        <div className="flex flex-col justify-between h-screen overflow-hidden xl:pr-3 fixed left-0 md:pl-5 overflow-y-auto w-68 xs:w-88 xl:w-275 bg-white ">
          {/* navbar previous  */}

          {/* navbar previous  */}

          {/* Logo */}
          <div className="flex gap-2 md:pl-1 justify-center items-center md:justify-normal mt-8">
            <Link href="/" className="gap-2 flex-center">
              <p className="logo_text hidden md:flex">Chatagram</p>
            </Link>
          </div>

          {/* /Logo */}

          {/* Nav */}
          <nav className="mt-20 pl-1">
            <Link
              href="/"
              className="flex items-center justify-center xl:justify-start text-blue-400 mb-8 transition duration-350 ease-in-out"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"
                />
              </svg>
              <span className="hidden xl:block ml-4 font-bold text-md">
                Home
              </span>
            </Link>

            <Link
              href="/topics"
              className="flex items-center justify-center xl:justify-start text-gray-800 darkk:text-white hover:text-blue-400 darkk:hover:text-blue-400 mb-8 transition duration-350 ease-in-out"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"
                />
              </svg>
              <span className="hidden xl:block ml-4 font-bold text-md">
                Explore
              </span>
            </Link>

            {/* <Link
              href="#"
              className="flex items-center justify-center xl:justify-start text-gray-800 darkk:text-white hover:text-blue-400 darkk:hover:text-blue-400 mb-8 transition duration-350 ease-in-out"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"
                />
              </svg>
              <span className="hidden xl:block ml-4 font-bold text-md">
                Notifications
              </span>
            </Link> */}
            <Link
              href="/about"
              className="flex items-center justify-center xl:justify-start text-gray-800 darkk:text-white hover:text-blue-400 darkk:hover:text-blue-400 mb-8 transition duration-350 ease-in-out"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                className="h-6 w-6"
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 000 2.5v11a.5.5 0 00.707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 00.78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0016 13.5v-11a.5.5 0 00-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
              <span className="hidden xl:block ml-4 font-bold text-md">
                About
              </span>
            </Link>
            <Link
              href="/help"
              className="flex items-center justify-center xl:justify-start text-gray-800 darkk:text-white hover:text-blue-400 darkk:hover:text-blue-400 mb-8 transition duration-350 ease-in-out"
            >
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1em"
                width="1em"
                className="h-6 w-6"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                  d="M256 80a176 176 0 10176 176A176 176 0 00256 80z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={28}
                  d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296"
                />
                <path d="M270 348 A20 20 0 0 1 250 368 A20 20 0 0 1 230 348 A20 20 0 0 1 270 348 z" />
              </svg>
              <span className="hidden xl:block ml-4 font-bold text-md">
                Help
              </span>
            </Link>
            <Link
              href="/feed"
              className="flex items-center justify-center xl:justify-start text-gray-800 darkk:text-white hover:text-blue-400 darkk:hover:text-blue-400 mb-8 transition duration-350 ease-in-out"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <g>
                  <path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z" />
                  <path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z" />
                </g>
              </svg>
              <span className="hidden xl:block ml-4 font-bold text-md">
                Lists
              </span>
            </Link>
            {session?.user ? (
              <>
                <div className="flex items-center justify-center xl:justify-start text-gray-800 darkk:text-white hover:text-blue-400 darkk:hover:text-blue-400 mb-8 transition duration-350 ease-in-out">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"
                    />
                  </svg>

                  <div className="flex gap-3 md:gap-5">
                    <Link href="/profile">
                      <span className="hidden xl:flex ml-4 font-bold text-md">
                        Profile
                      </span>
                    </Link>
                  </div>
                </div>
              </>
            ) : null}

            {/* <div className="flex items-center justify-center xl:justify-start text-gray-800 darkk:text-white hover:text-blue-400 darkk:hover:text-blue-400 mb-8 transition duration-350 ease-in-out">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <g>
                  <path d="M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z" />
                  <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z" />
                </g>
              </svg>
              <span className="hidden xl:block ml-4 font-bold text-md">
                More
              </span>
            </div> */}
            <div className="mx-auto w-11 h-11 xl:w-auto flex items-center justify-center py-3 rounded-full text-white font-bold font-sm transition duration-350 ease-in-out mb-10">
              {/* {session?.user ? (
                <Link
                  href="/create-prompt"
                  className="black_btn1 mr-2 py-3 px-3 rounded-full bg-blue-400 hover:bg-blue-500"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="block sm:hidden h-6 w-6"
                  >
                    <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z" />
                  </svg>
                </Link>
              ) : null} */}

              <div className="sm:flex hidden">
                {session?.user ? (
                  <div className="flex gap-3 md:gap-5">
                    <Link
                      href="/create-prompt"
                      className="black_btn1 md:bg-blue-400 md:hover:bg-blue-500 px-6 py-2 rounded-md"
                    >
                      Create Post
                    </Link>
                  </div>
                ) : (
                  <>
                    {providers &&
                      Object.values(providers).map((provider) => (
                        <div className="flex flex-col gap-4 mt-10">
                          <button
                            type="button"
                            key={provider.name}
                            onClick={() => {
                              signIn(provider.id);
                            }}
                            className="black_btn1 md:bg-blue-400 md:hover:bg-blue-500 px-6 py-2 rounded-md"
                          >
                            Sign in
                          </button>
                          <Link
                            href="/create-prompt"
                            className="black_btn1 md:bg-blue-400 md:hover:bg-blue-500  px-6 py-2 rounded-md"
                          >
                            Create Post
                          </Link>
                        </div>
                      ))}
                  </>
                )}
              </div>
            </div>
          </nav>
          {/* /Nav */}
          {/* User Menu */}
          <div className="sm:hidden flex relative justify-center items-center">
            {session?.user ? (
              <div className="flex">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  <Image
                    src={session?.user.image}
                    width={37}
                    height={37}
                    className="rounded-full "
                    alt="profile"
                    // onClick={() => setToggleDropdown(!toggleDropdown)}
                  />
                </Link>

                {/* {toggleDropdown && (
                  <div className="dropdown">
                    <Link
                      href="/create-prompt"
                      className="dropdown_link"
                      onClick={() => setToggleDropdown(false)}
                    >
                      Create Prompt
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                      className="mt-5 w-full black_btn"
                    >
                      Sign Out
                    </button>
                  </div>
                )} */}
              </div>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <div className="gap-2 flex flex-col">
                      <button
                        type="button"
                        key={provider.name}
                        onClick={() => {
                          signIn(provider.id);
                        }}
                        className="black_btn"
                      >
                        Sign in
                      </button>

                      <Link
                        href="/create-prompt"
                        className="black_btn !px-1"
                      >
                        Create Post
                      </Link>
                    </div>
                  ))}
              </>
            )}
          </div>
          <div className="w-14 xl:w-full mx-auto mt-auto flex flex-row justify-between  rounded-full hover:bg-blue-50 darkk:hover:bg-dim-800 p-2 cursor-pointer transition duration-350 ease-in-out mb-2">
            <div className="flex flex-row">
              <div className="hidden xl:block flex-col ml-2">
                {session?.user ? (
                  <div className="flex gap-3 md:gap-5">
                    <button
                      type="button"
                      onClick={signOut}
                      className="outline_btn"
                    >
                      Sign Out
                    </button>

                    <Link href="/profile">
                      <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="profile"
                      />
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="hidden xl:block">
              {/* <div className="flex items-center h-full text-gray-800 darkk:text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 mr-2"
                >
                  <g>
                    <path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z" />
                  </g>
                </svg>
              </div> */}
            </div>
          </div>
          {/* /User Menu */}
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
