import './index.css'
import location from '../../assets/images/location.svg';
import vkontakte from '../../assets/images/vkontakte.svg';
import instagram from '../../assets/images/Instagram.svg';
import telegram from '../../assets/images/Telegram.svg';
import whatsap from '../../assets/images/Whatsapp.svg';
import phone from '../../assets/images/phone.svg';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="container">
            <div className="flex flex-col items-center md:flex-row md:items-start md:justify-around mt-7">
                <div>
                    <div className='contact__wrap bg-white rounded-[30px]'>
                        <h2 className='text-[#1C1C27] mb-5 font-semibold text-base'>Наш офис</h2>
                        <iframe className='w-full lg:w-[610px] h-[173px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.965805004984!2d69.28549207595546!3d41.353096971304176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3532bfc9f13%3A0x7d08b465abb8d658!2sShaxriston%20(Habib%20Abdullayev)!5e0!3m2!1suz!2s!4v1683275365398!5m2!1suz!2s" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                        <div className="flex gap-3 mt-3">
                            <img src={location} alt="location icon" />
                            <div>
                                <p className='font-semibold text-sm'>Аксай-3а, 62ф, Алматы, Казахстан</p>
                                <p className='text-[#838383] text-xs font-semibold'>3 этаж 35 кабинет</p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block md:flex gap-7 mt-11  hover:cursor-pointer">
                        <img src={phone} alt="phone icon" />
                        <span className='font-semibold text-2xl'>+7 777 777 77 77</span>
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-12 mt-8 md:flex md:flex-col md:gap-4">
                    <a href="https://www.whatsapp.com/" className='p-14 md:p-5 rounded-[30px] bg-white hover:bg-slate-300'>
                        <img src={whatsap} alt="whatsap icon" />
                    </a>
                    <a href="#" className='p-14 md:p-5 rounded-[30px] bg-white hover:bg-slate-300'>
                        <img src={vkontakte} alt="vkontakte icon" />
                    </a>
                    <a href="#" className='p-14 md:p-5 rounded-[30px] bg-white hover:bg-slate-300'>
                        <img src={instagram} alt="instagram icon" />
                    </a>
                    <a href="#" className='p-14 md:p-5 rounded-[30px] bg-white hover:bg-slate-300'>
                        <img src={telegram} alt="telegram icon" />
                    </a>
                </div>
                <div className="block md:hidden flex gap-7 mt-11  hover:cursor-pointer">
                        <img src={phone} alt="phone icon" />
                        <span className='text-center font-semibold text-2xl'>+7 777 777 77 77</span>
                    </div>
            </div>
            <Link to='/' className='w-full mt-12 mb-3 md:hidden checkout__btn font-semibold text-xl text-white py-3 flex items-center justify-center'>На главную</Link>
        </div>
    );
};

export default Contact;