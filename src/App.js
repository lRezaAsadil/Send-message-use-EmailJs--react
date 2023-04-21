import React from "react";
import "./App.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const send = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tjztfgc",
        "template_qnhv6eb",
        e.target,
        "1zmToP8aqA5BMdiBT"
      )
      .then(
        (re) => {
          if (re.status === 200) {
            const resolveAfter3Sec = new Promise((resolve) =>
              setTimeout(resolve, 3000)
            );
            toast.promise(resolveAfter3Sec, {
              pending: "sending ..",
              success: "Submitted successfully",
              error: "Failed to submit successfully",
            });
          }
        },
        (error) => {
          const resolveAfter3Sec = new Promise((resolve, rjc) =>
            setTimeout(rjc, 3000)
          );
          toast.promise(resolveAfter3Sec, {
            error: "Failed to submit successfully",
          });
        }
      );
  };
  return (
    <div className="main">
      <div className="card">
        <span className="title">Send Message Owner</span>
        <form className="form" onSubmit={send}>
          <div className="group">
            <input placeholder="‎" type="text" name="name" required="" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="group">
            <input
              placeholder="‎"
              type="email"
              id="email"
              name="email"
              required=""
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="group">
            <textarea
              placeholder="‎"
              id="comment"
              name="message"
              rows="5"
              required=""></textarea>
            <label htmlFor="message">Comment</label>
          </div>
          <button>Send</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
export default App;
