import React from 'react'
async function getUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}
export default async function page() {
    const users = await getUser();
  return (
    <div>
          <h1>Danh sách bài viết </h1>
          <ul>
              {users.map((item: any) => (
                  <li key={item.id}>
                      <h2>{item.id}</h2>
                      <p>{item.body.slice(0, 100)}</p>
                  </li>
              ))}
          </ul>
    </div>
  )
}
