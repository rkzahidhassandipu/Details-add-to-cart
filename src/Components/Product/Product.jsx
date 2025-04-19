import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Product = ({ book }) => {
  const {
    bookName,
    image,
    author,
    rating,
    category,
    tags,
    bookId,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 shadow-sm border rounded-xl border-gray-100 p-5 cursor-pointer">
        <figure className="rounded-none px-16">
          <img src={image} alt="Shoes" className="w-full h-72" />
        </figure>
        <div className="card-body">
          <div className="flex gap-5 justify-center items-center text-green-500">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book by : {author}</p>
          <div className="border border-dashed border-gray-200"></div>
          <div className="card-actions justify-between font-bold">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              <FaStarHalfAlt />
              {rating}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
