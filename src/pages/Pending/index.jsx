import {Link} from 'react-router-dom';

const Pending = () => {
    return (
        <div className="mt-12">
            <div className="container">
                <div className="bg-white rounded-[30px] py-10 text-center">
                    <p className="text-[#1C1C27] text-base font-semibold">Номер вашего заказа №123123, с Вами свяжется наш менеджер.</p>
                </div>
                <Link to='/' className='w-full mt-[calc(75vh-70px)] mb-3 md:hidden checkout__btn font-semibold text-xl text-white py-3 flex items-center justify-center'>На главную</Link>
            </div>
        </div>
    );
};

export default Pending;