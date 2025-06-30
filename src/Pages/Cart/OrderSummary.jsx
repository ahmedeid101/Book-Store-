const OrderSummary = ({ total_price }) => {
  return (
    <div className="cart-order-summary">
      <div className="order-summary-title">Order Summary</div>
      <div className="order-summary-item">
        <span>subtotal</span>
        <span>{total_price}</span>
      </div>
      <div className="order-summary-item">
        <span>Shopping Cost</span>
        <span>0</span>
      </div>
      <div className="order-summary-item">
        <span>Discount</span>
        <span>0</span>
      </div>
      <div className="order-summary-item">
        <span>Total Price</span>
        <span>{total_price}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
