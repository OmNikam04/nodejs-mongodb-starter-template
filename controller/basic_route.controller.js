
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";


export const myfunc = catchAsyncErrors(async (req, res, next) => {
    res.send("backend started")
})
