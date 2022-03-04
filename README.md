# vue-template
 
別のテンプレートエンジンを利用している開発環境で使うなど、ページの階層を自由に変更したいときに使う想定。  
フロントがVue.jsのみの場合は、素直に公式や書籍で紹介されている方法を利用することをお勧めします。

## ファイル

```
├── README.md
├── babel.config.js
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

