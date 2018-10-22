import { Request, Response } from 'express'

import Book from '../interfaces/book_db_interface'

export default {
  get_shelf: async (req: Request, res: Response) => {
    try {
      const db = req.app.get('db')
      const shelf: [Array<Book>] = await db.shelf.get_shelf()

      res.send(shelf)
    } catch (err) {
      console.error('get_shelf failed in shelf_controller.ts:', err)
      res.status(500).send('get_shelf failed in shelf_controller.ts: ' + err)
    }
  },
  add_book: async (req: Request, res: Response) => {
    try {
      const db = req.app.get('db')
      const { name }: { name: string } = req.body

      await db.shelf.add_book({ name })

      const shelf: Array<Book> = await db.shelf.get_shelf()

      res.send(shelf)
    } catch (err) {
      console.error('add_book failed in shelf_controller.ts:', err)
      res.status(500).send(`add_book failed in shelf_controller.ts: ${err}`)
    }
  },
  remove_book: async (req: Request, res: Response) => {
    try {
      const db = req.app.get('db')
      const { book_id }: { book_id: number } = req.query

      await db.shelf.remove_book({ book_id })

      const shelf: Array<Book> = await db.shelf.get_shelf()

      res.send(shelf)
    } catch (err) {
      console.error('remove_book failed in shelf_controller.ts:', err)
      res.status(500).send(`remove_book failed in shelf_controller.ts: ${err}`)
    }
  },
  edit_book: async (req: Request, res: Response) => {
    try {
      const db = req.app.get('db')
      const { name }: { name: string } = req.body
      const { book_id }: { book_id: number } = req.query

      await db.shelf.update_book({ name, book_id })

      const shelf: Array<Book> = await db.shelf.get_shelf()

      res.send(shelf)
    } catch (err) {
      console.error('edit_book failed in shelf_controller.ts:', err)
      res.status(500).send(`edit_book failed in shelf_controller.ts: ${err}`)
    }
  }
}
