React-Study
----
from https://blog.csdn.net/moshowgame by Moshow郑锴

React能够解决什么问题？
----
React能够构建那些数据会随时间改变的大型应用，并且能够提高开发效率

React 特点
----
- 声明式设计 −React采用声明范式，可以轻松描述应用。
- 高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
- 灵活 −React可以与已知的库或框架很好地配合。
- JSX − JSX是 JavaScript语法的扩展。React开发不一定使用 JSX，但我们建议使用它。
- 组件 − 通过 React构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
- 单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

和其他一些js框架相比，比如Vue、Angular等，React怎样?
- React不是一个MVC框架，它是构建易于可重复调用的web组件，侧重于UI, 也就是view层
- React是单向的从数据到视图的渲染，非双向数据绑定
- 不直接操作DOM对象，而是通过虚拟DOM通过diff算法以最小的步骤作用到真实的DOM上。

React主要的原理
----
传统的web应用，操作DOM一般是直接更新操作的，但是我们知道DOM更新通常是比较昂贵的。而React为了尽可能减少对DOM的操作，提供了一种不同的而又强大的方式来更新DOM，代替直接的DOM操作。就是VirtualDOM,一个轻量级的虚拟的DOM，就是React抽象出来的一个对象，描述dom应该什么样子的，应该如何呈现。通过这个Virtual DOM去更新真实的DOM，由这个Virtual DOM管理真实DOM的更新。

为什么通过这多一层的Virtual DOM操作就能更快呢？ 这是因为React有个diff算法，更新VirtualDOM并不保证马上影响真实的DOM，React会等到事件循环结束，然后利用这个diff算法，通过当前新的dom表述与之前的作比较，计算出最小的步骤更新真实的DOM。

最明显的一点好处就是React所谓的 dom diff ，能够实现delta级别的dom更新。当有数据变动导致DOM变动时，React不是全局刷新，而是通过它内部的dom diff 算法计算出不同点，然后以最小粒度进行更新。这也是React号称性能好的原因。

Components 组件
----
在DOM树上的节点被称为元素，在这里则不同，Virtual DOM上称为commponent。Virtual DOM的节点就是一个完整抽象的组件，它是由commponents组成。component的使用在 React 里极为重要, 因为 components 的存在让计算 DOM diff 更高效。

React相关学习教程
----
- [【React教程之使用create-react-app构建你的第一个react应用】](https://blog.csdn.net/moshowgame/article/details/91970581)
- [【React教程之create-react-app+webpack打包运行项目(react-webpack-starter)】](https://zhengkai.blog.csdn.net/article/details/91984076)
- [【React Hook入门】](https://zhengkai.blog.csdn.net/article/details/123859073)
- 
react-webpack-starter项目
----
基于create-react-app+webpack+HtmlWebpackPlugin,直接`npm start`运行即可，自动打开`http://localhost:8080/`

react-hook项目
----
基于create-react-app+react-hook的钩子练习项目,运行`npm install`+`npm start`即可，自动打开`http://localhost:3000/`