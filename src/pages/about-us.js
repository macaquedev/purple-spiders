import React, { Component } from 'react'
import { Ribbon } from '../components/ribbon'
import ScaleText from "react-scale-text"
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography"
import purple from "@material-ui/core/colors/purple"
import Band from '../images/purple-spiders-2.png'
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

export default class App extends Component {

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
        this.setState({ music: data.data.listMusics.items.filter((item => item.isFanClubOnly === false))})
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
                                About Us
                            </Typography>
                        </Grid>
                        <Grid container style={theme.reviewBodyContainer}>
                            <Typography style={theme.musicDownloadText}>
                                <br/>
                                Purple Spiders is a rock band based in London, UK, formed in 2020. <br/>
                                We are comprised of 4 members and play all sorts of rock and metal music, <br/>
                                ranging from more traditional styles to modern styles.
                                <br/><br/><br/><br/>
                                Hire us by emailing APPurpleSpiders@gmail.com
                            </Typography>
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
}