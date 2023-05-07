import './index.css';
import language from '../../assets/images/language.svg';
import vkontakte from '../../assets/images/vkontakte.svg';
import instagram from '../../assets/images/Instagram.svg';
import telegram from '../../assets/images/Telegram.svg';
import whatsap from '../../assets/images/Whatsapp.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-white rounded-t-[30px] mt-[60px] p-7 hidden  md:block'>
      <div className="container">
        <div className='flex justify-between'>
          <ul>
            <li><a href="#" className='footer__logo font-bold text-2xl text-[#101010] hover:underline'>QPICK</a></li>
          </ul>
          <ul className='text-base flex flex-col'>
            <Link to='/' className='hover:text-orange-600'>Избранное</Link>
            <Link to='/cart' className='hover:text-orange-600'>Корзина</Link>
            <Link to='/contact' className='hover:text-orange-600'>Контакты</Link>
          </ul>
          <ul className='flex flex-col justify-between text-base'>
            <Link to='/terms' className='hover:text-orange-600'>Условия сервиса</Link>
            <li className='flex gap-3'><img src={language} alt="gloabal icon" /> <span className=' font-medium text-sm hover:text-[#FFA542]'>Каз</span> <span className='font-medium text-sm hover:text-[#FFA542]'>Рус</span> <span className='font-medium text-sm hover:text-[#FFA542]'>Eng</span></li>
          </ul>
          <ul className='flex items-center gap-4'>
            <li><img src={vkontakte} alt="vkontakte icon" /></li>
            <li><img src={instagram} alt="instagram icon" /></li>
            <li><img src={telegram} alt="telegram icon" /></li>
            <li><img src={whatsap} alt="whatsap icon" /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
