import Stripe from "stripe";

const stripePayment = new Stripe(process.env.STRIPE_KEY);

export const makePayment = (req, res) => {
  stripePayment.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json({ msg: err });
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
};
