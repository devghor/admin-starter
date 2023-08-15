import { Grid } from '@mui/material';
import { SimplePieChart, SimpleRadarChart, SimpleVerticalChart } from '../../components/chart';

function Home() {
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={4}>
          <SimpleVerticalChart />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <SimplePieChart />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <SimpleRadarChart />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
