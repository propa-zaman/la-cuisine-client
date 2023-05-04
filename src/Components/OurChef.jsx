import React, { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";



const OurChef = () => {
    const chefs = useLoaderData();
    return (
        <div className="container mx-auto">
            <h2 className="md:text-5xl text-2xl my-10 text-center font-bold text-secondary-focus">
                Chefs of La Cuisine
            </h2>

            <div className="container md:grid grid-cols-3  gap-10 md:my-20">
                {chefs.map((chef) => (
                    <ChefCard key={chef.id} chef={chef}></ChefCard>
                ))}
            </div>
        </div>
    );
};

export default OurChef;