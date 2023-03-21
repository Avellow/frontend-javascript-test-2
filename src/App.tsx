import { withErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './components';

import { Page } from './page-components';
import Router from './routes/router';

function App(): JSX.Element {
  return (
    <Page>
      <Router />
    </Page>
  );
}

export default withErrorBoundary(App, {
  FallbackComponent: ErrorFallback,
});
