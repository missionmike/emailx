import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Emails from "./emails/index";
import { Layout } from "./components/Layout";
import React from "react";
import ReactDOM from "react-dom";
import { mdxComponents } from "./components/mdxComponents";

const EmailList = () => {
  return (
    <div>
      {Emails.map((Email, index) => {
        return (
          <p key={`email-${index.toString()}`}>
            <Link to={`/emails/${Email.name}`}>{Email.name}</Link>
          </p>
        );
      })}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailList />} />
        {Emails.map((Email, index) => {
          const EmailComponent = () => {
            return (
              <Layout>
                <Email components={mdxComponents} />
              </Layout>
            );
          };
          return (
            <React.Fragment key={`route-${index.toString()}`}>
              <Route
                path={`/emails/${Email.name}`}
                element={<EmailComponent />}
              />
            </React.Fragment>
          );
        })}
      </Routes>
    </Router>
  );
};

if (typeof window !== "undefined") {
  ReactDOM.render(<App />, document.getElementById("root"));
}
