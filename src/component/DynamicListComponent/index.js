import { List, ListItem, ListItemText, Paper, Typography } from "@material-ui/core";
import { useState } from "react";

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
    <Paper className="listBox" >
      <Typography variant="h2">{params}</Typography>
      <List>
        {listItem.map((item, index) => {
          return <ListItem key={index}>
              <ListItemText>{item}</ListItemText>
          </ListItem>;
        })}
      </List>
    </Paper>
  );
};

export default DynamicListComponent;
