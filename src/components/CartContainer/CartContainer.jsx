import { useContext, useEffect} from 'react';
import { CartContext } from '../../Context/CartContext';



const CartContainer = () => {


    const { cart } = useContext(CartContext)
    



  return (
    <div>CartContainer</div>
  )
}

export default CartContainer