import {Button, ButtonGroup, styled, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import React from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import {MyTheme} from "./Theme";
import makeStyles from "@material-ui/core/styles/makeStyles";

type Props = {
    search: string
    setSearch: any
}
const useStyles = makeStyles({
    input: {
        fontSize:20,
        color: 'rgba(0, 223, 221, 1)',
        border:'rgba(0, 223, 221, 1)',



    },
    underline: {
        "&:before": {
            borderBottom: "2px solid rgba(0, 223, 221, 1)"
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
            borderBottom: "2px solid rgba(0, 223, 221, 1)"
        },
        "&:after": {
            borderBottom: "3px solid purple"
        }
    },
    disabled: {},
    focused: {},
    error: {}

   
});


export function SearchBox(props: Props) {
    const classes = useStyles();







return(
    <ThemeProvider theme={MyTheme}>
    <ButtonGroup style={{marginBottom:20}}   >
        <Button style={{borderColor:MyTheme.palette.primary.dark}}  disabled onClick={() => {
        }}><SearchIcon style={{color:MyTheme.palette.secondary.main}} ></SearchIcon></Button>
        <div>
            <TextField variant={"standard"} color='secondary' value={props.search}
                       placeholder={'Search Character'} onChange={e => props.setSearch(e.target.value)} InputProps={{classes}} />
        </div>
    </ButtonGroup>
    </ThemeProvider>
)
}