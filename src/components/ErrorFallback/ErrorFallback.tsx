import { FallbackProps } from "react-error-boundary";
import { Page } from '../../page-components';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps): JSX.Element => {
  return (
    <Page>
      <p>Something went wrong</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </Page>
  );
};
