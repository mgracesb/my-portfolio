import React from "react";

// class LangToggle extends React.Component {
//   state = { lang: "english" };

//   render() {
//     return (
//       <div></div>
//     );
//   }
// }

// export default LangToggle;

class LangToggle extends React.Component {
  constructor(props) {
    super(props);
    this.buttonSize = 150;
  }

  langToggle = (e) => {
    e.preventDefault();
    this.props.langToggle();
  };

  render() {
    const { lang } = this.props;

    return (
      <div className="widget">
        <div className="langToggle">
          <button
            className={`circle ${lang ? "click" : null}`}
            onClick={this.langToggle}
          >
            <span>{lang ? "ES" : "EN"}</span>
          </button>
        </div>
      </div>
    );
  }
}

export default LangToggle;
