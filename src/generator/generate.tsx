import { existsSync, mkdirSync, writeFileSync } from "fs";

import EmailTemplate from "./EmailTemplate";
import Emails from "../../emails/index";
import { Layout } from "../components/Layout";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import inlineCss from "inline-css";
import prettier from "prettier";
import { renderToString } from "react-dom/server";

if (!existsSync("./output")) {
  mkdirSync("./output");
}

Emails.map((Email) => {
  const sheet = new ServerStyleSheet();
  const template = new EmailTemplate();
  const subject = Email.subject || `untitled_${Date.now()}`;
  const emailFilename = subject.replace(/[^a-z0-9]/gi, "_").toLowerCase();

  try {
    const innerHtml = renderToString(
      sheet.collectStyles(
        <Layout subject={Email.subject}>
          <Email />
        </Layout>
      )
    ); // generated HTML with classes.
    const styleTags = sheet.getStyleTags();

    const doctype = template.getDoctype();
    const htmlHead = template.getHtmlHead({ title: subject, styleTags });
    const htmlBody = template.getHtmlBody({ innerHtml });

    console.log(subject);

    let html = "";
    html += doctype;
    html += '<html xmlns="http://www.w3.org/1999/xhtml">';
    html += htmlHead;
    html += htmlBody;
    html += "</html>";

    let prettyHtml = prettier.format(html, { parser: "html" });
    let outputFile = `./output/${emailFilename}.html`;

    const inlineCssOptions = {
      url: __filename,
      removeStyleTags: false,
    };

    inlineCss(prettyHtml, inlineCssOptions).then(function (inlinedCssHtml) {
      let voidTagsReplaced = inlinedCssHtml.replace(
        /<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)([^><\n\r]*[^\/>])*[\/>]*/g,
        "<$1$2/>"
      );

      let removeDataAttr = voidTagsReplaced.replace(/ data-reactroot/g, "");

      writeFileSync(outputFile, removeDataAttr);
      console.log(`Wrote ${outputFile}`);
    });
  } catch (error) {
    console.error("Generate error: " + error);
  } finally {
    sheet.seal();
  }

  return true;
});
