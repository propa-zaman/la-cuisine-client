import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from 'react-lazyload';
import { Link } from "react-router-dom";

const ChefCard = ({chef}) => {
    const {id, name, experience, num_recipes, likes, image, description} = chef;
    return (
        <div className='container mx-auto'>
            
                <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                    <figure>
                        <LazyLoad
                            className="LazyLoad"
                            width={400}
                            height={200}
                            offset={300}
                            threshold={0.75}
                        >
                            <img className="h-72 w-full object-cover" src={image} alt="Chef" />
                        </LazyLoad>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>
                            Experience: <span>{experience}</span>
                        </p>
                        <p>
                            Number of Recipes: <span>{num_recipes}</span>
                        </p>

                        <div className="card-actions justify-between items-center">
                            <Link to={`/recipes/${id}`}>
                                <button className="btn btn-secondary">View Recipes</button>
                            </Link>

                            <div className="badge badge-outline gap-2">
                                <FaThumbsUp></FaThumbsUp>
                                <span>{likes}</span>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default ChefCard;