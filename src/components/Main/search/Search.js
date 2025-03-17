import React, {useState} from "react"
import './search.css'
import '../productCards/productCards.css'
import '../category/category.css'
import {products,categories} from './data'
import Category from '../category/Category'
import ProductCards from '../productCards/ProductCards'


function Search(){
    const[searchTerm,setSearchTerm] = useState("")

    const handleChange = (event) =>{
        setSearchTerm(event.target.value)
    }
    const filteredProducts = products.filter(products => products.name.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const [selectedCategory, setSelectedCategory] = useState(null)

    const viewProducts = selectedCategory ? filteredProducts.filter(product => product.categoryId === selectedCategory) : filteredProducts

    const handleCategoryClick = (categoryId) => {
        if (selectedCategory === categoryId) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(categoryId);
        }
    };

    return(
        <div>
            <input type="text" placeholder="Поиск" value={searchTerm} onChange={handleChange} className="search"/>
            <Category categories={categories} selectedCategory={selectedCategory} onSelectedCategory={handleCategoryClick} />
            <div className="productList"> 
                { 
                    viewProducts.length > 0 ? (
                        viewProducts.map(product => (<ProductCards key = {product.id} product={product} />))
                    ) : (<p>Нет результатов</p>)
                }
            </div>
        </div>
    );
}
export default Search;