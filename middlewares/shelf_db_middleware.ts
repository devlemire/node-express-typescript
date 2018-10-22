import { Request, Response, NextFunction } from 'express'

export default {
  remove_book: (req: Request, res: Response, next: NextFunction) => {
    const { book_id }: { book_id: number } = req.query

    if (book_id === undefined || isNaN(book_id)) {
      return res
        .status(406)
        .send('book_id must be defined on the request query and be a number')
    }

    next()
  },
  edit_book: (req: Request, res: Response, next: NextFunction) => {
    const { book_id }: { book_id: number } = req.query
    const { name }: { name: string } = req.body

    if (book_id === undefined || isNaN(book_id)) {
      return res
        .status(406)
        .send('book_id must be defined on the request query and be a number')
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
