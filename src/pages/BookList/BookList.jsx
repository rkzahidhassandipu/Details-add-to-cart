import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../utility/addToDB";
import SingleBookList from "../../Components/BookList/SingleBookList";

const BookList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoreBook();
    const convertedStorBookData = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStorBookData.includes(book.bookId)
    );
    setReadList(myReadList);
    console.log(myReadList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "pages") {
      const sortByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortByPage);
    }
    if (sortType === "ratings") {
      const sortByPage = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortByPage);
    }
  };

  return (
    <div className="w-4/5 mx-auto mb-20 mt-10">
      <h1 className="py-10 rounded-xl  text-center bg-gray-300 text-white font-bold text-4xl mb-10">Book</h1>
      <div className="w-full text-center mb-20">
        <details className="dropdown text-center">
          <summary className="btn m-1 bg-green-600 px-8 rounded-md py-3 text-white border-none font-bold">Sort by : {sort ? sort : ""}</summary>
          <ul className="menu dropdown-content rounded-box z-1 w-52 p-2 shadow-sm bg-green-100">
            <li className=" text-center">
              <a className="text-center" onClick={() => handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("ratings")}>Rating</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <div>
            {readList.map((b) => (
              <SingleBookList key={b.bookId} bookList={b} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookList;
