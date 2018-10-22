import { Router } from 'express'
import shelf_controller from '../controllers/shelf_controller'
import shelf_middleware from '../middlewares/shelf_middleware'
import shelf_db_controller from '../controllers/shelf_db_controller'
import shelf_db_middleware from '../middlewares/shelf_db_middleware'

const shelf_router: Router = Router()

// Array Shelf
shelf_router.get('/', shelf_controller.get_shelf)

shelf_router.post('/', shelf_middleware.add_book, shelf_controller.add_book)

shelf_router.patch('/', shelf_middleware.edit_book, shelf_controller.edit_book)

shelf_router.delete(
  '/',
  shelf_middleware.remove_book,
  shelf_controller.remove_book
)

// DB shelf
shelf_router.get('/db', shelf_db_controller.get_shelf)

shelf_router.post(
  '/db',
  shelf_middleware.add_book,
  shelf_db_controller.add_book
)

shelf_router.patch(
  '/db',
  shelf_db_middleware.edit_book,
  shelf_db_controller.edit_book
)

shelf_router.delete(
  '/db',
  shelf_db_middleware.remove_book,
  shelf_db_controller.remove_book
)

export default shelf_router
