import { categories } from "../utils/category";

const Sidebar = () => {
  return (
    <main className='w-[260px] max-h-[90vh] overflow-y-auto '>
        <ul className="h-full w-full flex flex-col gap-y-4 items-center justify-center">
          {categories.map((cat, i) => (
            <li key={i} className="w-4/5 text-sm font-medium text-white backdrop-blur-sm text-center bg-[rgba(0,0,0,0.22)] py-3  cursor-pointer rounded-lg ">{cat}</li>))}
        </ul>
    </main>
  )
}

export default Sidebar;