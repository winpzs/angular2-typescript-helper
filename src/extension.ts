import { ExtensionContext, commands, window } from 'vscode'; 
import { AddFilesExtended } from './add-files-extended';
import { IInput } from './input';

function sharedPromise(addFilesExtended: AddFilesExtended, promise:Q.Promise<IInput>){
  promise.then(addFilesExtended.createFolder)
      .then(addFilesExtended.createFiles)
      .then(addFilesExtended.openFileInEditor)
      .catch((err) => {
        if (err) {
          //console.log(err);
          window.showErrorMessage(err);
        }
      });
}

export function activate(context: ExtensionContext) {
  console.log('Congratulations, your extension is now active!');

  var addAngular2FilesExtended = commands.registerCommand('extension.Angular2TypescriptHelperAddFiles', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args)
      .then(addFilesExtended.transInput));
  });

  var addAngular2FilesComponent = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesComponent', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --c');}));
  });

  var addAngular2FilesComponentTHC = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesComponentTHC', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --c t css');}));
  });

  var addAngular2FilesComponentTHCMS = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesComponentTHCMS', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --c t css m s');}));
  });

  var addAngular2FilesAll = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesAll', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --all');}));
  });

  var addAngular2FilesModule = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesModule', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --M');}));
  });

  var addAngular2FilesRouting = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesRouting', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --r');}));
  });

  var addAngular2FilesShared = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesShared', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --m s');}));
  });

  var addAngular2FilesService = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesService', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --s ns');}));
  });

  var addAngular2FilesModel = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesModel', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --m ns');}));
  });

  var addAngular2FilesSpec = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesSpec', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --spec');}));
  });

  var addAngular2FilesTemplate = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesTemplate', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --t');}));
  });

  var addAngular2FilesStyle = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesStyle', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --css');}));
  });

  context.subscriptions.push(addAngular2FilesExtended);
  context.subscriptions.push(addAngular2FilesComponent);
  context.subscriptions.push(addAngular2FilesComponentTHC);
  context.subscriptions.push(addAngular2FilesAll);
  context.subscriptions.push(addAngular2FilesModule);
  context.subscriptions.push(addAngular2FilesRouting);
  context.subscriptions.push(addAngular2FilesShared);
  context.subscriptions.push(addAngular2FilesService);
  context.subscriptions.push(addAngular2FilesModel);
  context.subscriptions.push(addAngular2FilesSpec);
  context.subscriptions.push(addAngular2FilesTemplate);
  context.subscriptions.push(addAngular2FilesStyle);
  context.subscriptions.push(addAngular2FilesComponentTHCMS);
}