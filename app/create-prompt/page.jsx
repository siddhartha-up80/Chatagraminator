"use client"

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });
  const [aiAnswer, setAiAnswer] = useState("");

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add the AI answer to the post.prompt value
      const updatedPrompt = `${post.prompt}. ${
        aiAnswer ? `\n\nAI Answer: \n${aiAnswer}` : ""
      }`;

      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: updatedPrompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
      aiAnswer={aiAnswer}
      setAiAnswer={setAiAnswer}
    />
  );
};

export default CreatePrompt;
