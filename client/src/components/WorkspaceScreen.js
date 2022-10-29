import React, { useEffect } from "react";
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import SongCard from './SongCard.js'
import MUIEditSongModal from './MUIEditSongModal'
import MUIRemoveSongModal from './MUIRemoveSongModal'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { GlobalStoreContext } from '../store/index.js'
import AuthContext from '../auth';
/*
    This React component lets us edit a loaded list, which only
    happens when we are on the proper route.
    
    @author McKilla Gorilla
*/
function WorkspaceScreen() {
    const { store } = useContext(GlobalStoreContext);
    const { auth } = useContext(AuthContext);
    store.history = useHistory();

    console.log(auth.loggedIn);
    console.log(store.currentList);

    let modalJSX = "";
    if (store.isEditSongModalOpen()) {
        modalJSX = <MUIEditSongModal />;
    }
    else if (store.isRemoveSongModalOpen()) {
        modalJSX = <MUIRemoveSongModal />;
    }

    //useEffect to use history.push to homescreen if store is null || or if logged in and has no current list
    //to login screen if logged out
    useEffect(() => {
        console.log("USE EFFECT CALL");
        if (!auth.loggedIn) {
            store.history.push("/login/");
        }

        else if (auth.loggedIn && store.currentList == null) {
            store.history.push("/");
        }
    });

    return (
        <Box>
            <List
                id="playlist-cards"
                sx={{ width: '100%', bgcolor: 'background.paper' }}
            >
                {
                    store.currentList !== null ?
                        store.currentList.songs.map((song, index) => (
                            <SongCard
                                id={'playlist-song-' + (index)}
                                key={'playlist-song-' + (index)}
                                index={index}
                                song={song}
                            />
                        )) : ""
                }
            </List>
            {modalJSX}
        </Box>
    )
}

export default WorkspaceScreen;