import React from 'react'
async function getPostData(id:string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}
export default async function page({params}:{params:{id:string}}) {
    const { id } = params;
    const postData = await getPostData(id);
  return (
    <div>
          <h1>chi tiết bài viết</h1>
          <h2>{postData.title}</h2>
          <p>{postData.body}</p>
    </div>
  )
}
