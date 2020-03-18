import React, { Fragment } from 'react';
import { MyContext } from '../context/MyProvider';


const Person = () => (
    <div>
        <MyContext.Consumer>
            {(context) => (
                <Fragment>
                    <hr />
                    <p>This is already Person.js</p>
                    <p>Age: {context.state.age}</p>
                    <p>Name: {context.state.name}</p>
                    <button onClick={context.growAYearOlder}>Birthday time!</button>
                </Fragment>
            )}
        </MyContext.Consumer>
    </div>
)



export default Person;