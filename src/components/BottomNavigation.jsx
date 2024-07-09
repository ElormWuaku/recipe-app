import { BookmarkIcon, HeartIcon, HomeIcon, PlusIcon } from "@heroicons/react/24/solid"
import { NavLink } from "react-router-dom"

const BottomNavigation = () => {
  return (
    <div className="flex justify-around items-center h-[96px] fixed bottom-0 bg-[#D9D9D9E5] w-full">
        <NavLink to="/recipes">
          <HomeIcon className="size-[24px]"/>
        </NavLink>
        <NavLink to="/categories">
          <BookmarkIcon className="size-[24px]"/>
        </NavLink>
        <NavLink to="/recipes">
          <HeartIcon className="size-[24px]"/>
        </NavLink>
        <NavLink to="/recipes">
          <PlusIcon className="size-[24px]"/>
        </NavLink>
    </div>
  )
}

export default BottomNavigation