import React, {useState} from 'react'
import './productCards.css'
import '../search/data'

const ProductCards = ({product}) => {
    const [quanity, setQuanity] = useState(0)

    const handleAddToCart = () => {
        setQuanity(1)
    }

    const handleIncreaseQuanity = () => {
        setQuanity(quanity + 1)
    }

    const handleDecreaseQuanity = () => {
        if (quanity > 1) {
            setQuanity(quanity - 1)
        } else if (quanity === 1){
            setQuanity(0)
        }
    }

    return (
        <div className='productCard'>
                <img className='productImage'/>
                <p className='productName'>{product.name}</p>
                {quanity > 0 ? (
                    <p className="quanityControls">
                        <button className="decrease" onClick={handleDecreaseQuanity}>−</button>
                        <p>{quanity}</p>
                        <button className="increase" onClick={handleIncreaseQuanity}>+</button>
                    </p>
                    ) : (
                    <p><button className='addToCart' onClick={handleAddToCart}>+</button></p>
                    )
                }
        </div>
    )
}

export default ProductCards;