import React from "react";

const StaticCard = () => {
  return (
    <div>
      <section id="scroll">
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="p-5">
                <img
                  class="img-fluid rounded-circle"
                  src="https://images.unsplash.com/photo-1620207418302-439b387441b0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE3NzYwMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900"
                  alt="..."
                />
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">Tell me about dinosaurs</h2>
                <p>
                  Dinosaurs were a type of prehistoric reptile that lived from
                  the late Triassic to the end of the Cretaceous periods. They
                  were the dominant terrestrial vertebrates during this time.
                </p>
              </div>
            </div>
          </div>
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 ">
              <div class="p-5">
                <img
                  class="img-fluid rounded-circle"
                  src="https://images.unsplash.com/photo-1620207418302-439b387441b0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTE3NzYwMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900"
                  alt="..."
                />
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">Write a poem about a dog wearing skis</h2>
                <p>
                  I see a dog wearing skis He's outrunning the snow He's having
                  a great time I can't believe he's doing this He's so brave
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </section>
    </div>
  );
};

export default StaticCard;
