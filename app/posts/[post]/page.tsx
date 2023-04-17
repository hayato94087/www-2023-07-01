import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowUpIcon } from "@heroicons/react/24/outline"
import { allPosts } from "@/.contentlayer/generated"
import Mdx from "@/app/mdx-wrapper"
export function generateMetadata({ params }: { params: { post: string } }) {
  const post = allPosts.find(
    (post) => post.url.slice("/posts/".length) === params.post
  )
  if (!post) {
    return {}
  }
  return {
    title: post.title,
  }
}

export default function Page({ params }: { params: { post: string } }) {
  const post = allPosts.find(
    (post) => post.url.slice("/posts/".length) === params.post
  )
  if (!post) {
    return notFound()
  }
  const { code } = post.body

  return (
    <>
      <Link
        href="/posts"
        className="mb-2 flex items-center font-sans text-sm text-red-600 no-underline">
        <ArrowUpIcon className="mr-1 h-4 w-4" />
        <u>All posts</u>
      </Link>
      <Mdx>{code}</Mdx>
    </>
  )
}