import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography, withStyles } from '@material-ui/core';
import { TimelineOppositeContent } from '@material-ui/lab';

const GlobalCss = withStyles({
  '@global': {
    '.MuiTimelineOppositeContent-root': {
      flex: 'none',
      marginRight:'0',
      width: '80px',
      paddingLeft: '0',
      paddingTop: '0',
      textAlign: 'right',
      
    },
    '.MuiTimelineContent-root': {
      flex: '1',
      maxWidth: '570px',
      marginBottom: '40px',
      padding:'0 15px',
    },
    '.MuiTypography-root': {
      fontFamily: 'poppins',
    },
    '.MuiTimeline-root': {
      padding: '0',
    },
  },
})(() => null);


function MuiTimeline() {
    return (
    <Timeline >
    <GlobalCss />
        <TimelineItem>
          <TimelineOppositeContent >
            <Typography color="textSecondary">5<sup>th</sup> Feb</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Bootcamp 
            </Typography>
            <Typography>Quickly get acquainted with the event and its requirements.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent >
            <Typography color="textSecondary">6<sup>th</sup> Feb</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Hackathon
            </Typography>
            <Typography>Start hacking! Now is the time to come up with cool and exotic ideas, something that will one day make you glorious. </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent >
            <Typography color="textSecondary">7<sup>th</sup> Feb</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Review
            </Typography>
            <Typography>Submitted projects will be evaluated by an expert panel based on several parameters.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent >
            <Typography color="textSecondary">13<sup>th</sup> Feb</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Result announcement
            </Typography>
            <Typography>IdeaOryx comes to an end. The best idea and the team are announced to the public.</Typography>
          </TimelineContent>
        </TimelineItem>
        
        
        </Timeline>
    )
}

export default MuiTimeline