import React from "react";

function Contact() {
  return (
    <form className="d-flex justify-content-center align-items-center bg-warning py-3">
      <div className="contact shadow bg-light">
        <div className="py-2 bg-secondary-subtle border border-dark-subtle">
          <h3 className="text-center">Contact With Us</h3>
        </div>
        <div className="p-2">
          <label for="inputName12" class="col-sm-2 col-form-label">
            Your Name
          </label>
          <div class="col-sm-12">
            <input
              className="rounded"
              class="form-control"
              type="text"
              placeholder="Mahendra Bohara"
              id="inputName12"
            />
          </div>
          <br />
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-12">
            <input type="email" class="form-control" id="inputEmail3" placeholder="someone@gmail.com"/>
          </div>
          <label className=' pt-4' for="inputMessage14">Your Message</label>
          <textarea
            className="rounded col-sm-12"
            class="form-control"
            type="text"
            id="inputMessage14"
          />
          <br />
          <div className=" text-center">
          <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Contact;
