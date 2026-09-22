# letter-to-daughters

TypeScript を勉強中の初学者が、型の練習として書いた小さなコードです。

## ファイル

- `letter.ts` — 本体

## 練習したこと

- リテラル型
- `readonly` とタプル
- ジェネリクス
- `as const` と `satisfies`
- `typeof` とインデックスアクセス型

## 動かし方

```bash
npm install
npm run check
```

`tsc --noEmit` で型チェックだけを行います。何も表示されなければ成功です。

エディタ（VS Code など）で開いて、型の名前にカーソルを合わせてみてください。

## メモ

- TypeScript 5.9.3 で動作を確認しました（2026年）
- 初学者なので、もっと良い書き方はあると思います
