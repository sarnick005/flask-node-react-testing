// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [num1, setNum1] = useState("");
//   const [num2, setNum2] = useState("");
//   const [operation, setOperation] = useState("add");
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState("");

//   const handleCalculate = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/calculate",
//         {
//           num1: parseFloat(num1),
//           num2: parseFloat(num2),
//           operation,
//         }
//       );
//       console.log(response.data.result);
//       setResult(response.data.result);
//       setError("");
//     } catch (error) {
//       setError(
//         error.response ? error.response.data.error : "An error occurred"
//       );
//       setResult(null);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Calculator</h1>
//       <input
//         type="number"
//         value={num1}
//         onChange={(e) => setNum1(e.target.value)}
//         placeholder="Number 1"
//       />
//       <input
//         type="number"
//         value={num2}
//         onChange={(e) => setNum2(e.target.value)}
//         placeholder="Number 2"
//       />
//       <select value={operation} onChange={(e) => setOperation(e.target.value)}>
//         <option value="add">Add</option>
//         <option value="subtract">Subtract</option>
//         <option value="multiply">Multiply</option>
//         <option value="divide">Divide</option>
//       </select>
//       <button onClick={handleCalculate}>Calculate</button>
//       {result !== null && <p>Result: {result}</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }

// export default App;


// TRANSLATOR

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("bn");
  const [translation, setTranslation] = useState(null);
  const [error, setError] = useState("");

  const handleTranslate = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/translate", {
        text,
        target_language: targetLanguage,
      });
      setTranslation(response.data);
      setError("");
    } catch (error) {
      setError(
        error.response ? error.response.data.error : "An error occurred"
      );
      setTranslation(null);
    }
  };

  return (
    <div className="App">
      <h1>Text Translator</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="bn">Bengali</option>
        <option value="hi">Hindi</option>
        <option value="en">English</option>
        <option value="ja">Japanese</option>
      </select>
      <button onClick={handleTranslate}>Translate</button>
      {translation && (
        <div>
          <p>
            <strong>Original Text:</strong> {translation.original_text}
          </p>
          <p>
            <strong>Translated Text:</strong> {translation.translated_text}
          </p>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
