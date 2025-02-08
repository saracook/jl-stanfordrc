import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the stanfordrc_theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'stanfordrc_theme:plugin',
  description: 'A JL theme for Stanford Research Computing',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension stanfordrc_theme is activated!');
  }
};

export default plugin;
