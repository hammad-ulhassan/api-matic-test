import React, { Component, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IPage {
  title: string;
  bodyText: string;
}
interface IBodyBoxState {
  loading: Boolean;
  page: IPage;
}
const BodyBox = ({activePage}) =>{
    return (
        <div>
            <h1></h1>
            <<ReactMarkdown>
        </div>
    );
}

export default BodyBox;


/**
 * 
 * 
          {this.state.loading ? (
            "loading..."
          ) : (
            <ReactMarkdown
              children={this.state.page.bodyText}
              remarkPlugins={[remarkGfm]}
            />
          )}
 */