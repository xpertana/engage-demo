import React, { Component } from "react";
import Head from "next/head";

export default class Calendly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendly: null,
      hidden: false
    };
  }

  componentDidMount() {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
    window.addEventListener("message", e => this.hide.bind(this)(e));
  }

  isCalendlyEvent(e) {
    return e.data.event && e.data.event.indexOf("calendly") === 0;
  }

  hide(e) {
    if (
      this.isCalendlyEvent(e) &&
      e.data.event === "calendly.event_scheduled"
    ) {
      console.log(e.data);
      this.setState({ hidden: true });
    }
  }

  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }

  render() {
    const { type = "xpertana/30min" } = this.props.args;

    if (this.state.hidden) return <div></div>;
    return (
      //   <div style={{ height: "720px" }}>
      // <div id="schedule_form">
      <div
        className="calendly-inline-widget"
        data-url={`https://calendly.com/${type}?hide_event_type_details=1`}
        data-prefill={{
          name: "Glenn Schleicher",
          email: "gschleic@gmail.com"
        }}
        style={{ minWidth: "250px", height: "720px" }}
      />
      // </div>
      //   </div>
    );
  }
}
