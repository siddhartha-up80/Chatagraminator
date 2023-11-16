import Link from "next/link";
import { useState } from "react";

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
  setAiAnswer,
}) => {
  const [aiAnswerLoading, setAiAnswerLoading] = useState(false);
  const [answer, setAnswer] = useState("");

  const gpt = async () => {
    setAiAnswerLoading(true);

    try {
      const response = await fetch("/api/gpt", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setAiAnswer(data.completion);
        setAnswer(data.completion);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setAiAnswerLoading(false);
    }
  };

  return (
    <section className="flex-start flex-col ml-36 mr-5">
      <h1 className="text-5xl text-left">
        <span className="">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        Write your question in the textarea and click AI answer to generate response with AI and then share with community
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 md:w-full max-w-2xl flex flex-col flex-wrap gap-7 bg-blue-50 px-10 py-5 rounded-md"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Q/A Post
          </span>

          <textarea
            value={`${post.prompt}${
              answer ? `\n\nAI Answer: \n${answer}` : ""
            }`}
            // value={`${post.prompt}`}
            onChange={(e) =>
              setPost({
                ...post,
                prompt: e.target.value,
              })
            }
            placeholder="Write your post here"
            required
            disabled={answer}
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Write your topic name{" "}
            <span className="font-normal">
              (product, webdevelopment, idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="Your Topic"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <div
            id="gpt"
            disabled={submitting}
            onClick={gpt}
            className="px-5 py-1.5 text-sm mb-5 bg-black rounded-full text-white mt-5 cursor-pointer"
          >
            {aiAnswerLoading ? "Loading..." : "AI Answer"}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}ing...` : "Share"}
          </button>
        </div>
      </form>

      {/* {aiAnswer && (
        <div>
          <h2>AI Answer:</h2>
          <p>{aiAnswer}</p>
        </div>
      )} */}
    </section>
  );
};

export default Form;
