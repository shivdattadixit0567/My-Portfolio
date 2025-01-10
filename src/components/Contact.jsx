import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="flex justify-center items-center drop-shadow-lg h-auto bg-indigo-500"
    >
      <div className="w-[80%] mt-16">
        <h1 className="text-3xl font-sans font-bol">Contact Me</h1>
        <div className="p-12">
          <div className="flex flex-wrap justify-around">
            <div>
              <p>
                {" "}
                <strong>Contact No.</strong> : 9651820567
              </p>
            </div>
            <div>
              <p>
                {" "}
                <strong>Email</strong> : shivdattadixit0567@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
