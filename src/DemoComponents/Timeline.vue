<template>
  <div>
    <h3>Default</h3>
    <div class="box">
      <vs-timeline>
        <vs-timeline-item>
          <strong>Production deployed</strong>
          <div class="tl-meta">Today 9:00 AM</div>
        </vs-timeline-item>
        <vs-timeline-item>
          <strong>Code review approved</strong>
          <div class="tl-meta">Today 8:30 AM</div>
        </vs-timeline-item>
        <vs-timeline-item>
          <strong>Pull request opened</strong>
          <div class="tl-meta">Yesterday 4:15 PM</div>
        </vs-timeline-item>
        <vs-timeline-item>
          <strong>Feature branch created</strong>
          <div class="tl-meta">Yesterday 2:00 PM</div>
        </vs-timeline-item>
      </vs-timeline>
    </div>

    <br />
    <br />

    <h4>Alternating</h4>
    <p class="tl-description">Items are displayed on alternating sides of the Timeline.</p>
    <div class="box">
      <vs-timeline layout="alternating">
        <vs-timeline-item>
          <strong>Production deployed</strong>
          <div class="tl-meta">Today 9:00 AM</div>
        </vs-timeline-item>
        <vs-timeline-item>
          <strong>Code review approved</strong>
          <div class="tl-meta">Today 8:30 AM</div>
        </vs-timeline-item>
        <vs-timeline-item>
          <strong>Pull request opened</strong>
          <div class="tl-meta">Yesterday 4:15 PM</div>
        </vs-timeline-item>
        <vs-timeline-item>
          <strong>Feature branch created</strong>
          <div class="tl-meta">Yesterday 2:00 PM</div>
        </vs-timeline-item>
      </vs-timeline>
    </div>

    <br />
    <br />

    <h4>Opposite content</h4>
    <p class="tl-description">
      In the opposite layout, a second content area is present on the opposite side of the Timeline.
    </p>
    <div class="box">
      <vs-timeline layout="opposite">
        <vs-timeline-item>
          <strong>Production deployed</strong>
          <template #opposite>
            <div class="tl-meta2">Today 9:00 AM</div>
          </template>
        </vs-timeline-item>
        <vs-timeline-item>
          <strong>Code review approved</strong>
          <template #opposite>
            <div class="tl-meta2">Today 8:30 AM</div>
          </template>
        </vs-timeline-item>
        <vs-timeline-item>
          <strong>Pull request opened</strong>
          <template #opposite>
            <div class="tl-meta2">Yesterday 4:15 PM</div>
          </template>
        </vs-timeline-item>
        <vs-timeline-item>
          <strong>Feature branch created</strong>
          <template #opposite>
            <div class="tl-meta2">Yesterday 2:00 PM</div>
          </template>
        </vs-timeline-item>
      </vs-timeline>
    </div>

    <br />
    <br />

    <h4>Custom media</h4>
    <p class="tl-description">The item marker can also be replaced with another icon, image, or avatar.</p>
    <div class="box">
      <vs-timeline>
        <vs-timeline-item>
          <strong>Production deployed</strong>
          <div class="tl-meta">Today 9:00 AM</div>
          <template #media>
            <!-- rocket -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
            </svg>
          </template>
        </vs-timeline-item>
        <vs-timeline-item>
          <strong>Code review approved</strong>
          <div class="tl-meta">Today 8:30 AM</div>
          <template #media>
            <!-- check circle -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </template>
        </vs-timeline-item>
        <vs-timeline-item>
          <strong>Pull request opened</strong>
          <div class="tl-meta">Yesterday 4:15 PM</div>
          <template #media>
            <!-- git pull request -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/>
              <path d="M13 6h3a2 2 0 0 1 2 2v7"/>
              <line x1="6" y1="9" x2="6" y2="21"/>
            </svg>
          </template>
        </vs-timeline-item>
        <vs-timeline-item>
          <strong>Feature branch created</strong>
          <div class="tl-meta">Yesterday 2:00 PM</div>
          <template #media>
            <!-- git branch -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="6" y1="3" x2="6" y2="15"/>
              <circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
              <path d="M18 9a9 9 0 0 1-9 9"/>
            </svg>
          </template>
        </vs-timeline-item>
      </vs-timeline>
    </div>
  </div>
</template>

<script>
  import VsTimeline from '../../packages/vs-timeline/src/vs-timeline.vue';
  import VsTimelineItem from '../../packages/vs-timeline/src/vs-timeline-item.vue';

  export default {
    name: 'DemoTimeline',

    components: {
      VsTimeline,
      VsTimelineItem,
    },
  };
</script>

<style scoped>
  .tl-meta {
    font-size: 12px;
    color: #68737d;
    margin-top: 0px;
  }

  .tl-meta2 {
    font-size: 12px;
    color: #68737d;
  }

  .tl-description {
    font-size: 13px;
    color: rgb(92, 105, 112);
    margin-bottom: 8px;
  }

  .box {
    display: block !important;
  }
</style>
