import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [slug])

  // console.log('relatedPost :>> ', relatedPosts)

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="mb-4 flex w-full items-center">
          <div className="w-16 flex-none">
            <img
              src={post.featuredImage.url}
              className="rounded-full align-middle"
              height="60px"
              width="60px"
              alt={post.title}
            />
          </div>
          <div className="ml-4 flex-row">
            <p className="font-xs text-gray-500">
              {moment(post.createdAt).format('MMM DD, YYY')}
            </p>
            <Link
              classNam="text-md"
              key={post.title}
              href={`/post/${post.slug}`}
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
