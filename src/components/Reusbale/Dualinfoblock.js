import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Dualinfoblock({ heading }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto deleniti, ut quo ratione quia quae libero suscipit
              voluptatem reiciendis facilis labore eveniet accusamus dicta
              repellat voluptatibus nostrum animi magni! Repellendus animi magni
              quis molestias hic expedita quasi numquam nemo illum inventore
              harum atque fugiat, mollitia cum at maxime! Recusandae, Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Porro quasi ex
              in doloribus, dolore error nostrum perspiciatis cum maxime illum,
              molestiae eveniet tempore optio? Numquam excepturi molestiae
              natus! Sunt voluptatibus recusandae doloremque dolores animi
              architecto repellendus debitis modi labore tempora, aliquid alias
              illum, praesentium quas ab numquam laboriosam vitae totam.
              Architecto consectetur tempore rem illum officia dolorem debitis,
              iste nihil nisi, voluptatem ea necessitatibus fugiat repellendus,
              mollitia assumenda. Quibusdam alias, explicabo aliquam nostrum
              consequuntur voluptatem necessitatibus veritatis suscipit ullam?
            </p>
          </div>
          <div className="col-4">
            <div className="card bg-dark">
              <img
                src="https://cdn.pixabay.com/photo/2020/06/07/13/37/poppy-5270458__340.jpg"
                className="card-img-top"
                alt="image goes here"
              />
              <div className="card-body">
                <h5 className="card-title text-success">Just click photos</h5>
                <p className="card-text  text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  dolorum quo porro corporis aperiam, suscipit ex atque tenetur,
                  dolorem error, quibusdam totam excepturi dolor eum!
                </p>
                <Link to="#" className="btn btn-warning btn-block">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
