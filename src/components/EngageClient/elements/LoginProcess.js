// import { useState } from "react";
// import Router from "next/router";
// import { useUser } from "../lib/hooks";
// import Layout from "../components/layout";
// import Form from "../components/form";
import { Magic } from "magic-sdk";
import Loading from "./Loading";
import React, { Component } from "react";

export default class LoginProcess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      error: ""
    };
  }

  async componentDidMount() {
    try {
      console.log("init magic client");
      const magic = new Magic(process.env.MAGIC_PUBLISHABLE_KEY);
      console.log("init magic complete");

      console.log("props:");
      console.log(this.props);

      const didToken = await magic.auth.loginWithMagicLink({
        email: this.props.args.email,
        showUI: false
      });
      console.log(didToken);
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + didToken
        },
        body: JSON.stringify({ email: "gschleic@gmail.com" })
      });
      if (res.status === 200) {
        this.setState({ loggedIn: true });
      } else {
        // return <div>Login Error: {await res.text());
        this.setState({ loggedIn: true, error: "error info here" });
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
    }
  }
  render() {
    if (!this.state.loggedIn)
      return (
        <div>
          Logging in {this.props.args.email}
          <Loading args={{ variant: "a" }} />;
        </div>
      );
    return (
      <div class="font-bold rounded-lg border shadow-lg p-10">
        {this.props.args.email} LOGGED IN! {this.state.error}
      </div>
    );
  }
}
