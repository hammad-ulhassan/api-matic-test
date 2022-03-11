import React, { Component, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IPage } from "../App";

const BodyBox = (props:any) =>{
    return (
        <div>
            <h1>{props.activePage.title}</h1>
            <ReactMarkdown
              children={props.activePage.bodyText}
              remarkPlugins={[remarkGfm]}
            />
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