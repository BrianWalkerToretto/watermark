import style from '@styles/index.less';

export default {
  isShadowDom: typeof document.createElement('div').attachShadow === 'function',
  randomId: () => style.waterMark + '-' + Math.random().toString(36).substr(2),
  renderShadow: function(){
    const isSvg = !!window['ActiveXObject'];
    const { _styleElementInsertedByStyleLoader: shadowStyle } = window;
    // css样式
    // const everythingTomato = new CSSStyleSheet();
    // everythingTomato.replace('* { margin: 0;padding: 0; }');
    // shadow dom
    let shadowDom = null;
    try{
      shadowDom = this.environment === 'vue' ? this.shadowDom.attachShadow({ mode: "open" }) : this.shadowDom.current.attachShadow({ mode: "open" });
    }catch(e){
      shadowDom = this.environment === 'vue' ? this.shadowDom : this.shadowDom.current;
    }
    if(shadowDom){
      (this.shadowDom.current || this.shadowDom).style && (this.shadowDom.current || this.shadowDom).setAttribute('style', 'pointer-events: none !important;display: block !important;');
      (shadowDom.shadowRoot || shadowDom).innerHTML = `<style>${shadowStyle ? shadowStyle.innerHTML : ''}</style>`;
      // (shadowDom.shadowRoot || shadowDom).adoptedStyleSheets = [everythingTomato];
    }

    const shadowWaterMark = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', 'svg') : document.createElement('canvas');

    shadowWaterMark.setAttribute('class', style.waterMark);
    shadowWaterMark.setAttribute('id', this.randomId);
    if(isSvg){
      shadowWaterMark.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      shadowWaterMark.setAttribute('version', '1.1');
    }
    switch(this.environment){
      case 'vue':
        this.$refs.canvas = shadowWaterMark;
        break;
      case 'react':
        this.canvas.current = shadowWaterMark;
        break;
      case 'native':
        this.canvas = shadowWaterMark;
        break;
    }
    shadowDom && (shadowDom.shadowRoot || shadowDom).appendChild(shadowWaterMark);

    return shadowDom || shadowWaterMark;
  }
}
