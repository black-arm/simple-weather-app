import React, { useEffect } from 'react';
import { Spinner } from './modules/shared/components/spinner';
import { Toast } from './modules/shared/components/toast';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { setError } from './modules/shared/domains';
import { interceptors } from './modules/shared/domains/interceptors';

function App() {

  const isLoading = useSelector((state: RootState) => state.general.isLoading);
  const isError = useSelector((state: RootState) => state.general.isError);
  const errorMessage = useSelector((state: RootState) => state.general.errorMessage);  
  const dispatch = useDispatch();

  useEffect(() => {
    interceptors();
  }, []);



  return (
    <div >
      
      { isLoading ? <Spinner></Spinner>: null }
      { isError ? <Toast 
        message={errorMessage} 
        closeToast={() => dispatch(setError())}
        toastType='error'></Toast>: null }
      <Outlet />
    </div>
  );
}

export default App;
