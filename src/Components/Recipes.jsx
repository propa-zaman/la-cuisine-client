import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import useTitle from '../hooks/useTitle';

const Recipes = () => {
    const chef = useLoaderData();
    const { id, name, experience, num_recipes, likes, image, description } = chef;
    const recipes = chef.recipes;
    useTitle('Recipes');

    return (
        <div>
            <div >
                <div className="w-8/12 mx-auto text-center">
                    <div className="avatar mt-4">
                        <div className="w-64 mask mask-squircle">
                            <img src={image} />
                        </div>
                    </div>
                    <div className="md:w-10/12 mx-auto mb-10">
                        <h2 className="text-5xl my-9 font-bold">{name}
                            <div className="badge badge-outline p-3 ml-5 h-5 gap-2 ">
                                <FaThumbsUp></FaThumbsUp>{likes}</div>
                        </h2>


                        <p>
                            <span className="font-bold">About: </span>
                            {description}
                        </p>
                        <p className="font-semibold mt-4">
                            Number of recipes: <span className="font-bold">{num_recipes}</span>{" "}

                        </p>
                        <p className="font-semibold">
                            Experience:{" "}
                            <span className="font-bold"> {experience}</span>
                        </p>
                    </div>
                </div>
                <hr />
                <div>
                    <h2 className="font-bold text-4xl text-center my-10 ">My Recipes</h2>
                    <div className="md:grid grid-cols-2 gap-10 mx-auto w-10/12">
                        {recipes.map((recipe) => (
                            <RecipeCard key={recipe.recipe_id} recipe={recipe}></RecipeCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;