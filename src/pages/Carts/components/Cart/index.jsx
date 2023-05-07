import delet from '../../../../assets/images/delete.svg';
import car from '../../../../assets/images/car.svg';
import select from '../../../../assets/images/select.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {

    const selector = useSelector((state => state.products.array))
    const [count, setCount] = useState(1);
    const incr = () => {
        setCount(count + 1);
    };
    const decr = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className='container'>
            <h3 className='font-semibold text-xl text-[#1C1C27] mt-[20px]'>Корзина</h3>

            <div className="flex-col md:flex md:flex-row items-start justify-between mt-4">
                <div>
                    {
                        selector.map((item) => {
                            return (
                                <div key={item.id} className="w-full rounded-[30px] mb-3 bg-white flex justify-between p-5">
                                    <div>
                                        <div key={item.id} className="flex gap-6 items-center mb-5">
                                            <img src={item.image} alt="img" className='h-16' />
                                            <div>
                                                <h4 className='font-medium text-sm text-[#1C1C27]'>{item.title}</h4>
                                                <span className='font-semibold text-sm  text-[#AAAAAA] mt-3'>{item.price} $</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <button className='btn__inc bg-[#FFCE7F] w-7 h-7 rounded-full' onClick={decr}>
                                                <span className='block w-[10px] mx-auto h-[1px] bg-white'></span>
                                            </button>
                                            <span className='font-semibold text-base'>{count}</span>
                                            <button className='btn__dec bg-[#FFCE7F] w-7 h-7 rounded-full' onClick={incr}>
                                                <span className='block w-[10px] mx-auto h-[1px] bg-white'></span>
                                                <span className='block w-[10px] mx-auto h-[1px] bg-white rotate-90'></span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between items-end">
                                        <img src={delet} alt="delete icon" className='delete__img' />
                                        <span className='font-semibold text-sm text-[#1C1C27]'>{item.price * count} $</span>
                                    </div>
                                </div>
                            )
                        })
                    }


                    <div className='contact__wrap bg-white rounded-[30px] mt-4'>
                        <h2 className='text-[#1C1C27] mb-5 font-semibold text-base'>Наш офис</h2>
                        <iframe className='w-full md:w-[400px] lg:w-[610px] h-[173px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.965805004984!2d69.28549207595546!3d41.353096971304176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3532bfc9f13%3A0x7d08b465abb8d658!2sShaxriston%20(Habib%20Abdullayev)!5e0!3m2!1suz!2s!4v1683275365398!5m2!1suz!2s" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                        <div className="flex justify-between items-center mt-5">
                            <div className='flex items-center gap-3'>
                                <img src={car} alt="location icon" />
                                <p className='font-medium text-sm'>Доставка курьером</p>
                                <span className='ml-16'><img src={select} alt="select icon" /></span>
                            </div>
                            <span className='text-[#1C1C27] text-sm'>499 ₸</span>
                        </div>
                    </div>
                </div>


                <div className="w-full md:w-[350px] mt-48 md:mt-0 flex-end bg-white rounded-[30px] flex flex-col justify-between">
                    <div className='flex justify-between p-5'>
                        <h4 className='font-semibold text-sm'>ИТОГО</h4>
                        <span className='font-semibold text-sm text-[#1C1C27]'>₸ 2 927</span>
                    </div>
                    <Link to='/checkout' className='text-white text-base py-[22px] px-3 bg-[#101010] rounded-[30px] text-center'>Перейти к оформлению</Link>
                </div>
            </div >

        </div>
    );
};

export default Cart;