"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    const provider = vscode.languages.registerCompletionItemProvider('protoml', {
        provideCompletionItems(document, position) {
            const completions = [
                '@participants', '@meeting', '@date:', '@tasks',
                '@notes', '@subjects', '@tags_import', '@macro',
                '@new_macro', '@@e=', '@@macro='
            ].map(cmd => {
                const item = new vscode.CompletionItem(cmd, vscode.CompletionItemKind.Keyword);
                return item;
            });
            return completions;
        }
    });
    context.subscriptions.push(provider);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map