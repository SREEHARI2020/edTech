import React from 'react'
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import '../assets/css/ProgressBar.css'

import LinearProgress from '@material-ui/core/LinearProgress';
import { Button } from '@material-ui/core';

const ProgressBar = ({time,total}) => {

  const hours=Math.floor(total/60)

    const BorderLinearProgress = withStyles((theme: Theme) =>
    createStyles({
      root: {
        height: 10,
        borderRadius: 5,
      },
      colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
      },
      bar: {
        borderRadius: 5,
        backgroundColor: '#2FED51',
      },
    }),
  )(LinearProgress);
  const useStyles = makeStyles({
      root: {
        flexGrow: 1,
      },
    });
    const classes = useStyles();
        
    return (
        <div className="progress-bar">
             <div className={classes.root}>
             <BorderLinearProgress variant="determinate" value={time} />
                

</div>

        <div  className="progress-bar-text-left" ><span>Used</span> <div>{time}m</div></div>
        <div className="progress-bar-text-right"><span>Max</span> <div>{hours}h</div></div>
      
        <div className="progress-bar-button"><Button variant="outlined" color="primary">Extend Free Time</Button></div>
        <div className="progress-bar-bottom-text"><div>Change Time Restrictions</div></div>


              
        </div>
    )
}

export default ProgressBar
