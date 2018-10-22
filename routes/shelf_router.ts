import { Router } from 'express'
import shelf_controller from '../controllers/shelf_controller'
import shelf_middleware from '../middlewares/shelf_middleware'

const shelf_router: Router = Router()

shelf_router.get('/', shelf_controller.get_shelf)

shelf_router.post('/', shelf_middleware.add_book, shelf_controller.add_book)

shelf_router.patch('/', shelf_middleware.edit_book, shelf_controller.edit_book)

shelf_router.delete(
  '/',
  shelf_middleware.remove_book,
  shelf_controller.remove_book
)

export default shelf_router
