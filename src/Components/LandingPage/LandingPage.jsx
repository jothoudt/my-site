import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import './LandingPage.css';

function LandingPage({setIsLandingPage}){
    return(
        <div className="landing-page-body" style={{minHeight:"100vh", minWidth:"100vw"}}>
            <Box border={2} borderColor="White" boxShadow={12} style={{height: '240px', width:'500px', margin: "auto", 
                padding: "20px",position: "absolute",top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign:"center"}}>
                <div>
                    <h2>Hi, I am <span className="emphasize">Jonathan Othoudt</span>. I'm a <span className="emphasize">Full-Stack Software Engineer</span>.</h2>
                </div>
                <div className="button-display">
                    <Button variant="outlined" size="large" style={{marginTop:"20px",borderColor:"white", color:"white"}} onClick={()=>{setIsLandingPage(false)}}>Next</Button>
                </div>
            </Box>
        </div>
    )
}

export default LandingPage;