# js primer nodecli

Node.jsを使ったCLIアプリ

- JavaScriptのコードをNode.jsで実行するには`node` コマンドを使う
  - `node main.js`
  - Node.jsではエントリーポイントのjsファイルを作成して`node` コマンドで実行するのが基本

- Node.jsのChromeと同じJavaScriptエンジン(V8)を使っている

- ブラウザとNodeではグローバルオブジェクトが異なる
  - ブラウザ: `window` オブジェクト
  - Node: `global` オブジェクト

- グローバルオブジェクトは異なるが、同等の機能を持ったプロパティ、関数がどちらにも用意されている
  - Console API
  - setTimeout 関数
  