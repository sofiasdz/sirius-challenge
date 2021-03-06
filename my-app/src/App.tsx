import React, {useEffect, useState} from 'react';

import './App.css';
import {
    Box,
    Container,
    createStyles,
    Grid,
    makeStyles,
    TableContainer,
    Theme, useTheme
} from "@material-ui/core";
import BasicTable from "./Table";
import {SearchBox} from "./SearchBox";
import {CharacterType} from "./Types/Types";
import {getAllCharacterData} from "./api/CharacterApi";
import { ThemeProvider } from '@material-ui/core/styles';
import {MyTheme} from "./Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from './logo_alta_ 1 1.png'



function App() {
    const [characters, setCharacters]=useState<CharacterType[]>([]);
    const [search, setSearch] = useState("");



    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        }),
    );

    useEffect(() => {
        getAllCharacterData(1)
            .then((res) => {
                setCharacters(res.results)
            })
            .catch((err) => {
                if (err.status === 401|| err.status===404)
                    console.log(err)

            })
    },[])

  return (
      <ThemeProvider theme={MyTheme}>
          <CssBaseline />
            <Container >
            <Box component="span" m={1} style={{ background: MyTheme.palette.primary.dark }}>
                <div style={{ flex:1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottom: "none",
                    }}>
                <img style={{borderRadius:200, height:100,paddingLeft:1150, paddingTop:10}} src={logo}></img>
                <header style={{
                    textAlign: "center",
                    alignSelf: "center",
                    color:MyTheme.palette.secondary.main,
                    fontSize:40,
                    padding:20
                }}>Rick and Morty Characters</header>
                </div>

            </Box>
            <Box  style={{
                padding:20,
                marginBottom:10
            }}component="span" m={1}>
                <SearchBox search={search} setSearch={setSearch}></SearchBox>





            </Box>


                {
                    characters.length === 0 ? <></> :

                    <BasicTable data={characters}  setCharacters={setCharacters} search={search} setSearch={setSearch}></BasicTable>

                }




            </Container>




      </ThemeProvider>

  );
}

export default App;
