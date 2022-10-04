import express from 'express'
import { loginAdmin, resgisterAdmin } from '../Controllers/AdminAuthController.js'

const router = express.Router()


router.post('/reagister',resgisterAdmin)
router.post('/login',loginAdmin)
export default router
