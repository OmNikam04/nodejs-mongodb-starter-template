import express from 'express'
const router = express.Router();


router.get('/api/somebullshit', (req, res)=>{
    res.send("server listening ")
});

export default router;