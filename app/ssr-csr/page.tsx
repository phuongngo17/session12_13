"use client"
import React, { useState, useEffect } from 'react';

export default function Page() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const newData = await res.json();
            setData(newData);
        };
        fetchData();
    }, []);

    const handleRefresh = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const newData = await res.json();
        setData(newData);
    };

    return (
        <div>
            <h1>Danh sách bài viết với refresh</h1>
            <button onClick={handleRefresh}>Refresh</button>
            <ul>
                {data.map((item:any) => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body.slice(0, 100)}...</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}