import { ExtensionContext, commands, window,QuickPickItem } from 'vscode'; 
import { AddFilesExtended } from './add-files-extended';
import { IInput } from './input';

var menuPath = "";

function sharedPromise(addFilesExtended: AddFilesExtended, promise:Q.Promise<IInput>){
  promise.then(addFilesExtended.createFolder)
      .then(addFilesExtended.createFiles)
      .then(addFilesExtended.openFileInEditor)
      .then(()=>{menuPath="";})
      .catch((err) => {
        menuPath= "";
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
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args, menuPath)
      .then(addFilesExtended.transInput));
  });

  var addAngular2FilesComponent = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesComponent', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args, menuPath)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --c');}));
  });

  var addAngular2FilesComponentTHC = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesComponentTHC', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args, menuPath)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --c t css');}));
  });

  var addAngular2FilesComponentTHCMS = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesComponentTHCMS', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args, menuPath)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --c t css m s');}));
  });

  var addAngular2FilesAll = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesAll', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args, menuPath)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --all');}));
  });

  var addAngular2FilesModule = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesModule', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args, menuPath)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --M');}));
  });

  var addAngular2FilesRouting = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesRouting', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args, menuPath)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --r');}));
  });

  var addAngular2FilesShared = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesShared', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args, menuPath)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --m s');}));
  });

  var addAngular2FilesService = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesService', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args, menuPath)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --s ns');}));
  });

  var addAngular2FilesModel = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesModel', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args, menuPath)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --m ns');}));
  });

  var addAngular2FilesSpec = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesSpec', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args, menuPath)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --spec');}));
  });

  var addAngular2FilesTemplate = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesTemplate', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args, menuPath)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --t');}));
  });

  var addAngular2FilesStyle = commands.registerCommand('extension.Angular2TypescriptHelperAddFilesStyle', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args, menuPath)
      .then(function(input:string){return addFilesExtended.transInput(input + ' --css');}));
  });

  var addAngular2FilesMRC = (args?:any) =>{
       const addFilesExtended: AddFilesExtended = new AddFilesExtended();
        sharedPromise(addFilesExtended, addFilesExtended.showFileNameDialog(args, menuPath)
        .then(function(input:string){return addFilesExtended.transInput(input + ' --c M r');}));
  };

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


  context.subscriptions.push(commands.registerCommand('extension.Angular2TypescriptHelperAddFilesMenu', function (arg) {
        menuPath = arg ? arg.fsPath : (window.activeTextEditor ? window.activeTextEditor.document.fileName : '');
        window.showQuickPick([
            <QuickPickItem>{
                label: 'Components Full (ts, html, css, shared/service and model)'
            },
            <QuickPickItem>{
                label: 'All (component, module, routing, service and model)'
            },
            <QuickPickItem>{
                label: 'Components (ts, html and css)'
            },
            <QuickPickItem>{
                label: 'Modules (component, module and routing)'
            },
            <QuickPickItem>{
                label: 'Shared (service and model)'
            },
            <QuickPickItem>{
                label: 'Component'
            },
            <QuickPickItem>{
                label: 'Template'
            },
            <QuickPickItem>{
                label: 'Style'
            },
            <QuickPickItem>{
                label: 'Service'
            },
            <QuickPickItem>{
                label: 'Model'
            },
            <QuickPickItem>{
                label: 'Module'
            },
            <QuickPickItem>{
                label: 'Routing'
            },
            <QuickPickItem>{
                label: 'Spec'
            }
        ]).then((result) => {
            if (result && result.label.indexOf('Components (ts, html and css)') !== -1) {
                commands.executeCommand('extension.Angular2TypescriptHelperAddFilesComponentTHC');
            } else if (result && result.label.indexOf('All (component, module, routing, service and model)') !== -1) {
                commands.executeCommand('extension.Angular2TypescriptHelperAddFilesAll');
            } else if (result && result.label.indexOf('Shared (service and model)') !== -1) {
                commands.executeCommand('extension.Angular2TypescriptHelperAddFilesShared');
            } else if (result && result.label.indexOf('Components Full (ts, html, css, shared/service and model)') !== -1) {
                commands.executeCommand('extension.Angular2TypescriptHelperAddFilesComponentTHCMS');
            } else if (result && result.label.indexOf('Component') !== -1) {
                commands.executeCommand('extension.Angular2TypescriptHelperAddFilesComponent');
            } else if (result && result.label.indexOf('Template') !== -1) {
                commands.executeCommand('extension.Angular2TypescriptHelperAddFilesTemplate');
            } else if (result && result.label.indexOf('Style') !== -1) {
                commands.executeCommand('extension.Angular2TypescriptHelperAddFilesStyle');
            } else if (result && result.label.indexOf('Service') !== -1) {
                commands.executeCommand('extension.Angular2TypescriptHelperAddFilesService');
            } else if (result && result.label.indexOf('Model') !== -1) {
                commands.executeCommand('extension.Angular2TypescriptHelperAddFilesModel');
            } else if (result && result.label.indexOf('Routing') !== -1) {
                commands.executeCommand('extension.Angular2TypescriptHelperAddFilesRouting');
            } else if (result && result.label.indexOf('Spec') !== -1) {
                commands.executeCommand('extension.Angular2TypescriptHelperAddFilesSpec');
            } else if (result && result.label.indexOf('Modules (component, module and routing)') !== -1) {
                addAngular2FilesMRC();
            }
        });
    }));
}