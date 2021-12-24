import React from "react";
import { renderToString } from "react-dom/server";

class EmailTemplate {
  getDoctype = () => {
    return '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">';
  };

  getHtmlHead = ({
    title = "",
    styleTags = "",
  }: {
    title?: string;
    styleTags?: string;
  }) => {
    return renderToString(
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: this.stripHtml(styleTags),
          }}
        />
      </head>
    );
  };

  getHtmlBody = ({ innerHtml = "" }: { innerHtml?: string }) => {
    return renderToString(
      <body dangerouslySetInnerHTML={{ __html: innerHtml }}></body>
    );
  };

  private stripHtml = (str) => {
    return str.replace(/(<([^>]+)>)/gi, "");
  };
}

export default EmailTemplate;
