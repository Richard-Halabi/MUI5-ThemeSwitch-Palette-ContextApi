import React from 'react';
import { AppBar } from './AppBar';

interface Props {}

const AppPage: React.FC<Props> = ({}) => {
  return <AppBar />;
};

//export default AppPage;
export default React.memo(AppPage);
//export default /*React.memo(*/ FormSelectExcercise; /*);*/
