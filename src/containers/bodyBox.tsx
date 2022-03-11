import React, { Component, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IPage } from "../App";

const BodyBox = (props: any) => {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{props.activePage.title}</h1>
      </div>
      <div>
      <ReactMarkdown
              children={props.activePage.bodyText}
              remarkPlugins={[remarkGfm]}
            />
      </div>
    </div>
  );
};

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
