import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import { Link } from 'react-router-dom'
import API from '../../api/api';
import iphone from '../../assets/images/iPhone-13.png';
import star from '../../assets/images/star.svg';
import { setCart, setCounter, setProducts } from '../../redux/product';
import heart from '../../assets/images/heart.svg';
import basket from '../../assets/images/arava.svg';
import Loader from '../../components/Loader';
const Products = () => {
    const post = useSelector(state => state.products.productsArr)
    const categoryArr = useSelector(state => state.products.categoryArr)
    const dispatch = useDispatch()
    const [load, setLoad] = useState(true);

    useEffect(() => {
        API.getAll().then((res) => {
            if (res.status === 200) {
                setLoad(false);
                dispatch(setProducts(res.data));
            }
        });
    }, []);
    const cart = (data) => {
        dispatch(setCart(data));
    }

    const counter = (item) => {
        dispatch(setCounter(item));
    }

    if (load) {
        return <h1 className='h-[10vh] my-auto'><Loader /></h1>;
    }

    return (
        <section className='container'>
            <div className="products__top h-56 mb-10 flex justify-center items-center bg-[#101010] rounded-[30px]">
                <h1 className="products__title font-semibold text-3xl center text-white">Аксессуары для <br /> Iphone 13 Pro Max</h1>
                <img src={iphone} alt="iphone image" className='hidden sm:block' />
            </div>

            <div className="flex justify-center mb-6">
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center'>
                    {
                        categoryArr?.length === 0 ? post?.map((item) => {
                            return (
                                <li key={item.id} className='products__card w-full rounded-[30px]'>
                                    <div className="flex items-center justify-between">
                                        <img src={heart} alt="heart icon" onClick={() => { counter(item) }} className='cursor-pointer' />
                                        <img src={basket} alt="cart icon" onClick={() => cart(item)} className='cursor-pointer' />
                                    </div>
                                    <div className="flex flex-col jutify-between mt-1">
                                        <img src={item.image} alt="item.title" className='h-52' />
                                        <div className='mt-4 flex flex-col gap-3'>
                                            <div className="flex justify-between">
                                                <h3 title={item.title} className='text-[#1C1C27] font-semibold text-base'>{item.title.slice(0, 9) + '...'}</h3>
                                                <span className='text-[#FFA542] font-semibold text-base'>{item.price} $</span>
                                            </div>
                                            <div className="flex gap-[10px]">
                                                <img src={star} alt="star icon" />
                                                <span className='text-[#838383] font-semibold text-base'>{item.rating.rate}</span>
                                            </div>
                                            <Link to={`/${item.id}`} className='block w-full bg-gray-400 hover:bg-blue-700 hover:text-white text-center font-semibold py-1 rounded mt-3'>More</Link>
                                        </div>
                                    </div>
                                </li>
                            )
                        }) :
                            categoryArr?.map((item) => {
                                return (
                                    <li key={item.id} className='products__card w-full min-h-[350px] rounded-[30px]'>
                                        <div className="flex items-center justify-between">
                                            <img src={heart} alt="heart icon" onClick={() => { counter(item) }} className='cursor-pointer' />
                                            <img src={basket} alt="cart icon" onClick={() => cart(item)} className='cursor-pointer' />
                                        </div>
                                        <div className="flex flex-col justify-between mt-1">
                                            <img src={item.image} alt="item.title" className='h-52' />
                                            <div className='mt-4 flex flex-col justify-between'>
                                                <div className="flex justify-between">
                                                    <h3 title={item.title} className='text-[#1C1C27] font-semibold text-base'>{item.title.slice(0, 9) + '...'}</h3>
                                                    <span className='text-[#FFA542] font-semibold text-base'>{item.price} $</span>
                                                </div>
                                                <div className="flex mt-7 gap-[10px]">
                                                    <img src={star} alt="star icon" />
                                                    <span className='text-[#838383] font-semibold text-base'>{item.rating.rate}</span>
                                                </div>
                                                <Link to={`/${item.id}`} className='block w-full bg-gray-400 hover:bg-blue-700 hover:text-white text-center font-semibold py-1 rounded mt-3'>More</Link>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                    }
                </ul>
            </div>
        </section>
    );
};

export default Products;