import React from "react";

const AboutUsContent=(
                <p class="text-justify">
                A company which combine creativity and analytics in every
                engagement. We believe that the magic happens in the gap between
                what is expected and what is delivered and we as a company
                strive to make the gap negligible. We love what we do and that
                makes it all the more easy for us to learn, create, inspire,
                evolve, educate and deliver in every walk. We believe that a
                satisfied customer is the best business strategy of all.
                 </p>
);

const AboutUs = () => {
  return (
    <div>
      <div class="flat-row pad-top90px">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3>
                {" "}
                We are Aroha Technologies.
                <br />
                Evolving since 2005.
              </h3>
            </div>
            <div class="col-md-6">
              <h4>About Us</h4>
              {AboutUsContent}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
