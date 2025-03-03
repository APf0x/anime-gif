import { SidebarProvider } from "./SidebarProvider";
import * as vscode from 'vscode';



export function activate(context: vscode.ExtensionContext) {
	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
	  vscode.window.registerWebviewViewProvider(
		"anime-motivator",
		sidebarProvider
	  )
	);

	console.log('Congratulations, your extension "anime-gif" is now active!');

	const disposable = vscode.commands.registerCommand('anime-gif.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from anime-gif!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
