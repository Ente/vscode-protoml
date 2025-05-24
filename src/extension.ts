import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const provider = vscode.languages.registerCompletionItemProvider(
    'protoml',
    {
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
    }
  );

  context.subscriptions.push(provider);
}

export function deactivate() {}