import React, { Component } from 'react'
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Ribbon } from '../components/ribbon'
import ScaleText from "react-scale-text"
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button'
import purple from "@material-ui/core/colors/purple"
import Band from '../images/purple-spiders-2.png'
import { PlayArrow } from '@material-ui/icons/'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsconfig from '../aws-exports'
import { fade } from "@material-ui/core/styles/colorManipulator"
import { listMusics as ListMusics } from '../graphql/queries'

Amplify.configure(awsconfig)

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
    reviewBodyContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: 50
    },
    reviewHeader: {
        fontFamily: "Heebo",
        fontWeight: 500,
        fontSize: 60,
        display: "flex",
        justifyContent: "center",
        whiteSpace: "nowrap",
        marginTop: 30,
        color: "#000000",
    },
    reviewBody: {
        fontFamily: "Heebo",
        fontWeight: 300,
        fontSize: 28,
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        color: "#000000",
    },
    musicDownloadText: {
        fontFamily: "Heebo",
        fontWeight: 300,
        fontSize: 28,
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        color: "#000000",
        marginTop: 30
    },
    h1Container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    buttons: {
        fontFamily: "Heebo",
        fontWeight: 500,
        maxWidth: '300px',
        minWidth: '70px',
        fontSize: '15px',
        display: "flex",
        marginLeft: 30,
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
    image: {
        maxWidth: "100%",
        height: "auto"
    },
    gridHead: {
        backgroundColor: "#000000"
    },
    gridBody: {
        backgroundColor: purple[700]
    },
    gridFooter: {
        backgroundColor: "#000000",
        backgroundPosition: "right center",
        justifyContent: "center",
        display: "flex",
        width: "98.7%",
        height: "5%",

    },
    copyright: {
        font: "Heebo",
        color: "#ffffff"
    },
}

export default withAuthenticator(class App extends Component {

    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            music: []
        }
        this.mounted = true
    }

    async componentDidMount() {
        if (this.mounted) {
            await this.getMusic()
        }
    }

    async getMusic() {
        var data = await API.graphql(graphqlOperation(ListMusics))
        this.setState({ music: data.data.listMusics.items.filter((item => item.isFanClubOnly === true))})
    }

    render() {
        return (
            <Grid container>
                <Grid container style={{ display: "flex", flexWrap: "wrap"}}>
                    <Ribbon />
                </Grid>
                <Grid container style={theme.gridBody} xs={12}>
                    <Grid item xs={5}>
                        <img src={Band} alt="Purple spiders standing in concert hall" style={theme.image} />
                    </Grid>
                    <Grid item xs={7}>
                        <Grid container style={theme.reviewHeaderContainer}>
                            <Typography style={theme.reviewHeader}>
                                Welcome to the fan club!
                            </Typography>
                            <Typography style={theme.musicDownloadText}>
                                Thank you for signing up to the Fan Club! This allows you to download music that isn't available to non-Fan Club fans.
                                <br/>
                                <br/>
                                <br/>
                            </Typography>
                        </Grid>
                        <Grid container>
                            {
                                this.state.music.map(song => (
                                    <Grid container style={theme.reviewBodyContainer}>
                                        <Typography style={theme.reviewBody}>
                                            {song.name}
                                        </Typography>
                                        <Button variant="primary" style={theme.buttons} startIcon={<PlayArrow />} href={song.link} target="_blank">
                                            Play on SoundCloud
                                        </Button>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid style={theme.gridFooter} xs={12}>
                    <Typography style={theme.copyright}>
                        <ScaleText maxFontSize={20}>
                            Copyright &copy; PURPLE SPIDERS 2021
                        </ScaleText>
                    </Typography>
                </Grid>
            </Grid>
        )
    }
})