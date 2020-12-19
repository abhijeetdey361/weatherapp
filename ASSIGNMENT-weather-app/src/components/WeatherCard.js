import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import WeatherCardHeader from "./CardHeader";
import WeatherCardContent from "./CardContent";



const useStyles = makeStyles((theme) => ({
    atmospheric: {
        fontSize: "28px",
        padding: "5px",
    },
    card: {
        minWidth: 400,
        minHeight: 400,
    },
    recommendation: {
        fontFamily: "Montserrat, sans-serif",
        padding: "20px 0px 10px 0px",
        fontSize: "26px",
        textAlign: "center",
    },
    wi: {
        color: "#673ab7",
    },
}));

//NOTE: separate the CardHeader component, CardContent Component into their own separate components, take care of all the props required.

const WeatherCard = props => {
    const classes = useStyles();
    const { currentWeather, forecast, icon, recommendation } = props;


    return (
        <Card className={classes.card}>
            <WeatherCardHeader
                        currentWeather={currentWeather}
                    />
            <WeatherCardContent
                        currentWeather={currentWeather}
                        forecast={forecast}
                        icon={icon}
                        recommendation={recommendation}>
                </WeatherCardContent>        
        </Card>
    );
};

export default WeatherCard;
