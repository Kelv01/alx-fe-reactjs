import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  const [page, setPage] = useState(1);

  // Fetch function with pagination
  const fetchPosts = async (page) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );
    return res.json();
  };

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    keepPreviousData: true, // 👈 required for caching demo
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Posts (Page {page})</h2>
      <ul className="space-y-2">
        {data?.map((post) => (
          <li key={post.id} className="p-3 border rounded">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 mt-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={() => setPage((old) => old + 1)}
        >
          Next
        </button>
      </div>

      {isFetching ? <p className="text-sm text-gray-500">Updating...</p> : null}
    </div>
  );
}

export default PostsComponent;
