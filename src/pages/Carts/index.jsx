import { useSelector } from 'react-redux';
import Basket from './components/Basket';
import Cart from './components/Cart'
const Carts = () => {

    const selector = useSelector((state => state.products.array))
    return (
        <>
            {
                selector?.length == 0 ?
                    <Basket /> :
                    <Cart selector={selector} />
            }
        </>
    );
};

export default Carts;