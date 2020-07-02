import React from "react"
import Heading from "../Reusbale/Heading"

export default function Contact() {
  return (
    <section className="py-2">
      <Heading title="Contact Us" />
      <div className="col-10 col-sm-7 mx-auto">
        <form action="https://formspree.io/xoqkkadg" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Your Mobile"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Your message"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-outline-info btn-block">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
