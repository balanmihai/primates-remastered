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
    <div className=" divide-gray-200 dark:divide-gray-700 w-full">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <div className="mx-auto py-20 lg:py-20">
          <div className="">
            <h1 className="text-4xl font-bold tracking-tight  dark:text-teal-500 sm:text-6xl">
              Adventure Journal
            </h1>
            <p className="mt-6  max-w-2xl text-lg leading-8 dark:text-gray-200">
              We love being active and it happens to be really contagious! Check
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

      {/* <div
        className="absolute -z-10 inset-x-0 transform-gpu overflow-hidden blur-3xl xl:-top-12 sm:-top-20"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#48b248] to-teal-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}

      <Posts allPosts={items} />
    </div>
  );
}
