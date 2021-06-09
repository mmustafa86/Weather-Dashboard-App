import React,{Fragment} from 'react'
import { Grid,Header,Divider,Container} from "semantic-ui-react";
import Search from '../weather/Search'
import Weather from '../weather/Weather'
import GetWeather from '../weather/GetWeather'
import Templet from '../layout/Templet'
// import WeatherIcons from '../layout/WeatherIcons'

export const Home = () => {
    return (
        <Fragment>
        <Templet/>
{/*         
<Grid textAlign="center" centered columns={2} style={{ margin: 30 }}>

<Header as="h2">
Weather
</Header>

<Divider />


<Grid.Row centered columns={6}>
<Grid.Column width={6}>
<Search/>
</Grid.Column>

</Grid.Row>

<Grid.Row centered columns={6}>
<Grid.Column width={4}>
<Weather/>
</Grid.Column>
</Grid.Row>

<Grid.Row centered columns={6}>
<Grid.Column  width={4}>

<GetWeather/>
</Grid.Column>
</Grid.Row>

<WeatherIcons/>

</Grid> */}

        </Fragment>
    )
}


export default Home;