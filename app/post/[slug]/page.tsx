import Weather from "@/app/components/Weather";
import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query, { cache: "no-store" });

  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
    },
  };

  return (
    <div className="xl:divide-y xl:divide-zinc-200 xl:dark:divide-zinc-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10">
            <div>
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 pb-3">
                {data.title}
              </h1>

              <p className="text-base font-medium leading-6 text-teal-500">
                {new Date(data._createdAt).toISOString().split("T")[0]}
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="divide-y divide-zinc-200 pb-7 dark:divide-zinc-700 xl:divide-y-0">
        <div className="divide-y divide-zinc-200 dark:divide-zinc-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
            <PortableText
              value={data.content}
              components={PortableTextComponent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
