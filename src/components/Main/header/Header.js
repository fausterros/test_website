import React from "react";
import './header.css';
function Header(){
    const handleProfileClick = () => {
        //логика перехода на выбор столиков/профиль
        console.log('Профиль')
    }
    const handleCartClick = () => {
        //логика перехода в корзину товаров
        console.log('Корзина')
    }
    return(
        <header>
            <div className="profile" onClick={handleProfileClick}>
                <img src="../profileImage.png"/>
                <span>cтолик 7</span>
            </div>
            <div className="cart" onClick={handleCartClick}>
                <img src="cartImage.png"/>
            </div>
        </header>
    );
}
export default Header;