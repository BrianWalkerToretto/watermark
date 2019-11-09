export default function getWidthAndHeight() {
  // const width =
  //   document.documentElement.scrollWidth ||
  //   document.body.scrollWidth ||
  //   window.innerWidth;
  // const height =
  //   document.documentElement.scrollHeight ||
  //   document.body.clientHeight ||
  //   window.innerHeight;
  const width = Math.max(document.body.scrollWidth, window.innerWidth) ||
    document.documentElement.clientWidth ||
    document.documentElement.offsetWidth ||
    document.body.clientWidth;
  const height = Math.max(document.body.scrollHeight, window.innerHeight) ||
    document.documentElement.clientHeight ||
    document.documentElement.offsetHeight ||
    document.body.clientHeight;

  return {
    width,
    height
  };
}
