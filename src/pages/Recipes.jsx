import RecipeCard from "../components/RecipeCard";
import recipe1 from "../assets/images/recipe1.png";
import recipe2 from "../assets/images/recipe2.png";
import recipe3 from "../assets/images/recipe3.png";
import recipe4 from "../assets/images/recipe4.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import BottomNavigation from "../components/BottomNavigation";


const Recipes = () => {
    return (
        <>
        <div className="px-10 py-10 flex flex-col gap-2">
            <h4 className="pt-4 pb-8 self-center font-bold text-2xl">Search</h4>
            <div className="flex flex-col gap-1">
                <h4 className="text-2xl font-bold">What is in your Kitchen?</h4>
                <p className="pb-4">Enter some ingredients</p>
            </div>
            <div className="flex border p-3 gap-1">
                <MagnifyingGlassIcon height={30} />
                <input type="text" placeholder="type your ingredients" />
            </div>
            <div className="flex-auto pt-4">
                <div className="grid grid-cols-2 gap-5 ">
                    <RecipeCard image={recipe1}
                        name="Chorizo & mozzarella gnocchi bake" />

                    <RecipeCard image={recipe2}
                        name="Coconut & squash curry"
                    />

                    <RecipeCard image={recipe3}
                        name="Huevos Rancheros"
                    />

                    <RecipeCard image={recipe4}
                        name="Black forest Gateau"
                    />
                </div>
            </div>
           
        </div>
        <BottomNavigation />
        </>  
    )
}


export default Recipes