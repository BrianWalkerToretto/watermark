// this.width =
//   window.innerWidth ||
//   document.documentElement.clientWidth ||
//   document.documentElement.offsetWidth ||
//   document.body.clientWidth;
// this.height =
//   window.innerHeight ||
//   document.documentElement.clientHeight ||
//   document.documentElement.offsetHeight ||
//   document.body.clientHeight;
export default function getWidthAndHeight(){
  const width = document.documentElement.scrollWidth || document.body.scrollWidth || window.innerWidth;
  const height = document.documentElement.scrollHeight || document.body.clientHeight || window.innerHeight;

  return {
    width,
    height
  }
}
