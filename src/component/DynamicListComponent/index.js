import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import {useState} from "react";
import './index.scss';

const DynamicListComponent = (props) => {
  const {params} = props;
  const [listItem, setListItems] = useState([]);

  const storePramsToListItem = async () => {
    const urlParams = window.location.hash.match(
      new RegExp(params + "=([^&]*)")
    );
    try {
      setListItems(urlParams[1].split(","));
    } catch (e) {
      console.log(e);
    }
  };

  useState(() => {
    storePramsToListItem();
    return window.addEventListener("popstate", (event) => {
      storePramsToListItem();
    });
  }, []);

  return (
    <div className="listBox">
      <Typography variant="h2" className="listBox__heading">{params}</Typography>
      <ul className="listBox__list">
        {listItem.map((item, index) => {
          return (
            <li key={index} className="listBox__listItem">
              {/* <span>{item}</span> */}
              <Typography component="span" variant="body2">{item}</Typography>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DynamicListComponent;
