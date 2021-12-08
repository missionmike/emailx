import Emails from "./emails/index";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import prettier from "prettier";
import { renderToString } from "react-dom/server";
import { writeFileSync } from "fs";

console.log("Init.");

Emails.map((Email) => {
  const sheet = new ServerStyleSheet();

  try {
    let html = renderToString(sheet.collectStyles(<Email />));
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
    html = styleTags + html;

    let htmlWDoc = "<!DOCTYPE html>" + html;
    let prettyHtml = prettier.format(htmlWDoc, { parser: "html" });
    let outputFile = `./output/${Email.name}.html`;

    writeFileSync(outputFile, prettyHtml);

    console.log(`Wrote ${outputFile}`);
  } catch (error) {
    console.error("Generate error: " + error);
  } finally {
    sheet.seal();
  }

  return true;
});
