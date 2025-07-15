import { useContext, useEffect } from 'react';
import { ChartContext } from '../store/ChartProvider';
import { Outlet, useNavigate } from 'react-router';
import { toast } from 'sonner';

function ProtectedRoute() {
  const chartCtx = useContext(ChartContext);
  const isFileExist = chartCtx.rawData != null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isFileExist) {
      toast.error('파일이 입력되지 않아 메인 페이지로 이동합니다.');
      navigate('/', { replace: true });
    }
  }, [isFileExist, navigate]);

  // 파일이 존재하지 않을 때는 아무것도 렌더링하지 않음 (리다이렉션이 완료될 때까지)
  if (!isFileExist) {
    return null;
  }

  // 파일이 존재할 때만 자식 라우트 렌더링
  return <Outlet />;
}

export default ProtectedRoute;
