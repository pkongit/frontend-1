import { useState, useEffect } from 'react';
import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"
import axios from 'axios'; 

export const FullBlog = ({ blog }: {blog: Blog}) => {
    const [randomJoke, setRandomJoke] = useState<{ setup: string; punchline: string }>({ setup: '', punchline: '' });

    useEffect(() => {
        const fetchRandomJoke = async () => {
            try {
                const response = await axios.get('https://official-joke-api.appspot.com/jokes/random');
                const { setup, punchline } = response.data;
                setRandomJoke({ setup, punchline });
            } catch (error) {
                console.error('Error fetching random joke:', error);
            }
        };

        fetchRandomJoke();
    }, []);
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Post on 2nd December 2023
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                            {randomJoke.setup} {randomJoke.punchline}
                            </div>
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>
    </div>
}