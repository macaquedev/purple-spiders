import React, { Component } from 'react'
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Ribbon } from '../components/ribbon'
import ScaleText from "react-scale-text"
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography"
import IconButton from '@material-ui/core/IconButton'
import purple from "@material-ui/core/colors/purple"
import Band from '../images/purple-spiders-3.png'
import GetApp from '@material-ui/icons/GetApp'
import { isMobile } from 'react-device-detect'
import { fade } from "@material-ui/core/styles/colorManipulator"


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
        marginBottom: 10
    },
    reviewBody: {
        fontFamily: "Heebo",
        fontWeight: 300,
        fontSize: 28,
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        marginTop: 30,
        color: "#000000",
        marginBottom: 30,
        marginLeft: 20,
        marginRight: 20
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
    image: {
        maxWidth: "100%",
        height: "auto"
    },
    gridHead: {
        backgroundColor: "#000000"
    },
    gridBody: {
        backgroundColor: purple[700]
    }
}

export default withAuthenticator(class App extends Component {

    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            reviews: []
        }
        this.mounted = true
    }

    async componentDidMount() {
        if (this.mounted) {
            await this.getReviews()
        }
    }

    getMusic = async () => {
        var data = await API.graphql(graphqlOperation(ListReviews))
        this.setState({ reviews: data.data.listReviews.items.sort((a, b) => b.rating - a.rating).slice(0, 3) })
    }

    render() {
        return isMobile ? (
            <Grid container>
                <Grid container style={{ display: "flex", flexWrap: "wrap"}}>
                    <Ribbon />
                </Grid>
                <Grid container style={theme.gridBody} xs={12}>
                    <Grid container xs={12}>
                        <img src={Band} alt="Purple spiders standing in concert hall" style={theme.image} />
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
        ) : (
            <Grid container>
                <Grid container style={{ display: "flex", flexWrap: "wrap"}}>
                    <Ribbon />
                </Grid>
                <Grid container style={theme.gridBody} xs={12}>
                    <Grid container xs={5}>
                        <img src={Band} alt="Purple spiders standing in concert hall" style={theme.image} />
                    </Grid>
                    <Grid container xs={7}>
                        <Grid container style={theme.reviewHeaderContainer}>
                            <Typography style={theme.reviewHeader}>
                                Welcome to the fan club!
                            </Typography>
                        </Grid>
                            <Grid container style={theme.reviewBodyContainer}>
                                <Typography style={theme.reviewBody}>
                                    Thank you for signing up for the Fan Club! This allows you to download music that isn't available to non-Fan Club fans.

                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container>

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