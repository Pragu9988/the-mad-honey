import React from "react";

const ContactAddress = () => {
  return (
    <section className="py-6 md:py-8 lg:pt-20 lg:pb-8">
      <div className="container mx-auto">
        <div className="contact-info__header">
          <div className="mb-4 md:mb-6">
            <h4 className="page-header !mb-4 text-left text-gray-800">
              Connect with us at The Mad Honey
            </h4>
            <p>
              Always humans, never bots. The hands-down, sharpest and
              friendliest support team in the biz. Need a hand or high-five,
              friendly folks standing by!
            </p>
          </div>
          <div className="mb-4 md:mb-6">
            <p>
              <strong className="text-gray-800 text-lg">Call: </strong>
              <a href="tel:+98765432">+98765432</a>
            </p>
          </div>
          <div className="mb-4 md:mb-6">
            <p>
              <strong className="text-gray-800 text-lg">
                Customer Support:
              </strong>
              <br />
              <a href="mailto:contact@themadhoney.net">
                contact@themadhoney.net
              </a>
              <br />
              Our current response time is about 54 minutes.Expect a reply
              between 8am - 6:30pm IST Monday through Friday. You can also
              search our FAQs for answers to anything you might be wondering.
            </p>
          </div>
          <div className="mb-4 md:mb-6">
            <p>
              <strong className="text-gray-800 text-lg">
                Head Office Address:
              </strong>
              <br />
              Kathmandu, Nepal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAddress;
