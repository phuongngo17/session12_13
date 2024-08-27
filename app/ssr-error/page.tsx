import React from 'react'

interface PageProps{
    error?: string;
}
export default function page({ error }: PageProps) {
    if (error) {
        return (
            <div>
                <h1>Xử lý lỗi với SSR</h1>
                <p>Lỗi: {error}</p>
            </div>
        );
    }
    return (
        <div>
            <h1>Xử lý lỗi với SSR</h1>
            <p>Xảy ra lỗi khi lấy dữ liệu </p>
        </div>
    )
}
export async function getServerProps() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/nonexistent-url")
        const data = await res.json();
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.log("lỗi xử lý",error);
        return {
            props: {
                error: "đã xảy ra lỗi"
            },
        };
    }

}
