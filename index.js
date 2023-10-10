import express from "express";
const app = express();
import 'dotenv/config'
const PORT = 5000

const router = express.Router()
app.use('/', dummy);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
export default app;


