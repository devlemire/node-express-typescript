import { Request, Response, NextFunction } from 'express'

export default {
  add_book: (req: Request, res: Response, next: NextFunction) => {
    const { name }: { name: string } = req.body
    if (name === undefined || name.length === 0) {
      return res
        .status(406)
        .send(
          'name must be defined on the request body and have a length greater than 0.'
        )
    }

    next()
  },
  remove_book: (req: Request, res: Response, next: NextFunction) => {
    const { book_index }: { book_index: number } = req.query

    if (book_index === undefined || isNaN(book_index)) {
      return res
        .status(406)
        .send('book_index must be defined on the request query and be a number')
    }

    next()
  },
  edit_book: (req: Request, res: Response, next: NextFunction) => {
    const { book_index }: { book_index: number } = req.query
    const { name }: { name: string } = req.body

    if (book_index === undefined || isNaN(book_index)) {
      return res
        .status(406)
        .send('book_index must be defined on the request query and be a number')
    }

    if (name === undefined || name.length === 0) {
      return res
        .status(406)
        .send(
          `name must be defined on the request body and have a length greater than 0`
        )
    }

    next()
  }
}
