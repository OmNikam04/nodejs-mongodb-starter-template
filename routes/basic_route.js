import express from "express";
const app = express();
const router = express.Router();
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";


const myfunc = catchAsyncErrors(async (req, res, next) => {
    res.send("backend started")
  })

router.route('/dummy').get(myfunc)

export default router