import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from "./styles";
import { ExpanseTrackerContext } from "../../../context/context";

function List() {
  const classes = useStyles();
  const { deleteTransaction, transactions } = useContext(ExpanseTrackerContext);

  //   const transactions = [
  //     { id: 1, type: "Income", category: "Salary", amount: 50, date: new Date() },
  //     { id: 2, type: "Expanse", category: "Pets", amount: 50, date: new Date() },
  //     {
  //       id: 4,
  //       type: "Income",
  //       category: "Bussines",
  //       amount: 50,
  //       date: new Date(),
  //     },
  //   ];

  return (
    <MUIList className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete onClick={() => deleteTransaction(transaction.id)} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
}

export default List;
