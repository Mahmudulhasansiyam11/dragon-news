import { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch('/categories.json')
.then(res => res.json());

const Categories = () => {
    const categories = use(categoriesPromise);
    // console.log(categories);
    return (
        <div>
            <h3 className='font-bold'>All Categories ({categories.length})</h3>
            <div className='grid grid-cols-1 mt-5 space-y-3'>
                {
                    categories.map(category => <NavLink 
                    key={category.id}
                    className={"btn bg-base-100 hover:bg-base-200 font-semibold text-accent"}
                    to={`/category/${category.id}`}
                    >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;