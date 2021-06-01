import React from 'react'
import { Card } from 'semantic-ui-react'

export const WeatherCard = (props) => {
    return (
        <Card color='blue'>
            {props.children}
        </Card>
    )
}


export default WeatherCard;