import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdContactPage } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import { Link } from "react-router";

const SingleBookList = ({ bookList }) => {
  const {
    bookId,
    bookName,
    image,
    publisher,
    review,
    tags,
    yearOfPublishing,
    author,
    totalPages,
    rating,
    category,
  } = bookList;
  return (
    <div className="py-5 px-4 border rounded-2xl border-gray-300 my-6 flex gap-5">
      <div className="bg-gray-300 rounded-md p-4">
        <img className="w-36 h-44 bg-gray-300" src={image} alt="" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <div className="text-gray-600 font-semibold my-3">By : {author}</div>
        <div className="flex my-5">
          <strong className="mr-5">Tag</strong>
          {tags.map((tag, index) => (
            <p
              className="bg-gray-200 text-green-600 mx-3 rounded-2xl px-10 py-1"
              key={index}
            >
              # {tag}
            </p>
          ))}
          <div className="flex items-center">
            <CiLocationOn className="font-bold text-2xl mr-2" />
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center mx-3 gap-2 text-gray-500">
            <RiGroupLine />
            <p>Publisher: <span className="mx-1">{publisher}</span></p>
          </div>
          <div className="flex items-center mx-3 gap-2 text-gray-500">
          <MdContactPage />
            <p>Page: <span className="mx-1">{totalPages}</span></p>
          </div>
        </div>
        <div className="border-t border-gray-500 my-6"></div>
        <div>
          <button className="px-4 py-2 bg-blue-100 text-blue-500 rounded-3xl mx-2">Category: {category}</button>
          <button className="px-4 py-2 bg-orange-100 text-orange-500 rounded-3xl mx-2">Rating: {rating}</button>
          
          <Link to={`/bookDetails/${bookId}`}>
          <button className="px-4 py-2 bg-green-600 font-bold rounded-3xl mx-2 text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBookList;
