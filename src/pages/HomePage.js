import { useContext, useEffect } from 'react';
import { DataInput } from '../components';
import { ChartContext } from '../store/ChartProvider';

function HomePage() {
  const chartCtx = useContext(ChartContext);

  useEffect(() => {
    chartCtx.init();
  }, []);

  return null;
}

export default HomePage;
