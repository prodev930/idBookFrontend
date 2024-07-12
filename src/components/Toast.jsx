/* eslint-disable react/prop-types */
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ message }) => {
  const notify = () => toast(message);
  notify();
  return (
    <div>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
    </div>
  );
};

export default Toast;
