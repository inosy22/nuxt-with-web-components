# nuxt-with-web-components

> nuxt.js with web components test

## Setup & Start

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

## 検証内容

**Vue.jsのDOM操作と、WebComponentsで閉じ込められたDOM操作は共存できるのか？**

 - 検証結果確認ページ (本リポジトリをcloneして起動)
    - http://localhost:3000/counter
 - WebComponent定義
    - [./static/counter.js](./static/counter.js)
    - `<inosy22-counter>` という独自タグを定義して、その中にJSのカウンター処理を閉じ込めている
 - VueComponent定義
    - [./pages/counter.vue](./pages/counter.vue)
    - Vue.jsによるDOM操作と、文字列によるWebComponentsの埋め込み

## 結論

**共存できてそう...!**
