import VsTimeline from './vs-timeline.vue';
import VsTimelineItem from './vs-timeline-item.vue';

export { VsTimeline, VsTimelineItem };

export const plugin = {
  install(Vue) {
    Vue.component('vs-timeline', VsTimeline);
    Vue.component('vs-timeline-item', VsTimelineItem);
  },
};

export default VsTimeline;
