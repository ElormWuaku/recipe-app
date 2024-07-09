import CategoryTile from "../components/CategoryTile";
import { useEffect, useState } from "react";
import axios from "axios";
import BottomNavigation from "../components/BottomNavigation";


export default function Categories() {
    // Define a state to store categories
    const [categories, setCategories] = useState([]);

    // Define a function to get categories
    const getCategories = async () => {
        const response = await axios.get(`${import.meta.env.VITE_RECIPE_API}/categories`);
        setCategories(response.data);
    }

    // Fetch data with useEffect
    useEffect(() => {
        getCategories();
    }, []);
    return (
        <>
            <div className="pt-10 text-center font-serif font-bold text-lg pb-3">
                <h4>Categories</h4>
                {categories.map(category => (
                    <CategoryTile
                        key={category.id}
                        name={category.name}
                        image={`${import.meta.env.VITE_RECIPE_API}/${category.image}`} />
                ))}
            </div>
<BottomNavigation/>
        </>
    );
}
