import React from "react";
import "./Card.css";

const Card = ({ p, r, i }) => {
  return (
    <>
      <section id="scroll">
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div className={i % 2 == 0 ? "col-lg-6" : "col-lg-6 order-lg-2"}>
              <div class="p-5">
                <img
                  src="https://images.unsplash.com/photo-1620207418302-439b387441b0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE3NzYwMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900"
                  class="img-fluid rounded-circle"
                  alt="..."
                />
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">{p}</h2>
                <p>{r}</p>
              </div>
            </div>
          </div>
        </div>{" "}
      </section>
    </>
  );
};

export default Card;
