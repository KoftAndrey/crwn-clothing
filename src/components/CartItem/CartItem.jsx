import './CartItem.scss';

const CartItem = ({ imageUrl, name, quantity, price }) => {
  return (
    <div className="cart-item-container">
      <div className="img-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="item-details">
        <span className="name">{name}</span>
        <span>{quantity} x ${price}</span>
      </div>
    </div>
  )
}

export default CartItem;
