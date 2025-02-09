import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { showDialog, Dialog } from '@jupyterlab/apputils';
import { NistWidget } from './widget';
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


const content = new NistWidget();

showDialog({
            title: "Welcome to Carina",
            body: content,
            hasClose: false,
            buttons: [Dialog.okButton()]
          }).catch(e => console.log(e));

export default plugin;
