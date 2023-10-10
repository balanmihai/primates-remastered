import Link from "next/link";
import { Post } from "./lib/interface";
import { client } from "./lib/sanity";
import { urlFor } from "./lib/sanityImageUrl";
import Image from "next/image";
import Weather from "./components/Weather";

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
  console.log("data", data);

  if (!data) return <div>Loading...</div>;

  return (
    <div className=" divide-gray-200 dark:divide-gray-700 w-full">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Trekking Journal
        </h1>
        <h5 className="mb-2 text-2xl max-w-2xl tracking-tight text-gray-900 dark:text-white">
          A group of dumb friends wondering around Romania's most pitoresq
          landscapes.
        </h5>
      </div>

      <ul className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-20 w-full pb-10">
        {data.map((post) => (
          <li key={post._id} className="justify-center w-full flex">
            {/* <article className="">
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
                  <div>
                    <p className="text-base font-medium leading-6 text-teal-500">
                      {new Date(post._createdAt).toISOString().split("T")[0]}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-medium">Crew</h2>
                    <div className=" flex justify-between">
                      {post.crew.map((postCrew, id) => (
                        <p key={id} className="py-4">
                          {postCrew}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </article> */}

            <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href={`/post/${post.slug.current}`} prefetch className="">
                <Image
                  className="rounded-t-lg"
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
                    {post.crew.map((postCrew, id) => (
                      <div
                        key={id}
                        data-te-chip-init
                        data-te-ripple-init
                        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-teal-500 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-teal-500 dark:text-neutral-200 mb-3 "
                        data-te-close="true"
                      >
                        {postCrew}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-base font-medium leading-6 text-teal-500">
                      {new Date(post._createdAt).toISOString().split("T")[0]}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
