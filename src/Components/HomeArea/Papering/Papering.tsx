import { Paper } from "@material-ui/core";
import AddEmployee from "../../LayoutArea/AddEmployee/AddEmployee";
import "./Papering.css";

import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';


interface sizedFunction{
    funct: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(10),
        width: theme.spacing(14),
        height: theme.spacing(14),
        marginLeft: theme.spacing(60)
      },
    },
  }),
);

function Papering(): JSX.Element {

    const classes = useStyles();
    return (
        <div className={classes.root}>
			<Paper elevation={9} >
             
<AddEmployee/>

            </Paper>
        </div>
    );
}

export default Papering;
