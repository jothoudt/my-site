import React from 'react';
import './CurrentlyWorkingOn.css'

function CurrentlyWorkingOn(){
    return(
        <div>
            <h2><u>Things I am currently working on.</u></h2>
            <div>
                <div>
                    <h6>1.Ecommerce App</h6>
                    <p>I am currently working on an Ecommerce App. 
                        The app is being built using React, Redux, Node, Express, PostgreSQL, Material UI and Stripe Checkout.
                    </p>
                </div>
            </div>
            <div>
                <h6>2. Job Searching</h6>
                <p>I currently searching for my first role as a developer. I am interested in finding a position with a good team where I can 
                    jump in and get started in my journey to becoming an experienced developer.
                </p>
            </div>
            <div>
                <h6>3. Learning new technologies and languages.</h6>
                <p>There is always something new to learn so I like build projects in languages that are new to me and experiment with different tech.</p>
            </div>
        </div>
    )
}

export default CurrentlyWorkingOn;