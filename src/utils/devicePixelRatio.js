/** 方法说明
 *  @method getDevicePixelRatio
 *  @description 获取屏幕比
 *  @param {Canvas.getContext('2d')} [context={}] 回调函数
 *  @return {Number} 比值
*/

export const getDevicePixelRatio = (context = {}) => {
  // 屏幕的设备像素比
  const devicePixelRatio = window.devicePixelRatio || 1;
  // 浏览器在渲染canvas之前存储画布信息的像素比
  const backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
  // canvas的实际渲染倍率
  return devicePixelRatio / backingStoreRatio;
}




export const getBoundingClientRect = (element) => {
    const rect = element.getBoundingClientRect();
    const width = rect.width || rect.right - rect.left;
    const heigth = rect.heigth || rect.bottom - rect.top;
    return extend({}, rect, {
        width,
        heigth,
    });
}



export function getDomPath(element, useClass = false) {
    if (!(element instanceof HTMLElement)) {
        console.warn('input is not a HTML element!');
        return '';
    }
    let domPath = [];
    let elem = element;
    while (elem) {
        let domDesc = getDomDesc(elem, useClass);
        if (!domDesc) {
            break;
        }
        domPath.unshift(domDesc);
        if (querySelector(domPath.join('>')) === element || domDesc.indexOf('body') >= 0) {
            break;
        }
        domPath.shift();
        const children = elem.parentNode.children;
        if (children.length > 1) {
            for (let i = 0; i < children.length; i++) {
                if (children[i] === elem) {
                    domDesc += `:nth-child(${i + 1})`;
                    break;
                }
            }
        }
        domPath.unshift(domDesc);
        if (querySelector(domPath.join('>')) === element) {
            break;
        }
        elem = elem.parentNode;
    }
    return domPath.join('>');
}

export function getDomDesc(element, useClass = false) {
    const domDesc = [];
    if (!element || !element.tagName) {
        return '';
    }
    if (element.id) {
        return `#${element.id}`;
    }
    domDesc.push(element.tagName.toLowerCase());
    if (useClass) {
        const className = element.className;
        if (className && typeof className === 'string') {
            const classes = className.split(/\s+/);
            domDesc.push(`.${classes.join('.')}`);
        }
    }
    if (element.name) {
        domDesc.push(`[name=${element.name}]`);
    }
    return domDesc.join('');
}
