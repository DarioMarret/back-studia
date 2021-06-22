const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51HzCfKIUXK91B6BdHCDAQmSYxZ9LoWe8xemQSAddv4wwBcSNzyIOzUjmQQnZY2PzrcRwbvdIWmbqg8t6K2IZxzPo004iTFhQY8");
const Orden = require('../model/Orden');
// "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"
const captuarPago = async(req, res)=>{
    const { id, amount, productos, id_usuario } = req.body;
    try {
      const payment = await stripe.paymentIntents.create({
        Authorization: "sk_test_51HzCfKIUXK91B6BdHCDAQmSYxZ9LoWe8xemQSAddv4wwBcSNzyIOzUjmQQnZY2PzrcRwbvdIWmbqg8t6K2IZxzPo004iTFhQY8",
        amount,
        currency: "MXN",
        description: "STUDIA",
        payment_method: id,
        confirm: true, //confirm the payment at the same time
      });
      const n_orden = new Orden({"productos":productos,"id_pago":id,"id_usuario":id_usuario.id_usuario});
      await n_orden.save()
      return res.status(200).json({ message: "Successful Payment" });
    } catch (error) {
      console.log(error);
      return res.json({ message: error.raw.message });
    }
}
module.exports = {
    captuarPago
}