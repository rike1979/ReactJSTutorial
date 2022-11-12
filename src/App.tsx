import "./styles.css";
import { severityType, severityMessages } from "./ressources/constants.tsx";

// vollumfänglich
/* 
const LoadingText = (probs) => {
  return (
    <div>{probs.isLoading ? <p>Loading...</p> : <h2>Fertig geladen</h2>}</div>
  );
};
*/

// reduziert durch Object Destructing & Entfernung return, da nur ein Ausdruck
const LoadingText = (isLoading) => (
  <div>{isLoading ? <p>Loading...</p> : <h2>Fertig geladen</h2>}</div>
);

const SeverityMessage = ({ severity, children }) => {
  return (
    <div className={severity === "warning" ? "warning" : "error"}>
      {children}
    </div>
  );
};

export default function App() {
  var text = severityMessages.error;
  var type = severityType.error;

  var randomValue = Math.floor(Math.random() * 2);

  if (randomValue === 0) {
    //Warning
    text = severityMessages.warning;
    type = severityType.warning;
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Time now: {new Date().toISOString()}</h2>
      <h3>RandomValue: {randomValue}</h3>
      <LoadingText isLoading={true} />
      <SeverityMessage severity={type}>{text}</SeverityMessage>
      <br />
    </div>
  );
}
