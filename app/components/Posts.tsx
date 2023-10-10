"use client";
import { useState } from "react";
import { Post } from "../lib/interface";
import Card from "./Card";
import { Buttons } from "./Buttons";

type Props = {
  allPosts: Post[];
};
export const Posts = ({ allPosts }: Props) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(allPosts);

  return (
    <div>
      <Buttons setFilteredPosts={setFilteredPosts} allPosts={allPosts} />
      <ul className=" w-full pb-10">
        {filteredPosts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </ul>
    </div>
  );
};
