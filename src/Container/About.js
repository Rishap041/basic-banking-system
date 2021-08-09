import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from "@material-ui/core/IconButton";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function About() {
    return (
        <div style={{marginTop:"15%"}}>
            <h3>Developed and designed by <b>RISHAP KUMAR</b></h3>

            <Button style={{ color: "black" }} onClick={() => window.open("https://github.com/Rishap041", '_blank')}>
            <GitHubIcon style={{fontSize:"40px"}}/>
            </Button>
           
            <Button style={{ color: "#2196F3" }} onClick={() => window.open("https://twitter.com/Rishap__k", '_blank')}>
            <TwitterIcon style={{fontSize:"40px"}}/>
            </Button>

            <Button style={{ color: "#0A66C2" }} onClick={() => window.open("https://linkedin.com/in/rishap-kumar-4330971aa", '_blank')}>
                <LinkedInIcon style={{fontSize:"40px"}}/>
            </Button>

        </div>
    )
}

export default About
