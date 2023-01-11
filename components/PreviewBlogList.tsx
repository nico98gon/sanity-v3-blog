'use client';

import { usePreview } from "../lib/sanity.preview";
import BloqList from "./BlogList";

type Props = {
    query: string;
};

export default function PreviewBlogList({ query }: Props) {
    const posts = usePreview(null, query);
    // console.log("LOADING posts...", posts);
    return <BloqList posts={posts} />;
}