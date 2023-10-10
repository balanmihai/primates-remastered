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
        <div className="mx-auto max-w-2xl py-36 sm:py-48 lg:py-42">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight  dark:text-teal-500 sm:text-6xl">
              Trekking Journal
            </h1>
            <p className="mt-6 text-lg leading-8 dark:text-gray-200">
              A group of dumb friends wondering around Romania's most pitoresq
              landscapes. Get inspired to do your own or follow us to see how
              we're doing.
            </p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
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

      <div
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
