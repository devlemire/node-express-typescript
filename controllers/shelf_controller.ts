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
  },
  remove_book: (req: Request, res: Response) => {
    try {
      const { book_index }: { book_index: number } = req.query

      const spliceIndex = shelf.findIndex(b => b.index == book_index)

      if (spliceIndex === -1) {
        return res.status(200).send(shelf)
      }

      shelf.splice(spliceIndex, 1)

      res.send(shelf)
    } catch (err) {
      console.error('remove_book failed in shelf_controller.ts:', err)
      res.status(500).send(`remove_book failed in shelf_controller.ts: ${err}`)
    }
  },
  edit_book: (req: Request, res: Response) => {
    try {
      const { book_index }: { book_index: number } = req.query
      const { name }: { name: string } = req.body

      let book = shelf.find(b => b.index == book_index)

      if (book === undefined) {
        return res
          .status(406)
          .send(`A book with the index of ${book_index} does not exist`)
      }

      book.name = name

      res.send(shelf)
    } catch (err) {
      console.error('edit_book failed in shelf_controller.ts:', err)
      res.status(500).send(`edit_book failed in shelf_controller.ts: ${err}`)
    }
  }
}
