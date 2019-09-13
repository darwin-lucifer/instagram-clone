import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import './App.css'

const useStyles = makeStyles({
  card: {
    width: 160,
    height: 182,
    margin: '60px auto',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  followButton: {
    background: '#3897f0',
    color: 'white',
  },
  recommendedText: {
    fontSize: 14,
  },
  avatar: {
    width: 60,
    height: 60,
    marginBottom: 10,
  }
});

function MediaCard(props) {
  const [nama, setNama] = useState('Ikuti');

  function onClick(){
    if(nama === 'Mengikuti'){
      setNama('Ikuti');
    } else {
      setNama('Mengikuti')
    }
  }
  
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Avatar
        src={props.imageUrl}
        alt="nendroid"
        className={classes.avatar}
      />
      <Typography gutterBottom>
        {props.username}
      </Typography>
      <Typography gutterBottom color="textSecondary" className={classes.recommendedText}>
        Diikuti oleh Tomy_Jr + sinn...
      </Typography>
      <Button size="small" className={classes.followButton} variant="contained" onClick={onClick}>
        {nama}
      </Button>
    </Card>
  );
}

function RenderCardList(props) {
  return (
    <div style={{display: 'flex'}}>
      <MediaCard username="ravlucifer" imageUrl={'https://pbs.twimg.com/media/D4wtbrfW0AAk3Xw.jpg'}/>
      <MediaCard username="Felix" imageUrl={'https://pbs.twimg.com/media/D12xog1UwAAuuBP.jpg'}/>
      <MediaCard username="Stevan" imageUrl={'http://www.pethealthnetwork.com/sites/default/files/content/images/cardigan-welsh-corgi100642967.png'}/>
      <MediaCard username="Rav" imageUrl={'http://photos.puppyspot.com/breeds/245/card/500000291_medium.jpg'}/>
    </div>
  )
}

export default RenderCardList;
