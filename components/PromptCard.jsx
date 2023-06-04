"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import {
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      {/* <div className="prompt_card">
        <div className="flex justify-between items-start gap-5">
          <div
            className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
            onClick={handleProfileClick}
          >
            <Image
              src={post.creator.image}
              alt="user_image"
              width={40}
              height={40}
              className="rounded-full object-contain"
            />

            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                {post.creator.username}
              </h3>
              <p className="font-inter text-sm text-gray-500">
                {post.creator.email}
              </p>
            </div>
          </div>

          <div className="copy_btn" onClick={handleCopy}>
            <Image
              src={
                copied === post.prompt
                  ? "/assets/icons/tick.svg"
                  : "/assets/icons/copy.svg"
              }
              alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
              width={12}
              height={12}
            />
          </div>
        </div>

        <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
        <p
          className="font-inter text-sm blue_gradient cursor-pointer"
          onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
          #{post.tag}
        </p>

        {session?.user.id === post.creator._id && pathName === "/profile" && (
          <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
            <p
              className="font-inter text-sm green_gradient cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className="font-inter text-sm orange_gradient cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        )}
      </div> */}

      {/* Feed card */}
      <div className="flex border-b border-solid border-grey-light">
        <div className="w-1/8 text-right pl-3 pt-3">
          <div>
            <i className="fa fa-thumb-tack text-teal mr-2" />
          </div>
        </div>
        <div className="w-7/8 p-3 pl-0">
          <div className="flex justify-between">
            <div onClick={handleProfileClick}>
              <div className="flex">
                <Image
                  src={post.creator.image}
                  alt="user_image"
                  width={40}
                  height={40}
                  className="rounded-full object-contain"
                />
                <div className="ml-2 cursor-pointer">
                  <div className="font-bold">
                    <div onClick={handleProfileClick} className="text-black">
                      {post.creator.username}
                    </div>
                  </div>
                  <div className="text-grey-dark">{post.creator.email}</div>
                </div>
              </div>
              {/* <span className="text-grey-dark">15 Dec 2017</span> */}
            </div>
            <div>
              
            </div>
          </div>
          <div>
            <div className="mb-4">
              <div className="mb-6 flex justify-end">
                {/* <span>🎉 Tailwind CSS v0.4.0 is out!</span> */}
                <span className="flex justify-end items-center gap-2">
                  <span>
                    <WhatsappShareButton url={post.prompt}>
                      <WhatsappIcon
                        size={27}
                        style={{ borderRadius: "100px", marginTop: "3px" }}
                      />
                    </WhatsappShareButton>
                  </span>

                  <span>
                    <LinkedinShareButton url={post.prompt}>
                      <LinkedinIcon
                        size={27}
                        style={{ borderRadius: "100px", marginTop: "3px" }}
                      />
                    </LinkedinShareButton>
                  </span>

                  <span
                    className="copy_btn flex justify-center items-center"
                    onClick={handleCopy}
                  >
                    <Image
                      src={
                        copied === post.prompt
                          ? "/assets/icons/tick.svg"
                          : "/assets/icons/copy.svg"
                      }
                      alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
                      width={12}
                      height={12}
                    />
                  </span>
                </span>
              </div>

              <p className="mb-6">{post.prompt}</p>
              {/* <p className="mb-4">
                <Link href="#" className="text-teal">
                  github.com/tailwindcss/ta...
                </Link>
              </p> */}
              <p>
                <div className="w-full h-72 bg-center">
                  <img
                    src={`https://source.unsplash.com/random/900×700/?${post.tag}`}
                    alt="tweet image"
                    className="object-cover w-full h-full border border-solid border-grey-light rounded-sm"
                  />
                </div>
              </p>
            </div>
          </div>
          <div className="pb-2">
            <span className="flex justify-center items-center">
              {session?.user.id === post.creator._id &&
                pathName === "/profile" && (
                  <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
                    <p
                      className="font-inter text-sm green_gradient cursor-pointer"
                      onClick={handleEdit}
                    >
                      Edit
                    </p>
                    <p
                      className="font-inter text-sm orange_gradient cursor-pointer"
                      onClick={handleDelete}
                    >
                      Delete
                    </p>
                  </div>
                )}
            </span>
            <span>
              <p
                className="font-inter text-sm blue_gradient cursor-pointer"
                onClick={() => handleTagClick && handleTagClick(post.tag)}
              >
                #{post.tag}
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* Feed card */}
    </>
  );
};

export default PromptCard;
