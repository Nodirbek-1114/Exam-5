import './index.css'
import heart from '../../assets/images/heart.svg';
import cart from '../../assets/images/arava.svg';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setCategory } from '../../redux/product';
import menu from '../../assets/images/menu.svg';


const Header = () => {
    const selector = useSelector((state => state.products.array));
    const counter = useSelector(state => state.products.counter);
    const dispatch = useDispatch();
    const [categories, setCategories] = useState()
    const handleChange = (e) => {
        dispatch(setCategory(e.target.value))
    }
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/categories`)
            .then(res => {
                setCategories(res.data)
            })
    }, []);

    return (
        <div className='flex justify-between items-center bg-[#EAEAEA] h-[60px] container'>
            <div className="header__left w-full flex items-center justify-between">
                <Link to='/' className="header__logo font-bold text-2xl text-[#101010">QPICK</Link>
                <select onChange={(e) => handleChange(e)} className='hidden md:block mr-auto outline-none text-[#101010] text-sm font-medium px-4 bg-transparent' defaultValue={"Maxsulotni turini tanlang"}>
                    <option value="All Categories" className='p-4' >All Categories</option>
                    {
                        categories?.map(category => {
                            return <option value={category} key={category} className='outline-none font-meium text-base'>{category} </option>
                        })
                    }
                </select>
                <div className="block md:hidden flex gap-12">
                    <Link to='/cart'><span className='cart__wrap'>{selector.length}</span><img src={cart} alt="cart icon" className='cursor-pointer' /></Link>
                    <img src={menu} alt="menu icon" className='cursor-pointer' />
                </div>
            </div>
            <div className="header__right hidden md:block md:flex items-center gap-[45px]">
                <div><span className='heart__wrap'>{counter}</span><img src={heart} alt="heart icon" /></div>
                <Link to='/cart' ><span className='cart__wrap'>{selector.length}</span><img src={cart} alt="cart icon" /></Link>
            </div>
        </div>
    );
};

export default Header;