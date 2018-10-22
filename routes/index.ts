import { Router } from 'express'
import shelf_router from './shelf_router'

const app_router: Router = Router()

app_router.use('/shelf', shelf_router)

export default app_router
