import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePathsE } from '../models/Models';

export const NotFound: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(RoutePathsE.Home);
    }, 1000);
  }, [navigate]);

  return <h1>NotFound</h1>;
};
