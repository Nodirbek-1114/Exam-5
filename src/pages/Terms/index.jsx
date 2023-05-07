import {Link} from 'react-router-dom';
import './index.css';

const Terms = () => {
    return (
        <div className="container">
            <div className="flex flex-col mt-16 items-center">
                <div className="terms__wrap rounded-[30px] bg-white py-4">
                    <h3 className="font-semibold text-base text-[#1C1C27] px-[29px]">Условия сервиса</h3>
                    <p className="px-11 mt-4">Задача организации, в особенности же курс на социально-ориентированный национальный проект требует от нас системного анализа модели развития! Таким образом, постоянное информационно-техническое обеспечение нашей деятельности требует от нас анализа системы масштабного изменения ряда параметров! С другой стороны социально-экономическое развитие напрямую зависит от всесторонне сбалансированных нововведений?</p>
                </div>
                <div className="terms__wrap mt-8 rounded-[30px] bg-white py-4">
                    <h3 className="font-semibold text-base text-[#1C1C27] px-[29px]">Условия доставки</h3>
                    <p className="px-11 mt-4">Задача организации, в особенности же курс на социально-ориентированный национальный проект требует от нас системного анализа модели развития! Таким образом, постоянное информационно-техническое обеспечение нашей деятельности требует от нас анализа системы масштабного изменения ряда параметров! С другой стороны социально-экономическое развитие напрямую зависит от всесторонне сбалансированных нововведений?</p>
                </div>
                <div className="terms__wrap mt-11 rounded-[30px] bg-white py-4">
                    <h3 className="font-semibold text-base text-[#1C1C27] px-[29px]">Условия возврата</h3>
                    <p className="px-11 mt-4">Задача организации, в особенности же курс на социально-ориентированный национальный проект требует от нас системного анализа модели развития! Таким образом, постоянное информационно-техническое обеспечение нашей деятельности требует от нас анализа системы масштабного изменения ряда параметров! С другой стороны социально-экономическое развитие напрямую зависит от всесторонне сбалансированных нововведений?</p>
                </div>
            </div>
            <Link to='/' className='w-full mt-12 mb-2 md:hidden checkout__btn font-semibold text-xl text-white py-3 flex items-center justify-center'>На главную</Link>
        </div>
    );
};

export default Terms;