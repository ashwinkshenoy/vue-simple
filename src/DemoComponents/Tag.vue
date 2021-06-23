<template>
  <div>
    <small>Sizes</small>
    <br />
    <vs-tag size="small" class="mr-10">Small</vs-tag>
    <vs-tag class="mr-10">Medium</vs-tag>
    <vs-tag size="large" class="mr-10">Large</vs-tag>
    <br /><br />

    <small>Types</small>
    <br />
    <vs-tag type="primary" class="mr-10">Primary</vs-tag>
    <vs-tag type="success" class="mr-10">Success</vs-tag>
    <vs-tag type="danger" class="mr-10">Danger</vs-tag>
    <vs-tag type="warning" class="mr-10">Warning</vs-tag>
    <vs-tag type="secondary" class="mr-10">Secondary</vs-tag>
    <br /><br />

    <small>Shapes</small>
    <br />
    <vs-tag class="mr-10">Completed</vs-tag>
    <vs-tag is-pill class="mr-10">Completed</vs-tag>
    <vs-tag is-round class="mr-10">8</vs-tag>
    <br /><br />

    <small>Custom Color</small>
    <br />
    <vs-tag bg-color="#1dbdbc" text-color="#083a39" class="mr-10">Teal</vs-tag>
    <vs-tag bg-color="#00a656" text-color="#fff" class="mr-10">Green</vs-tag>
    <vs-tag bg-color="#ff6224" text-color="#fff" class="mr-10">Orange</vs-tag>
    <vs-tag bg-color="#ffd424" text-color="#796510" class="mr-10">Lemon</vs-tag>
    <br /><br />

    <small>With Close</small>
    <br />
    <vs-tag is-close @close="closeTag" class="mr-10">Secondary</vs-tag>
    <vs-tag type="primary" is-close @close="closeTag" class="mr-10">Primary</vs-tag>
    <vs-tag type="success" is-close @close="closeTag" class="mr-10">Success</vs-tag>
    <vs-tag type="danger" is-close @close="closeTag" class="mr-10">Danger</vs-tag>
    <vs-tag type="warning" is-close @close="closeTag" class="mr-10">Warning</vs-tag>
  </div>
</template>

<script>
  import VsTag from '../../packages/vs-tag/src/vs-tag';

  export default {
    name: 'TagDemo',

    components: {
      VsTag,
    },

    methods: {
      closeTag() {
        console.info('Tag close clicked');
      },
    },
  };
</script>
