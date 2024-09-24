/* import React from 'react';

interface Post {
    id: number;
    title: string;
}

interface MyComponentState {
    data: Post[] | null;
    isLoading: boolean;
}

class MyComponent extends React.Component<object, MyComponentState> {
    constructor(props: object) {
        super(props);
        this.state = {
            data: null,
            isLoading: true
        };
    }

    componentDidMount() {
        // ดึงข้อมูลจาก API เมื่อ component ถูก mount
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((data: Post[]) => {
                this.setState({ 
                    data: data, 
                    isLoading: false 
                });
            });
    }

    render() {
        const { data, isLoading } = this.state;

        return (
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        {data && data.map(post => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default  MyComponent;
 */

import React, { useState, useEffect } from 'react';

interface Post {
    id: number;
    title: string;
}

// if not use React.FC we will get this instead 
/* const MyComponent2: ({id,title}: Post) =>{

} */
const MyComponent: React.FC = () => {
    const [data, setData] = useState<Post[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        // ดึงข้อมูลจาก API เมื่อ component ถูก mount
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((data: Post[]) => {
                setData(data);
                setIsLoading(false);
            });
    }, []); // useEffect ที่ทำงานเฉพาะตอน mount เท่านั้น

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data && data.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyComponent;
