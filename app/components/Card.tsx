import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/sanityImageUrl";
import { Post } from "../lib/interface";
import Image from "next/image";

type Props = {
  post: Post
}

function Card({post}: Props) {
  return (
        <li key={post._id} className="py-4">
          <article className="">
            <Link
              href={`/post/${post.slug.current}`}
              prefetch
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Image
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={urlFor(post.image).url()}
                alt={post.title}
                width={1000}
                height={1000}
                placeholder="blur"
                blurDataURL={urlFor(post.image).url()}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {post.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {post.overview}
                </p>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6h.008v.008H6V6z"
                    />
                  </svg>
                  <p className="pl-2">{post.category}</p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>

                  <p className="pl-2">{post.crew.length}</p>
                </div>
                <div className="mt-2">
                  <p className="text-base font-medium leading-6 text-teal-500">
                    {new Date(post._createdAt).toISOString().split("T")[0]}
                  </p>
                </div>
              </div>
            </Link>
          </article>
        </li>
  );
}

export default Card;
