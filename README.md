React-Study
----
from https://blog.csdn.net/moshowgame by Moshow郑锴

What’s React？
----
React 是 facebook 開發的一個 JS 函式庫，負責產生與管理前端的 UI 。它並不算框架。

Why React？
----
- 用純 JS 在前端產生 HTML （一般來說是在後端產生 HTML 送到前端）
- 使用 Virtual DOM，重繪時效率高
- 自定義 Component，組件化方式，方便開發
- 父子 Component 閒可透過 props 通訊，内部可透過state通訊
- 支援JSX 语法/Babel REPL/ES6等
- 只負責 MVC 的 View 部份，彈性高，可以跟後端分離，達到即時互動、自動更新的效果
- 輕量JS 函式庫，豐富且易移植

[React教程之使用create-react-app构建你的第一个react应用](https://blog.csdn.net/moshowgame/article/details/91970581)

[React教程之create-react-app+webpack打包运行项目(react-webpack-starter)](https://zhengkai.blog.csdn.net/article/details/91984076)


react-webpack-starter
----
基于create-react-app+webpack+HtmlWebpackPlugin,直接`npm start`运行即可，自动打开`http://localhost:8080/`