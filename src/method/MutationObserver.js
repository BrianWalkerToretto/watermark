// 创建canvas/svg
// 监听 节点被删除  被改变

export default function Monitor(drawShadow) {
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  if(!MutationObserver) return;
  if(this.observer) return;
  const elem = document.querySelector(`#${this.randomId}`);
  const parentRoot = elem ? (elem.parentElement || elem.parentNode) : null;
  const options = {
    childList: true, // 监视目标节点添加删除新的子节点
    attributes: true, // 监听元素属性值发生变动时，触发
    characterData: true, // 监听目标节点或子节点树中，节点所包含的字符数据的变化
    subtree: true, // 扩展监视范围到目标节点下的整个子树的所有节点
    // attributeOldValue: true, // 当监控节点的属性改动时，将此属性设为true将记录有改动的属性的上一个值
    // characterDataOldValue: true, // 以文本在受监视节点上发生更改时记录节点文本的先前值
    // attributeFilter: [], // 要监控的特定属性名称的数组，如果没有属性，则监控对象的所有属性发生变动，都会通知
  }

  // 当元素的父元素被删除之后需要append到body
  if(!elem){
    document.body.appendChild(drawShadow.renderShadow.call(this));
    this.ctx = null;
    this.initWaterMark('waterMark');
    return;
  }
  this.observer = new MutationObserver(mutations => {
    // 1、当mutations.length为1时，表示水印被修改
    const mutation = mutations[0];
    const isShadow = mutation.target.id === this.randomId && mutation.target.nodeName === 'DIV'; // 影子元素被修改/删除
    const removedNodes = mutation.removedNodes[0] && (
      mutation.removedNodes[0].id === this.randomId || // 水印被删除
      mutation.removedNodes[0].querySelector(`#${this.randomId}`) // 水印的祖宗元素（包括父元素）被删除
    );
    if (
      // mutations.length === 1表示：水印元素变动，但当存在多个水印时有时无法确定那个水印变动，故全部更新水印
      isShadow || mutations.length === 1 && mutations[0].target.id === this.randomId || removedNodes
    ) {
      const child = document.querySelector(`#${this.randomId}`);
      const parent = child ? (child.parentElement || child.parentNode) : null;
      const shadowDom = drawShadow.renderShadow.call(this);

      if(parent){
        if(child){
          parent.replaceChild(shadowDom, child);
        }else{
          parentRoot.appendChild(shadowDom);
        }
      }else{
        // 当元素被删除之后需要保持原处：parentRoot
        parentRoot.appendChild(shadowDom);
      }
      this.observer.disconnect();
      this.observer = null;
      this.ctx = null;
      // ie11 有个小问题，replaceChild之后存在时间差，导致防删除功能失效
      setTimeout(() => this.initWaterMark('waterMark'));
    }
  });
  this.observer.observe(document.body, options)  //监听body节点
  this.observer.observe(elem, options)  //监听水印节点
  elem.shadowRoot && this.observer.observe(elem.shadowRoot, options); // 监听shadow dom节点
}

