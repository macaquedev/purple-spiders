import React from 'react'
import Grid from '@material-ui/core/Grid'
import { navigate } from 'gatsby'
import ScaleText from "react-scale-text"
import { fade } from "@material-ui/core/styles/colorManipulator"
import Button from '@material-ui/core/Button'
import purple from "@material-ui/core/colors/purple"


const theme = {
    h1: {
        fontFamily: "Heebo",
        fontWeight: 900,
        fontSize: 67,
        display: "flex",
        whiteSpace: "nowrap",
        marginTop: 30,
        color: purple[500],
        marginBottom: 30,
        "&:hover": {
            backgroundColor: fade(purple[500], 0.2),
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        }
    },
    reviewHeaderContainer: {
        display: "flex",
        justifyContent: "center",
    },
    h1Container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    buttons: {
        fontFamily: "Heebo",
        fontWeight: 500,
        maxWidth: '150px',
        minWidth: '70px',
        fontSize: '20px',
        display: "flex",
        color: purple[500],
        "&:hover": {
            backgroundColor: fade(purple[500], 0.2),
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        }
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "nowrap"
    },
    gridHead: {
        backgroundColor: "#000000"
    },
    gridBody: {
        backgroundColor: purple[700]
    }
}

export const Ribbon = () => {
    return (
        <Grid container justify="space-between" alignItems="center" alignContent="center" style={theme.gridHead}>
            <Grid container xs={5} style={theme.h1Container}>
                <Button style={theme.h1} onClick={() => navigate("/")}>
                    <ScaleText maxFontSize={80}>
                        PURPLE SPIDERS 
                    </ScaleText>
                </Button>
            </Grid>
            <Grid container xs={7} style={theme.buttonContainer}>
                <Button color="primary" style={theme.buttons} onClick={() => navigate("/")}>HOME</Button>
                <Button color="primary" style={theme.buttons} onClick={() => navigate("/about-us/")}>ABOUT US</Button>
                <Button color="primary" style={theme.buttons} onClick={() => navigate("/our-music/")}>OUR MUSIC</Button>
                <Button color="primary" style={theme.buttons} onClick={() => navigate("/fan-club/")}>FAN CLUB</Button>
            </Grid>
        </Grid>
    )
}