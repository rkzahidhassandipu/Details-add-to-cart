import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { addToStoreDB } from "../../utility/addToDB";
import Swal from 'sweetalert2'

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singleDetails, setSingleDetails] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("/BooksData.json")
      .then((res) => res.json())
      .then((books) => {
        setData(books);
        const found = books.find((book) => book.bookId === bookId);
        setSingleDetails(found);
        setLoading(false);
      });
  }, [bookId]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg font-semibold">
        Loading book details...
      </div>
    );
  }

  if (!singleDetails) {
    return (
      <div className="text-center mt-10 text-lg font-semibold text-red-500">
        Book not found
      </div>
    );
  }

  const {
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
  } = singleDetails;

  const handleMarkAsRead = (id) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Your product already exist!",
    });
    addToStoreDB(id);
  };

  return (
    <div className="w-4/5 mx-auto my-20">
      <div className="flex gap-10">
        <div className="w-6/12 bg-gray-200 py-16 rounded-2xl">
          <img
            src={image}
            alt={bookName}
            className="w-96 h-auto rounded-lg shadow-md mx-auto"
          />
        </div>
        <div className="w-6/12">
          <h1 className="text-4xl font-bold text-gray-800 my-3">{bookName}</h1>
          <div className="text-gray-600 font-semibold my-3">By : {author}</div>
          <h2 className="font-bold text-gray-600 my-5 py-2 border-y border-gray-400">
            {category}
          </h2>
          <div className="my-5">
            <strong>Review</strong>:{" "}
            <span className="text-gray-600">{review}</span>
          </div>
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
          </div>
          <div className="border-t border-gray-400"></div>
          <div className="my-8">
            <div className="flex my-2">
              <p className="w-6/12 text-gray-600">Number of Pages:</p>
              <h2 className="w-6/12 text-black font-bold">{totalPages}</h2>
            </div>

            <div className="flex my-2">
              <p className="w-6/12 text-gray-600">Publisher:</p>
              <h2 className="w-6/12 text-black font-bold">{publisher}</h2>
            </div>

            <div className="flex my-2">
              <p className="w-6/12 text-gray-600">Year of Publishing:</p>
              <h2 className="w-6/12 text-black font-bold">
                {yearOfPublishing}
              </h2>
            </div>
            <div className="flex my-2">
              <p className="w-6/12 text-gray-600">Rating:</p>
              <h2 className="w-6/12 text-black font-bold">{rating}</h2>
            </div>
          </div>
          <div className="flex gap-6">
            <button onClick={() => handleMarkAsRead(id)} className="btn rounded-md border-green-600 hover:bg-green-600 hover:text-white duration-700">
              Mark as Read
            </button>
            <button className="btn rounded-md border-green-400 hover:bg-green-400 hover:text-white duration-700">Add To WishList</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
