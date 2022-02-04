import Stripe from "stripe";

const stripePayment = new Stripe(
  "sk_test_51KP1ywGDJGERiuObWFUNajn2VFoOP4A5x1TvGybmgNjDejuvScq3nYVxszWrckqmUSdaAHedVsHbhcOjtgwHCmDH00AWOnhz0p"
);

export const makePayment = async (req, res) => {
  await stripePayment.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log("Err: ", stripeErr);
        res.status(500).json({ msg: stripeErr });
      } else {
        console.log("insucc");
        res.status(200).json(stripeRes);
      }
    }
  );
};
