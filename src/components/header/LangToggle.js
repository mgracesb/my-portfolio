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
    this.state = {
      lang: false,
    };
  }

  langToggle = () => {
    this.setState({
      lang: !this.state.lang,
    });
  };
  render() {
    const { lang } = this.state;

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
