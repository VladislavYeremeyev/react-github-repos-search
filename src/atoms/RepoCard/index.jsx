import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 650
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes, owner, stars, name, description } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {owner}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {/* <Icon className={classNames(classes.icon, 'fas fa-star')} /> */}
          &#x2605;
          {stars}
        </Typography>
        <Typography component="p">
          { `${description.slice(0, 90)}...` }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View on GitHub</Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(SimpleCard);
