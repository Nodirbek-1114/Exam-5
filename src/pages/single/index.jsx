import { useEffect, useState } from 'react';
import './index.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import heart from "../../assets/images/heart.svg";
import logo from "../../assets/images/single__logo.svg";
import basket from "../../assets/images/arava.svg";
import phone from '../../assets/images/phone.svg';
import star from '../../assets/images/star.svg';
import { Link } from "react-router-dom";
import Loader from '../../components/Loader';

const Single = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className='container'>
      {data ? (
        <div className="w-full mb-5">
          <h2 className='mt-5 font-semibold text-lg text-[#838383]'>{data.category}</h2>
          <div className="bg-white rounded-[30px] p-7 mt-5">
            <div className="top flex items-center justify-between">
              <img src={heart} alt="heart icon" className='cursor-pointer' />
              <img src={logo} alt="single logo" />
            </div>
            <div className="center flex items-center justify-center mt-4">
              <img src={data.image} alt="product image" className='h-64' />
            </div>
            <div className="bottom flex items-center justify-between mt-4">
              <h3>{data.title}</h3>
              <span>{data.price} $</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:max-w[80%] mt-6 bg-white rounded-2xl ">
              <h3 className='p-6 font-semibold text-[#1C1C27] text-lg'>Описание и характеристики</h3>
              <p className='p-6 bg-[#F9F9F9] rounded-bl-xl rounded-br-xl text-sm font-medium text-[#1C1C27]'>{data.description}</p>
            </div>

            <div className='md:hidden bg-white rounded-2xl mt-4 p-6 font-semibold text-[#1C1C27] text-lg flex w-full items-center justify-between'>Отзывы <span className='flex gap-4'><img src={star} alt="star icon" /> {data.rating.rate}</span></div>

            <div className="flex w-full items-center md:flex-col md:items-end mt-6 gap-5">
              <Link to='/cart' className="block md:hidden bg-[#101010] rounded-2xl p-[14px]"><img src={basket} alt="cart icon"/></Link>
              <Link to='/checkout' className='w-[70%] md:w-[189px]  bg-[#101010] rounded-xl p-3 text-center font-medium text-sm text-white hover:bg-slate-700'>Купить!</Link>
              <Link to='/cart' className='hidden md:block md:flex bg-[#101010] rounded-xl p-3 text-center font-medium text-sm text-white flex items-center gap-2 hover:bg-slate-700'><img src={basket} alt="cart icon" className='sm:hidden md:block' /> Добавить в корзину</Link>
              <Link to='/contact' className="block md:hidden bg-[#43D854] rounded-2xl p-3"><img src={phone} alt="cart icon" /></Link>
            </div>
          </div>
        </div>
      ) : (
        <p className='h-[10vh] my-auto'><Loader /></p>
      )}
    </div>
  );
};

export default Single;
