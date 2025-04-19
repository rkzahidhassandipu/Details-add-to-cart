import React, { Suspense, useState } from 'react'
import Product from './Product'

const Products = ({data}) => {
    // const [allBooks, setAllBooks] = useState([])
  return (
    <div className='w-4/5 mx-auto'>
      <h1 className='text-center font-bold text-3xl my-20'>Books</h1>
      <Suspense fallback={<span>Loading....</span>}>
        <div className='grid grid-cols-3 gap-4 my-20'>
        {
            data.map(book => <Product key={book.bookId} book={book} />)
        }
        </div>
      </Suspense>
    </div>
  )
}

export default Products
