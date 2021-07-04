import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styled";
import { CartItemType } from "../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const countTotal = (items: CartItemType[]) => (
    items.reduce((ack: number, item) => ack + item.price * item.amount, 0)
  );
  
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems && <p>No items in cart.</p>}
      {cartItems.map(item => (
        <CartItem
          key={item.image}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${ countTotal(cartItems).toFixed(2) }</h2>
    </Wrapper>
  )
}
export default Cart;