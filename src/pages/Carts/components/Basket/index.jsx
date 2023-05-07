import basket from '../../../../assets/images/basket.png';
import { Link } from 'react-router-dom';

const Basket = () => {
    return (
        <div className='container'>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                    <img src={basket} alt="basket icon" />
                    <p className='text-[#101010] text-3xl font-medium mt-[30px]'>Корзина пуста</p>
                    <span className='text-[#838383] text-lg'>Но это никогда не поздно исправить :)</span>
                </div>
                <Link to='/' className='w-full mt-48 md:mt-[30px] bg-[#101010] text-white rounded-[20px] text-lg font-semibold text-center md:w-[50%] py-5'>В каталог товаров</Link>
            </div>
        </div>
    );
};

export default Basket;