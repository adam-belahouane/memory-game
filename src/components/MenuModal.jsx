import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsPaused } from "../Redux/actions";

function Menumodal(props) {
  const dispatch = useDispatch();
  const isPaused = useSelector((state) => state.isPaused);
  const toggleModal = () => {
    props.setIsOpen(!props.isOpen);
    dispatch(setIsPaused(true));
  };
  
  const closeModal = () => {
    props.setIsOpen(!props.isOpen);
    dispatch(setIsPaused(false));
  }

  return (
    <>
      <button onClick={toggleModal} className=" btn-1 orange-theme">
        Menu
      </button>
      {props.isOpen && (
        <div className="modal">
          <div className="modal-content">
            {props.children}
            <button className=" btn-1 dark-theme" onClick={closeModal}>
              Resume Game
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Menumodal;
