import { ReactWidget } from '@jupyterlab/ui-components';

import React from 'react';

/**
 * React component for a counter.
 *
 * @returns The React component
 */
const NistComponent = (): JSX.Element => {

return (
  <>
  <div>Hey! You! Don't do shady shit on here</div>
  <div>Seriously, do not. This is NIST, bitch!</div>
  </>
  );
};

/**
 * A Lumino Widget that wraps a NistComponent.
 */
export class NistWidget extends ReactWidget {
  /**
   * Constructs a new CounterWidget.
   */
  constructor() {
    super();
    this.addClass('jp-react-widget');
  }

  render(): JSX.Element {
    return <NistComponent />;
  }
}
