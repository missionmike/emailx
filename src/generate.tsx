import * as fs from "fs";

import ReactDOMServer, { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import Emails from "./emails/index";
import React from "react";
import prettier from "prettier";

Emails.map((Email) => {
  const sheet = new ServerStyleSheet();

  try {
    let html = renderToString(sheet.collectStyles(<Email />));
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

    html += styleTags;

    let htmlWDoc = "<!DOCTYPE html>" + html;
    let prettyHtml = prettier.format(htmlWDoc, { parser: "html" });
    let outputFile = `./output/${Email.name}.html`;
    fs.writeFileSync(outputFile, prettyHtml);
    console.log(`Wrote ${outputFile}`);
  } catch (error) {
    console.error(error);
  } finally {
    sheet.seal();
  }

  return true;
});
