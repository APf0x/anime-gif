// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { AnimePanel } from './AnimePannel';
import { SidebarProvider } from './SidebarProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
	  vscode.window.registerWebviewViewProvider("anime-sidebar", sidebarProvider)
	);
	// context.subscriptions.push(
	// 	vscode.commands.registerCommand('anime-gif.helloWorld', () => {
	// 		AnimePanel.createOrShow(context.extensionUri);
	// 	})
	// );
	// to put in package;
				// {
			// 	"command": "anime-gif.helloWorld",
			// 	"title": "Hello World"
			// }

	// context.subscriptions.push(
	// 	vscode.commands.registerCommand("anime-gif.good", () =>{
	// 		vscode.window.showInformationMessage("how are you ^^", "good" , "bad");
	// 	})
	// );
}

// this method is called when your extension is deactivated
export function deactivate() {}
