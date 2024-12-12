const paymentModel = require("../models/paymentModel");
const stripe = require("stripe")(
  "sk_test_51QV69aAUbXjlhvflFgiKplsX0c5lZ7W0KUtSrsFzbm18AbC0OraM57Jh1VnhsvwXHOuKTNHBtIIlkzmsHU4SEbLZ00BirbsUAk"
);

const makePayment = async (req, res) => {
  const { products, email } = req.body;

  try {
    const lineItems = products.map((product) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
            images: [product.image],
          },
          unit_amount: product.price * 100,
        },
        quantity: product.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({
      id: session.id,
    });

    // Save transaction data in your database
    const newdata = await new paymentModel({
      email: email,
      transactionId: session.id, // Use session ID as transaction ID
      paymentStatus: "Success",
      products: products,
    });
    await newdata.save();
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  makePayment,
};
