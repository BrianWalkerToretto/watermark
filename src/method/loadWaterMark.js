import { addEventListen, DOMContentLoaded } from '@utils/eventListener';

export default function loadWaterMark() {
  let isLoad = true;

  DOMContentLoaded(() => {
    isLoad && this.waterMark();
    isLoad = null;
  });
  addEventListen('load', () => {
    isLoad && this.waterMark();
    isLoad = null;
  });
}
