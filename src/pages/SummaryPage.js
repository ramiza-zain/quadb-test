import React, { useState } from "react";
import Parser from "html-react-parser";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";

function SummaryPage({ location }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmitForm = () => {
    var myObj = [{ userName, email, phone }];
    localStorage.setItem('users', JSON.stringify(myObj));
    setIsModalOpen(false)
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      innerHeight: 200,
      outerWidth: 400,
    },
  };
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center p-10">
      <div className="">
        <img
          src={location.state.movieData.image.original}
          alt=""
          loading="lazy"
          className="rounded-md w-full h-screen  object-contain "
        />

        <div className="flex flex-col items-center justify-center py-14">
          <h1 className="text-gray-800 mb-5 text-4xl font-bold">
            {location.state.movieData.name}
          </h1>
          <div className="flex my-6 font-semibold">
            {" "}
            Genere :
            {location.state.movieData.genres?.map((genre, index) => (
              <h3 className="mx-2-"> {genre},</h3>
            ))}
          </div>
          <h3 className="font-medium">
            Rating : {location.state.movieData.rating.average}
          </h3>
          <p className="mt-5 text-gray-500">
            {Parser(location.state.movieData.summary)}
          </p>

          <button
            className="my-12 rounded-full text-gray-100 font-bold bg-gray-700 px-8 py-3 hover:bg-gray-500"
            type="button"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            BOOK TICKET
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        // onAfterOpen={afterOpenModal}
        style={customStyles}
        onRequestClose={() => setIsModalOpen(!isModalOpen)}
        preventScroll={true}
        // contentLabel="Example Modal"
      >
        <div className="w-96 h-60 flex flex-col  ">
          <div className="flex justify-between items-center">
            <span></span>
            <h2 className="font-bold text-2xl">
              {location.state.movieData.name}
            </h2>
            <button onClick={() => setIsModalOpen(!isModalOpen)}>
              <AiOutlineCloseCircle color={"red"} size={20} />
            </button>
          </div>

          <form
            onSubmit={onSubmitForm}
            className="flex flex-col justify-around my-10 "
          >
            <input
              value={userName}
              placeholder="Full name"
              onChange={(e) => setUserName(e.target.value)}
              className="rounded-md ring-2 border-pink-900 px-5 py-2"
            />
            <input
              value={email}
              placeholder="E mail"
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md ring-2 border-pink-900 px-5 py-2 my-2"
            />
            <input
              value={phone}
              placeholder="Mobile"
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-md ring-2 border-pink-900 px-5 py-2"
            />
          </form>
          <button
            className="my-12 rounded-full text-gray-100 font-bold bg-gray-700 w-48 py-2 hover:bg-gray-500 "
            type="button"
            onClick={onSubmitForm}
          >
            SUBMIT
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default SummaryPage;
