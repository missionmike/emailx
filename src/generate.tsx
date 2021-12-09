import Emails from "./emails/index";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import prettier from "prettier";
import { renderToString } from "react-dom/server";
import { writeFileSync } from "fs";
import EmailTemplate from "./helpers/template";
import inlineCss from "inline-css";

Emails.map((Email) => {
  const sheet = new ServerStyleSheet();
  const template = new EmailTemplate();
  const title = ""; // TODO

  try {
    const innerContentWithClasses = renderToString(
      sheet.collectStyles(<Email />)
    );
    const styleTags = sheet.getStyleTags();
    const doctype = template.getDoctype();
    const htmlTag = template.getHtmlTag();
    const htmlHead = template.getHtmlHead({ title, styleTags });
    const htmlBody = template.getHtmlBody({
      innerHtml: innerContentWithClasses,
    });

    let html = "";
    html += doctype;
    html += htmlTag;
    html += htmlHead;
    html += htmlBody;
    html += "</html>";

    let prettyHtml = prettier.format(html, { parser: "html" });
    let outputFile = `./output/${Email.name}.html`;

    const inlineCssOptions = {
      url: __filename,
      removeStyleTags: false,
    };

    inlineCss(prettyHtml, inlineCssOptions).then(function (inlinedCssHtml) {
      writeFileSync(outputFile, inlinedCssHtml);
      console.log(`Wrote ${outputFile}`);
    });

    // writeFileSync(outputFile, prettyHtml);
  } catch (error) {
    console.error("Generate error: " + error);
  } finally {
    sheet.seal();
  }

  return true;
});
