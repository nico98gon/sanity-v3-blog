import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import { RichTextComponents } from "../../../../components/RichTextComponents";


type Props = {
    params: {
        slug: string;
    };
};

export const revalidate = 30; //* revalidate this page every 30 seconds

//* this allow to generate static pages
export async function generateStaticParams() {
    const query = groq`*[_type=='post']
    {
        slug
    }`;

    const slugs = await client.fetch(query);
    const slugRoutes = slugs.map((slug: any) => slug.slug.current);

    return ( slugRoutes.map((slug: any) => ({
        slug,
    })) );
}

export default async function Post({ params: {slug}}: Props) {
    const query = groq`
        *[_type=='post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `

    const post = await client.fetch(query, { slug });

    // console.log(post);

    return (
        <article className="px-10 pb-28">
            <section className="space-y-2 border border-[#7AB0A] text-white">
                <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                    <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                        <Image 
                            className="object-cover object-center mx-auto"
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            fill
                        />
                    </div>

                    <section className="p-5 bg-Nicode-rose w-full">
                        <div className="flex flex-col md:flex-row justify-between gap-y-5">
                            <div>
                                <h1 className="text-4xl font-extrabold text-gray-900">{post.title}</h1>
                                
                                <p className="text-gray-900">
                                    {new Date(post._createAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Image 
                                    className="rounded-full"
                                    src={urlFor(post.author.image).url()}
                                    alt={post.author.name}
                                    height={40}
                                    width={40}
                                />

                                <div className="w-64">
                                    <h3 className="text-lg font-bold text-gray-900">{post.author.name}</h3>
                                    <div>{/* TODO: Author BIO */}</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="italic pt-10 text-gray-900">{post.description}</h2>
                            <div className="flex items-center justify-end mt-auto space-x-2 bg-gray-800">
                                {post.categories.map((category: any) => (
                                    <p 
                                        key={category._id} 
                                        className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold mt-4 text-gray-900"
                                    >
                                        {category.title}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <PortableText value={post.body} components={RichTextComponents} />
        </article>
    );
}
