import { isDate } from "util/types";
import { getNonce } from "./getNonce";
import * as vscode from "vscode";

var IsDebugging: Boolean = false;

vscode.debug.onDidStartDebugSession(() => {
  IsDebugging = true;
});

vscode.debug.onDidTerminateDebugSession(() => {
  IsDebugging = false;
});

let lastActiveTime = Date.now();
let IsUserIDLE: boolean = false;
function resetIdleTimer() {
  lastActiveTime = Date.now();
}

vscode.workspace.onDidChangeTextDocument(resetIdleTimer);
vscode.window.onDidChangeActiveTextEditor(resetIdleTimer);

const IDLE_THRESHOLD = 60 * 1000; // 1 minute

setInterval(() => {
  if (Date.now() - lastActiveTime > IDLE_THRESHOLD) {
    IsUserIDLE = true;
  } else {
    IsUserIDLE = false;
  }
}, 10000);

const idle = ["baka", "bite", "dance", "nod", "lurk", "nom", "pat", "poke", "pout", "sleep", "stare", "wave", "yawn", "yeet"];
const coding = ["baka", "bite", "blush", "cuddle", "dance", "facepalm", "feed", "handhold", "happy", "hug", "kiss", "laugh", "lurk", "nod", "nom", "pat", "peck", "smile", "smug", "stare", "think", "thumbsup", "tickle", "wave", "wink", "yeet"];
const debugging = ["baka", "bite", "blush", "bored", "cry", "cuddle", "dance", "facepalm", "feed", "handhold", "handshake", "happy", "highfive", "hug", "kick", "kiss", "laugh", "lurk", "nod", "nom", "nope", "pat", "peck", "poke", "pout", "punch", "shoot", "shrug", "slap", "sleep", "smile", "smug", "stare", "think", "thumbsup", "tickle", "wave", "yawn", "yeet"];

export class SidebarProvider implements vscode.WebviewViewProvider {
  _view?: vscode.WebviewView;
  _doc?: vscode.TextDocument;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  public resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;

    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this._extensionUri],
    };

    // Recalculate current action dynamically
    const currentaction = IsUserIDLE ? idle : IsDebugging ? debugging : coding;
    const randomGenre = Math.floor(Math.random() * currentaction.length);

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview, currentaction, randomGenre);
  }

  private _getHtmlForWebview(webview: vscode.Webview, genres: string[], randomGenre: number) {
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "out", "main.js") 
    );
    const nonce = getNonce();
    
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          img {
            width: 100%;
            height: 100%;
          }
        </style>
      </head>
      <body>
        <script nonce="${nonce}" src="${scriptUri}"></script>
        <div id="result">
          <img id="imgResult"/>
        </div>

        <script>
          function generateGif() {
            let url = "https://nekos.best/api/v2/${genres[randomGenre]}";
            fetch(url)
              .then((response) => response.json())
              .then((data) => {
                let imgUrl = data.results[0].url; // Correct path to the image URL
                imgResult.setAttribute("src", imgUrl);
              })
              .catch((error) => console.error("Error fetching image:", error));
          }
          
          // Initialize elements when the document is ready
          document.addEventListener("DOMContentLoaded", () => {
            const imgResult = document.querySelector("#imgResult");
        
            generateGif();
            
            setInterval(generateGif, 60000);
          });
        </script>
      </body>
      </html>`;
  }
}
