import React from "react";
import './category.css';
function Category({categories,selectedCategory,onSelectedCategory}){
    return(
        <div className="categories">
            {categories.map(category => (
                <button key={category.id} className={`category-button ${selectedCategory === category.id ? "active" : ""}`} onClick={()=>onSelectedCategory(category.id)}>
                    {category.name}
                </button>))
            }
        </div>
    );
}
export default Category;