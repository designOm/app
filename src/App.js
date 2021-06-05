import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import {useState} from "react";
import DynamicListComponent from "./component/DynamicListComponent";
import "./app.scss";

function App() {
  const [queryPrams, setQueryParams] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const retrievePramsList = async () => {
    try {
      let hash, paramsArray;
      hash = window.location.hash;

      if (hash.includes("=")) {
        paramsArray = hash
          .substr(1)
          .split("&")
          .reduce((res, item) => {
            const parts = item.split("=");
            res[parts[0]] = parts[1].split(",");
            return res;
          }, {});

        console.log(paramsArray);
        setQueryParams(paramsArray);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useState(() => {
    retrievePramsList();
    return window.addEventListener("popstate", (event) => {
      retrievePramsList();
    });
  }, [window.location.hash]);

  const handleFormSubmit = () => {};

  return (
    <div className="app" data-colorScheme={isDarkTheme ? 'dark':'light'}>
      <Typography variant="h1">List Retrieved From URL Query Params</Typography>
      {Object.keys(queryPrams).length < 1 ? (
        <a href="/#tags=red,blue,purple">
          If List is not shown Click Here to change Url
        </a>
      ) : null}
      {Object.keys(queryPrams).map((params, index) => {
        return <DynamicListComponent params={params} key={index} />;
      })}
     
    </div>
  );
}

export default App;
