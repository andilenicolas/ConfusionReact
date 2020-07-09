/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import HeaderComponent from './HeaderComponent';

import FooterComponent from './FooterComponent';

import HomeComponent from './HomeComponent';

import { DISHES } from '../Shared/dishes';

import MenuComponent from './MenuComponent';

import DishDetails from './DishDetailsComponent';


import {Switch, Route, Redirect} from 'react-router-dom';


export default class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes:DISHES,
            selectedDishID: null
        }

    }

    onDishSelect(dishID) {
        this.setState({ selectedDishID: dishID });
    }

    render() {

        return (

            <div >

               {/* header */}
               <HeaderComponent />

               <Switch>
                   <Route path="/home" component={()=><HomeComponent/>}/>
                   <Route exact path="/menu" component={() => <MenuComponent dishes={this.state.dishes} onClick={(selectedDishID) => this.onDishSelect(selectedDishID)}/>} />
                   <Redirect to="/home" />
               </Switch>


                {/* <MenuComponent dishes={this.state.dishes} onClick={(selectedDishID)=>this.onDishSelect(selectedDishID)} /> */}
                {/* [0] tells filter to return only one item in this case 1 dish */}
                {/* filter will return a dish of matching id */}
                {/* eslint-disable-next-line array-callback-return */}
                {/* <DishDetails selectedDish={this.state.dishes.filter((dish) => {if(dish.id===this.state.selectedDishID){return dish}})[0] }/> */}


                <FooterComponent />
            </div>


        );
    }
}
