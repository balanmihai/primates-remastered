import React from "react";
import { Post } from "../lib/interface";

type Props = {
  setFilteredPosts: (posts: Post[]) => void;
  allPosts: Post[];
};

export const Buttons = ({ setFilteredPosts, allPosts }: Props) => {
  const categories = allPosts
    .map((post) => post.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  return (
    <div className="flex gap-6 pb-10">
      {categories.map((category: string) => (
        <button
          className="rounded bg-teal-500 px-10 py-4 text-md font-semibold text-white shadow-sm hover:bg-white hover:text-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() =>
            setFilteredPosts(
              allPosts.filter((post) => post.category === category)
            )
          }
        >
          {category}
        </button>
      ))}
      <button onClick={() => setFilteredPosts(allPosts)}>All</button>
    </div>
  );
};
