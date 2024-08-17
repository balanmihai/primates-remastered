import { Post } from "./lib/interface";
import { client } from "./lib/sanity";
import { useState } from "react";
import { Buttons } from "./components/Buttons";
import Card from "./components/Card";
import { Posts } from "./components/Posts";

export const revalidate = 0;
export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";
async function getData() {
  const query = `*[_type == "post"]`;
  const data = await client.fetch(query, { cache: "no-store" });
  return data;
}

export default async function IndexPage() {
  const data = (await getData()) as Post[];
  // const [items, setItems] = useState<Post[]>(data);
  const items = data;
  const setItems = (newItems: any) => {};
  const categoryItems = data
    .map((val) => val.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const filterItems = (cat: string) => {
    const newItems = data.filter((newval) => newval.category === cat);
    setItems(newItems);
  };
  return (
    <div className=" divide-zinc-200 dark:divide-zinc-700 w-full">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <div className="mx-auto py-20 lg:py-20">
          <div className="">
            <h1 className="text-4xl font-bold tracking-tight  dark:text-teal-500 sm:text-6xl">
              Adventure Journal
            </h1>
            <p className="mt-6  max-w-2xl text-lg leading-8 dark:text-zinc-200">
              Love being active and it happens to be really contagious! Check
              out and let yourself be inspired by the past activities or join an
              upcoming one.
            </p>
            {/* <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-teal-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white 
                hover:text-teal-500
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-teal-500"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <Posts allPosts={items} />
    </div>
  );
}
