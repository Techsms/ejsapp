import express from express
import Dashboard from "../Controller/Dashboard.control.js"
const router= express.Router()//express class helps to route
router.get("/",Dashboard)

export default router