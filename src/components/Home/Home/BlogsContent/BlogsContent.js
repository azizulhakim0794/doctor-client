import React from 'react';

const BlogsContent = (props) => {
    const {img, details, name, title, date} = props.blog
    return (
        <div className="col-md-4 blogs">
            <div className="card-footer bg-none border-0 d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="70"/>
                <div>
                    <h6 className="text-mix">{name}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div><br/>
            <div>
                <h4>{title}</h4><br/>
                <p className="text-secondary">{details}</p>
            </div>
        </div>
    );
};

export default BlogsContent;