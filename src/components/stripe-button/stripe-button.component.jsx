import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51KDSE5SBOEsVidXqLTa3Fp6eeORkJz3iaUEOZHUNOGoMcaCZnkk7LmqaXvexZhFwrIgedlTo4KU8uUe8j9KSij8700Hzjc7zZ4";

  const ontoken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return <StripeCheckout label="Pay Now" name="CRWN clothing Ltd." billingAddress shippingAddress image="https://svgshare.com/i/CUz.svg" description={`Your total is $${price}`} amount={priceForStripe} panelLabel="Pay Now" token={ontoken} stripeKey={publishableKey} />;
};

export default StripeCheckoutButton;
