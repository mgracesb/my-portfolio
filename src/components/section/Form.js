import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xyynqjnr"
        method="POST"
      >
        <div className="formHeading">
          <label htmlFor="subject">
            {!this.props.lang ? "Subject:" : "Asunto:"}
          </label>
          <input type="text" name="name" id="subject" />
          <label htmlFor="email">
            {!this.props.lang ? "Email:" : "Correo electrónico:"}
          </label>
          <input type="text" name="_replyto" id="email" />
        </div>
        <textarea rows="10" name="message"></textarea>

        {status === "SUCCESS" ? (
          <p className="ok">
            {!this.props.lang
              ? "✓ Thanks for your message!"
              : "✓ ¡Gracias por el mensaje!"}
          </p>
        ) : (
          <button type="submit" className="submit">
            {!this.props.lang ? "send!" : "¡enviar!"}
          </button>
        )}
        {status === "ERROR" && (
          <p className="error">
            {!this.props.lang
              ? "✗ Ooops! There was an error."
              : "✗ ¡Ups! Ha habido un error"}
          </p>
        )}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
