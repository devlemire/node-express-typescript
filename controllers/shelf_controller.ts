import { Request, Response } from 'express'
import Book from '../interfaces/book_interface'

let shelf: Array<Book> = []
let index: number = 0

export default {
  get_shelf: (req: Request, res: Response) => {
    try {
      res.send(shelf)
    } catch (err) {
      console.error('get_shelf failed in shelf_controller.ts:', err)
      res.status(500).send('get_shelf failed in shelf_controller.ts: ' + err)
    }
  },
  add_book: (req: Request, res: Response) => {
    try {
      const { name }: { name: string } = req.body

      const new_book: Book = {
        name,
        index: index++
      }

      shelf.push(new_book)

      res.send(new_book)
    } catch (err) {
      console.error('add_book failed in shelf_controller.ts:', err)
      res.status(500).send(`add_book failed in shelf_controller.ts: ${err}`)
    }
  }
}
