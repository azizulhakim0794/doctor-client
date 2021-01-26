import React from 'react';
import BlogsContent from '../BlogsContent/BlogsContent';
import './Blogs.css'
import Ibrahim from '../../../../image/Imran.png'
const BlogData =[
    {
        name: 'Ibrahim Han',
        title: 'Check at least a doctor in a year for your teeth',
        date :'Sun Jan 24 2021',
        img : Ibrahim,
        id:'01',
        details:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptates ipsum assumenda rem ratione pariatur illo tempore dolore debitis dicta amet, minima facilis numquam enim culpa dolor at laudantium optio!'
    },
    {
        name: 'Ibrahim Han',
        title: 'Check at least a doctor in a year for your teeth',
        date :'Sun Jan 24 2021',
        img : Ibrahim,
        id:'02',
        details:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptates ipsum assumenda rem ratione pariatur illo tempore dolore debitis dicta amet, minima facilis numquam enim culpa dolor at laudantium optio!'
    },
    {
        name: 'Ibrahim Han',
        title: 'Check at least a doctor in a year for your teeth',
        date :'Sun Jan 24 2021',
        img : Ibrahim,
        id:'03',
        details:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptates ipsum assumenda rem ratione pariatur illo tempore dolore debitis dicta amet, minima facilis numquam enim culpa dolor at laudantium optio!'
    },
]


const Blogs = () => {
    return (
        <div className="blog-full">
           <h5 className="text-center text-mix">OUR BLOGS</h5>
           <h1 className="text-center">From Our Blog News</h1><br/><br/>
           <div className="container d-flex justify-content-center">
           <div className="row">
           {
               BlogData.map(blog=> <BlogsContent blog={blog} key={blog.id}/>)
           }
           </div>
           </div>
        </div>
    );
};

export default Blogs;