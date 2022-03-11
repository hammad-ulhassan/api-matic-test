import React, { Component, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default class BodyBox extends Component {
  state = {
    loading: false,
    page: {
        title:'',
        bodyText:''
    },
  };

  private _url =
    "https://gist.githubusercontent.com/thehappybug/65a466dcdb0908767057b80f0cb7ea5d/raw/6f10747c5feb7ce91b83392f2cee23ae06b20fe6/doc.json";

  async componentDidMount() {
    const response = await fetch(this._url).then((e) => e.json());
    this.setState({ page: response.Pages[0], loading:false });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          "loading..."
        ) : (
          <ReactMarkdown
            children={this.state.page.bodyText}
            remarkPlugins={[remarkGfm]}
          />
        )}
      </div>
    );
  }
}
