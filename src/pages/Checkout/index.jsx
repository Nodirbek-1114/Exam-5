import './index.css';
import location from '../../assets/images/location.svg';
import visa from '../../assets/images/visa.svg';
import promokod from '../../assets/images/promokod.svg';
import phone from '../../assets/images/phone.svg';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <>
            <div className='container'>
                <h3 className='mt-[30px] font-semibold text-lg text-[#1C1C27]'>Оформление заказа</h3>

                <div className="mt-3 mb-12 gap-4 flex-col lg:flex-row md:gap-6 lg:gap-12 flex justify-center ">
                    <div className='contact__wrap bg-white rounded-[30px]'>
                        <div className='flex items-start justify-between'>
                            <h2 className='text-[#1C1C27] mb-5 font-semibold text-base'>Доставка курьером</h2>
                            <span className='text-[#1C1C27] text-sm'>499 ₸</span>
                        </div>
                        <iframe className='w-full lg:w-[500px] h-[173px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.965805004984!2d69.28549207595546!3d41.353096971304176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3532bfc9f13%3A0x7d08b465abb8d658!2sShaxriston%20(Habib%20Abdullayev)!5e0!3m2!1suz!2s!4v1683275365398!5m2!1suz!2s" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                        <div className="flex gap-3 mt-5">
                            <img src={location} alt="location icon" />
                            <p className='font-semibold text-sm'>Адрес доставки</p>
                        </div>

                        <form className='flex flex-col gap-[10px] mt-6'>
                            <select name="city" id="city" className='w-full bg-[#D6D6D6] text-[#8E8E8E] font-medium outline-none py-3 px-3 rounded-2xl'>
                                <option value="city">Toshkent</option>
                                <option value="city">Qarshi</option>
                            </select>
                            <input type="text" name="street" id="street" placeholder='Улица / Район' className='w-full bg-[#D6D6D6] font-medium outline-none py-3 px-3 rounded-2xl' />
                            <div className="flex gap-7">
                                <input type="text" name="home" id="home" placeholder='Дом' className='w-full bg-[#D6D6D6] font-medium outline-none py-3 px-3 rounded-2xl' />
                                <input type="text" name="street" id="street" placeholder='Подъезд / Район' className='w-full bg-[#D6D6D6] font-medium outline-none py-3 px-3 rounded-2xl' />
                            </div>
                            <input type="text" name="number" id="number" placeholder='Квартира' className='w-[47%] bg-[#D6D6D6] font-medium outline-none py-3 px-3 rounded-2xl' />
                        </form>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className='contact__wrap bg-white rounded-[30px]'>
                            <h2 className='text-[#1C1C27] mb-5 font-semibold text-base'>Ваш заказ</h2>

                            <div className="flex items-start gap-4">
                                <span className='text-sm font-medium'>1х</span>
                                <div className="flex flex-col">
                                    <div className="flex justify-between">
                                        <p className='font-semibold text-sm'>Наушники Apple BYZ S852I</p>
                                        <span className='text-[#1C1C27] text-sm'>₸ 2 927</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className='font-semibold text-sm'>Доставка</p>
                                        <span className='text-[#1C1C27] text-sm'>₸ 2 927</span>
                                    </div>
                                    <div className="flex justify-between gap-8">
                                        <p className='font-semibold text-sm md:w-[310px]'>К оплате</p>
                                        <span className='text-[#1C1C27] text-sm'>₸ 2 927</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='contact__wrap bg-white rounded-[30px]'>
                            <h2 className='text-[#1C1C27] mb-5 font-semibold text-base'>Способ оплаты</h2>

                            <div className="flex items-center justify-between">
                                <img src={visa} alt="card icon" />
                                <select name="card" id="card" className='outline-none pr-12 w-full lg:w-[360px]'>
                                    <option value="card">Счет на kaspi.kz</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <img src={promokod} alt="promokod icon" />
                                <input type="text" placeholder='Есть промокод?' className='outline-none' />
                            </div>
                        </div>

                        <div className='contact__wrap bg-white rounded-[30px]'>
                            <h2 className='text-[#1C1C27] mb-5 font-semibold text-base'>Номер получателя</h2>

                            <input type="tel" name="phone" id="phone" placeholder='+7 ___ ___ __ __' className='outline-none py-3 pl-3 w-full bg-[#D6D6D6] rounded-2xl' />
                        </div>
                        <Link to='/pending' className='hidden md:block checkout__btn text-center text-white py-3'>Закончить оформление</Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <Link to='/pending' className='w-full md:hidden checkout__btn font-semibold text-xl text-white py-3 flex items-center justify-center'>Разместить заказ <span className='bg-green-400 p-3 rounded-3xl ml-8'><img src={phone} alt="phone icon" /></span></Link>
            </div>
        </>
    );
};

export default Checkout;