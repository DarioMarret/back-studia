const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51HzCfKIUXK91B6BdHCDAQmSYxZ9LoWe8xemQSAddv4wwBcSNzyIOzUjmQQnZY2PzrcRwbvdIWmbqg8t6K2IZxzPo004iTFhQY8");
const captuarPago = async(req, res)=>{
    
    const { id, amount } = req.body;

    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "STUDIA",
        payment_method: id,
        confirm: true, //confirm the payment at the same time
      });
  
      console.log(payment);
  
      return res.status(200).json({ message: "Successful Payment" });
    } catch (error) {
      console.log(error);
      return res.json({ message: error.raw.message });
    }
}
module.exports = {
    captuarPago
}