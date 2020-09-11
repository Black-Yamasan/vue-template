# vue-template
【IE11対応】Vue.js を始めるためのテンプレート  
別のテンプレートエンジンを利用している開発環境で使うなど、ページの階層を自由に変更したいときに使う想定。  
フロントがVue.jsのみの場合は、素直に公式や書籍で紹介されている方法を利用することをお勧めします。


## Version

### ver1.0.0

基本的なテンプレートセット

### ver1.0.1

単体テスト追加


## ファイル

```
├── README.md
├── babel.config.js
├── config
│   ├── default.json
│   └── production.json
├── dist
│   ├── assets
│   └── index.html
├── gulpfile.js
├── package.json
├── src
│   ├── scripts
│   ├── styles
│   ├── template
│   └── vue
├── webpack.config.js
└── yarn.lock
```


## 使い方

#### インストール

```
npm i
```

or 

```
yarn install
```


#### ローカル開発用ビルド

```
npm run dev
```

or 

```
yarn run dev
```


#### ブラウザ起動

```
npm run start
```

or 

```
yarn run start
```


#### 本番環境用ソースビルド

```
npm run prod
```

or 

```
yarn run prod
```


#### stylelint

```
npm run lint:style
```

or 

```
yarn run lint:style
```


#### test

```
npm run test
```

or 

```
yarn run test
```

