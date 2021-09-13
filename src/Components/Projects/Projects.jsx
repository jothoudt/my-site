import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import YourPath from '../YourPath/YourPath';
import MealReel from '../MealReel/MealReel';
/* This will be the main component for projects that I have worked on.
It will display tabs on the top that the user can switch between projects. */
function Projects(){
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box style={{width:"90%", marginLeft:"auto", marginRight:"auto"}}p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `full-width-tab-${index}`,
          'aria-controls': `full-width-tabpanel-${index}`,
        };
      }
      
      const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: theme.palette.background.paper,
          width: '100vw',
        },
      }));
      
    //   export default function FullWidthTabs() {
        const classes = useStyles();
        const theme = useTheme();
        const [value, setValue] = React.useState(0);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
      
        const handleChangeIndex = (index) => {
          setValue(index);
        };
    return(
        <div className={classes.root}>
        {/* <AppBar position="static" color="default"> */}
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
            style={{backgroundColor:"#E5E4E2", color:"#000000"}}

          >
            <Tab label="YourPath" {...a11yProps(0)} />
            <Tab label="MealReel" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <YourPath />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <MealReel />
          </TabPanel>
      </div>
    )
}

export default Projects;