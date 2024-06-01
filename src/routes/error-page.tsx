import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import { Button } from "../components/ui/Button/Button"

const ErrorPage: React.FC = () => {
  // you don't need to explicitly set error to `unknown`
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }
  return (
    <div id="error-page" className='flex flex-col gap-8 justify-center items-center h-screen w-screen text-2xl'>
      <h1 className='font-bold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='text-slate-500'>
        <i>{errorMessage}</i>
      </p>
      <Link to ='/devicelist'>
        <Button className='btn-outlined'>
          To dashboard
        </Button>
      </Link>
    </div>
  );
}

export default ErrorPage