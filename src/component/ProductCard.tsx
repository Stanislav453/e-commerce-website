
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export const ProductCard = ({ filterData }) => {
  return (
    <Grid container spacing={2}>
      {filterData.map((product: string, key:number) => {
        const { title, price, description, image } = product;
        return (
          <Grid item xs={2}>
            <Card key={key} sx={{ maxWidth: 345, p: 2 }}>
              <CardMedia
                component='img'
                alt={title}
                image={image}
                sx={{ height: '150px', objectFit: 'contain' }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='subtitle1'
                  component='div'
                  color='inherit'
                  textAlign='center'
                  sx={{ fontWeight: 900 }}
                >
                  {title.substring(0, 11)}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{ fontWeight: 900, textAlign: 'center' }}
                >
                  {`$${price}`}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant='outlined'
                  color='inherit'
                  endIcon={<LocalGroceryStoreIcon />}
                  sx={{ fontSize: '.6rem' }}
                >
                  add to store
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
