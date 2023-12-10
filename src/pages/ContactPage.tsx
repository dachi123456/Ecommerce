const ContactPage = () => {
  return (
    <div style={{marginTop:'5rem', position:'relative',zIndex:'0'}}>
      <div className="p-4">
      <form className="row g-3 needs-validation" noValidate>
    <div className=" col-sm-6 position-relative">
      <label htmlFor="validationTooltip01" className="form-label">
        First name
      </label>
      <input
        type="text"
        className="form-control"
        id="validationTooltip01"
        defaultValue=""
        required
      />
      <div className="valid-tooltip">Looks good!</div>
    </div>
    <div className=" col-sm-6 position-relative ">
      <label htmlFor="validationTooltip02" className="form-label">
        Last name
      </label>
      <input
        type="text"
        className="form-control"
        id="validationTooltip02"
        defaultValue=""
        required
      />
      <div className="valid-tooltip">Looks good!</div>
    </div>
    <div className=" col-sm-6 position-relative">
      <label htmlFor="validationTooltipUsername" className="form-label">
        Username
      </label>
      <div className="input-group has-validation">
        <span className="input-group-text" id="validationTooltipUsernamePrepend">
          @
        </span>
        <input
          type="text"
          className="form-control"
          id="validationTooltipUsername"
          aria-describedby="validationTooltipUsernamePrepend"
          required
        />
        <div className="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
      
    </div>
    <div className=" col-sm-6 position-relative">
      <label htmlFor="validationTooltipUsername" className="form-label">
        Mail
      </label>
      <div className="input-group has-validation">
        <input
          type="mail"
          className="form-control"
          id="validationTooltipUsername"
          aria-describedby="validationTooltipUsernamePrepend"
          required
        />
        <div className="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
      
    </div>
    <div className="col-sm-6 position-relative">
      <label htmlFor="validationTooltip03" className="form-label">
        City
      </label>
      <input type="text" className="form-control" id="validationTooltip03" required />
      <div className="invalid-tooltip">Please provide a valid city.</div>
    </div>
    
    <div className="col-md-3 col-sm-6 position-relative">
      <label htmlFor="validationTooltip05" className="form-label">
        Zip
      </label>
      <input type="text" className="form-control" id="validationTooltip05" required />
      <div className="invalid-tooltip">Please provide a valid zip.</div>
    </div>
    <div className="col-12">
      <button className="btn btn-primary" type="submit">
        Submit form
      </button>
    </div>
  </form>
    </div>
    </div>

  );
};

export default ContactPage;
