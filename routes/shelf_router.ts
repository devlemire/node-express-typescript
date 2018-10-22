import { Router } from 'express'
import shelf_controller from '../controllers/shelf_controller'

const shelf_router: Router = Router()

shelf_router.get('/', shelf_controller.get_shelf)
shelf_router.post('/', shelf_controller.add_book)

export default shelf_router
