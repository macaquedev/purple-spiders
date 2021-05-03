import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'
import { Ribbon } from '../components/ribbon'
import Band from '../images/purple-spiders.png'
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography"
import ScaleText from "react-scale-text"
import purple from "@material-ui/core/colors/purple"
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsconfig from '../aws-exports'
import { listReviews as ListReviews } from '../graphql/queries'
import { fade } from "@material-ui/core/styles/colorManipulator"

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
    reviewBodyContainer: {
        display: "flex",
        justifyContent: "center",
    },
    reviewBody: {
        fontFamily: "Heebo",
        fontWeight: 300,
        fontSize: 28,
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
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
    gridHead: {
        backgroundColor: "#000000"
    },
    gridBody: {
        backgroundColor: purple[700]
    },
    gridFooter: {
        backgroundColor: "#000000",
        backgroundPosition: "right  center",
        justifyContent: "center",
        display: "flex",
        width: "98.7%",
        height: "5%",

    },
    image: {
        maxWidth: "100%",
        height: "auto"
    },
    copyright: {
        font: "Heebo",
        color: "#ffffff"
    }
}

export default class HomePage extends Component {
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

    getReviews = async () => {
        var data = await API.graphql(graphqlOperation(ListReviews))
        this.setState({ reviews: data.data.listReviews.items.sort((a, b) => b.rating - a.rating).slice(0, 3) })
    }

    render() {
        return (
            <Grid container>
                <Grid container style={{ display: "flex", flexWrap: "wrap"}}>
                    <Ribbon />
                </Grid>
                <Grid container style={theme.gridBody} xs={12}>
                    <Grid container xs={9}>
                        <img src={Band} alt="Purple spiders standing in concert hall" style={theme.image} />
                    </Grid>
                    <Grid container xs={3}>
                        <Grid container style={theme.reviewHeaderContainer}>
                            <Typography style={theme.reviewHeader}>
                                Our Reviews
                            </Typography>
                        </Grid>
                        {
                            this.state.reviews.map(review => (
                                <Grid container style={theme.reviewBodyContainer}>
                                    <StarRatings rating={review.rating} starRatedColor="blue" starUnratedColor="#192300" />
                                    <Typography style={theme.reviewBody}>
                                        {review.content}
                                        <br/>
                                        --- {review.author}
                                    </Typography>
                                </Grid>
                            ))
                        }
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