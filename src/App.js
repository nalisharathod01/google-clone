import { useState } from "react";
import { ApiResultContext } from "./context/apiResultsContext";

import HomePage from "./components/HomePage";
import Results from "./components/Results";
import Images from "./components/Images";
import { getResults } from "./api/resultsApi";
import { getImageResults } from "./api/imageApi";

function App() {
  const [result, setResult] = useState("");
  const [imageResult, setImageResult] = useState("");
  const [search, setSearch] = useState("");
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [chipSelected, setChipSelected] = useState("Web");

  const callApi = async () => {
    await getResults(search).then((data) => {
      setResult(data);
      setIsResultVisible(true);
    });
    await getImageResults(search).then((data) => {
      setImageResult(data);
    });
  };

  return (
    <div className="App">
      <ApiResultContext.Provider
        value={{
          isResultVisible,
          result,
          imageResult,
          callApi,
          setSearch,
          chipSelected,
        }}
      >
        {isResultVisible ? (
          <Results
            result={result}
            imageResult={imageResult}
            chipSelected={chipSelected}
            setChipSelected={setChipSelected}
          />
        ) : (
          <HomePage callApi={callApi} search={search} setSearch={setSearch} />
        )}
      </ApiResultContext.Provider>
    </div>
  );
}

export default App;
