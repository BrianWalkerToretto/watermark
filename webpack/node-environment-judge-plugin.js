class NodeEnvironmentJudgePlugin {
  constructor(){
    this.name = this.constructor.name; // 获取函数名
  }
  /**
　　* compiler是webpack的一个实例，这个实例存储了webpack各种信息，所有打包信息
　　* https://webpack.js.org/api/compiler-hooks
　　* 官网里面介绍了compiler里面有个hooks这样的概念
　　* hooks是钩子的意思，里面定义了时刻值
　*/
  apply(compiler){
    /**
　　  * 用到了hooks，emit这个时刻，在输出资源之前，这里官网告诉我们是一个异步函数
  　　* compilation是这一次的打包信息，所以跟compiler是不一样的
  　　* tapAsync接受两个参数，第一个是名字，
  　*/
    //   compiler.hooks.emit.tapAsync(this.name, (compilation, cb) => {
    //     compilation.assets['copyright.txt'] = {
    //       source: function(){
    //         return 'copyright by q';
    //       },
    //       size: function(){
    //         return 15;
    //       }
    //     }
    //     cb();
    // 　});
    compiler.hooks.emit.tapAsync(this.name, (compilation, callback) => {
      for (var filePathName in compilation.assets) {
        if(/.js$/ig.test(filePathName)){
          let content = compilation.assets[filePathName].source() || '';
          // 模块开始前添加node判断，用于服务器端渲染::优化了react服务器渲染，然后vue服务器渲染没有优化
          // const text = `try{ if(typeof global === 'object' && window !== global){return null;} }catch(e){return null;}`;
          const env = `typeof global === 'object' && window !== global`;
          const fragment = 'arguments[0] && arguments[0].Fragment || null;';
          const text = `try{if(${env}){return ${fragment}}}catch(e){return ${fragment}}`;

          content = content.replace(/\.*\)\{(\.*)return/i, `){${text}return`)
          // 重写指定输出模块内容
          compilation.assets[filePathName] = {
            source () {
              return content;
            },
            size () {
              return content.length;
            }
          }
        }
      }
      callback();
    });
    // compiler.hooks.compilation.tap(this.name, compilation => {
    //   console.log('compiler', compilation)
    // });
  }
}

module.exports = NodeEnvironmentJudgePlugin;
