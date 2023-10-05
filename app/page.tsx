import Link from "next/link";
import { Post } from "./lib/interface";
import { client } from "./lib/sanity";
import { urlFor } from "./lib/sanityImageUrl";
import Image from "next/image";

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

  if (!data) return <div>Loading...</div>;

  return (
    <div className=" divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Trekking Journal for eSol
        </h1>
      </div>

      <ul style={{ columnCount: 2 }}>
        {data.map((post) => (
          <li key={post._id} style={{ display: "block" }} className="py-4">
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
