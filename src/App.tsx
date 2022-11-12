import "./styles.css";
import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { severityType, severityMessages } from "./ressources/constants.js";

interface Props {
  severity?: String;
  children?: ReactNode;
  // any props that come into the component
}

// reduziert durch Object Destructing & Entfernung return, da nur ein Ausdruck
//props: { isLoading: boolean }
const LoadingText = (props: { isLoading: boolean }) => (
  <div>{props.isLoading ? <p>Loading...</p> : <h2>Fertig geladen</h2>}</div>
);

const SeverityMessage = ({ severity, children }: Props) => {
  return (
    <div className={severity === "warning" ? "warning" : "error"}>
      {children}
    </div>
  );
};

export default function App() {
  var text = severityMessages.Error;
  var type = severityType.Error;
  var loadingValue = false;

  var randomValue = Math.floor(Math.random() * 2);

  if (randomValue === 0) {
    //Warning
    text = severityMessages.Warning;
    type = severityType.Warning;
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Time now: {new Date().toISOString()}</h2>
      <h3>RandomValue: {randomValue}</h3>
      <LoadingText isLoading={loadingValue} />
      <SeverityMessage severity={type}>{text}</SeverityMessage>
      <br />
    </div>
  );
}

SeverityMessage.propTypes = {
  severity: PropTypes.string,
};
