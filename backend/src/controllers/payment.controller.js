import { response } from "../../config/response"
import { status } from "../../config/response.status"

import { confirmPayment } from "../services/payment.service"

export const confirmPaymentController = (req, res, next) => {
  console.log("confirmPayment", req.body);
  return res.send(response(status.SUCCESS, confirmPayment(req.body)))
}