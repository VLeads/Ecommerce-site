import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis illo iusto tenetur dolor deleniti error vel, itaque ea
              aliquid, aspernatur animi dicta quod voluptates? Sunt vitae omnis
              ad provident vel porro sequi ullam perspiciatis asperiores ducimus
              ipsa accusantium, in assumenda iure et enim maiores, doloribus
              consectetur accusamus inventore optio placeat illo. Molestiae modi
              atque voluptatem voluptas? Iure tenetur cum officia!
            </p>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
