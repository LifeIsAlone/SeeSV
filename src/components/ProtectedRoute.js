import { useContext } from 'react';
import { ChartContext } from '../store/ChartProvider';
import { Navigate, Outlet } from 'react-router';

function ProtectedRoute() {
  const chartCtx = useContext(ChartContext);
  const isFileExist = chartCtx.rawData != null;

  if (!isFileExist) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
