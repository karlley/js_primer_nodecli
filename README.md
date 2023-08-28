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

- processオブジェクト
  - Node.jsのグローバル変数
  - 実行プロセスの情報の取得、操作をするAPI

- `process.argv`
  - コマンドラインから引数を受け取る
  - 取得後は配列型

- パース
  - 取得した値を扱いやすい形に整形すること

- package.json
  - パッケージの種類、バージョン等を管理する
  - JSON形式
  - `npm init --yes` でデフォルトで作成できる
  - バージョンは`@` で指定可能
    - `npm install commander@9.0`
  - RubyでのGemfile

- package.json
  - npmでインストールしたパッケージの記録ファイル
  - 異なる環境で異なるバージョンがインストールされるのを防止する
  - RubyでのGemfile.lock

- ECMAScriptインポート時の注意点
  - インポート元のファイルもECMAScriptモジュールでなければならない
  - ECMAScript <- CommonJS のインポートは可能
  - 拡張子で判別される
    - `.mjs`: ECMAScript
    - `.cjs`: CommonJS

- CommonJSモジュールのインポート時の注意点
  - ECMAScript -> CommonJS のインポートは不可
  - `import` 文は利用不可

- jsファイルをECMAScriptモジュールとして判断させるには以下が必要
  - package.jsonの`type` フィールドに`module` を追加
  - `npm pkg set type=module`

- fsモジュール
  - Node.jsでのファイル読み書き
  - 標準モジュール
  - 同期、非同期形式のどちらもある
    - 非同期形式は`fs/promiss` でも利用可

- 標準モジュールのインポートは`node:` を付ける
  - `import * as fs from "node:fs/promiss";`

- 同期、非同期どちらのAPIが存在する場合はAPI名の末尾にに`Sync`が付く
  - `fs.readFileSync`

- Promiseとエラーファーストコールバック
  - エラーファーストコールバックの方が古い
  - 現在はPromiseが主流
  - エラーファーストコールバックをPromiseを返すように変換するメソッドがある
    - `util.promisify`
  - 両方が提供されているならPromiseを使う
    - 連携しやすい
    - Async Functionが使える
    - エラーハンドリングしやすい

- GFM
  - GitHubのMarkdownの仕様
  - GitHub Flavored Markdown
  - 標準的なMarkdownを拡張している

- `??`
  - Nulish coalescing 演算子
  - 左辺がnulishで右辺を返す
  - Railsの`presence` に似ている
    - [Railsのpresenceとpresent?メソッド \- karlley](https://scrapbox.io/karlley/Rails%E3%81%AEpresence%E3%81%A8present%3F%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89)
