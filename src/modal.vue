<template>
  <div>
    <h4 class="mb-1">Basic</h4>
    <button @click="openModal('modal1')">Basic Modal</button>
    <vs-modal ref="modal1" title="Funny, Modal Works 🥳">Hello Peeps from Vue-Simple-Modal!!</vs-modal>

    <button @click="openModal('backdrop-modal')">Basic Modal (with blur backdrop)</button>
    <vs-modal ref="backdrop-modal" backdropBlur title="Funny, Modal Works 🥳"
      >Wow!! Backdrop is blurred out 🔥</vs-modal
    >
    <br />
    <br />

    <!-- Close Methods-->
    <h4 class="mb-1">Close Methods</h4>
    <button @click="openModal('modal2')">Can't close by clicking backdrop</button>
    <vs-modal ref="modal2" dismiss-on="close-button esc" title="Can't close by clicking backdrop"
      >Hello Peeps from Vue-Simple-Modal!!</vs-modal
    >
    <br />
    <br />

    <!-- Custom Headers-->
    <h4 class="mb-1">Custom header and footer</h4>
    <button @click="openModal('modal3')">No header close button</button>
    <vs-modal ref="modal3" remove-close-button>Hello Peeps from Vue-Simple-Modal!!</vs-modal>

    <button @click="openModal('modal4')">Custom header</button>
    <vs-modal ref="modal4">
      <div slot="header">
        <b>Custom</b> header has
        <a href="#" target="_blank" rel="noopener">Link</a>
      </div>
      Wow!! 🔥
    </vs-modal>

    <button @click="openModal('modal5')">With footer</button>
    <vs-modal ref="modal5" title="With footer"
      >Hello, World. What's happening?
      <div slot="footer">
        <button class="secondary">Say Hi</button>
        <button @click="closeModal('modal5')">Close</button>
      </div>
    </vs-modal>

    <button @click="openModal('modal6')">Only Modal Body (without header or footer)</button>
    <vs-modal ref="modal6" removeHeader>A Simple modal without header or footer</vs-modal>
    <br />
    <br />

    <!-- Top alignment -->
    <h4 class="mb-1">Top alignment</h4>
    <button @click="openModal('modal7')">Aligned top</button>
    <vs-modal ref="modal7" removeHeader align-top>
      <p>Hello, World. What's happening?</p>
      <br />
      <button @click="$refs['modal7'].close()">Close</button>
    </vs-modal>

    <button @click="openModal('modal8')">Aligned top, custom margin</button>
    <vs-modal ref="modal8" removeHeader align-top :align-top-margin="200"
      >This is aligned top, with a custom top margin of 200px.</vs-modal
    >

    <br />
    <br />

    <!-- ----- -->
    <!-- Sizes -->
    <!-- ----- -->
    <h4 class="mb-1">Sizes</h4>
    <button @click="openModal('modal9')">Small (s)</button>
    <vs-modal ref="modal9" removeHeader align-top size="s">
      <p>Hello. What's happening?</p>
      <br />
      <button @click="closeModal('modal9')">Close</button>
    </vs-modal>

    <button @click="openModal('modal10')">Normal (m)</button>
    <vs-modal ref="modal10" removeHeader align-top>
      <p>Hello, Vue-Simple-Modal. What's happening?</p>
      <br />
      <button @click="closeModal('modal10')">Close</button>
    </vs-modal>

    <button @click="openModal('modal11')">Large (l)</button>
    <vs-modal ref="modal11" removeHeader align-top size="l">
      <p>Hello, Vue-Simple-Modal. What's happening?</p>
      <br />
      <button @click="closeModal('modal11')">Close</button>
    </vs-modal>

    <button @click="openModal('modal-full')">Full Screen</button>
    <vs-modal ref="modal-full" removeHeader size="fullscreen">
      <p>Hello, Vue-Simple-Modal. What's happening?</p>
      <br />
      <button @click="closeModal('modal-full')">Close</button>
    </vs-modal>

    <button @click="openModal('modal12')">Auto width</button>
    <vs-modal ref="modal12" size="auto" title="Auto width modal">
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. {{ modal12Content }}</div>
      <br />
      <input type="text" v-model="modal12Content" placeholder="Type here to make the modal bigger" />
    </vs-modal>

    <button @click="openModal('modal13')">Scrolling Modal</button>
    <vs-modal ref="modal13" title="Scrolling Modal">
      <p>
        This is a scrolling modal with a
        <code>scale-up</code> transition.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maiores perspiciatis suscipit sit nemo.
        Similique dignissimos, quas nisi aperiam dolorum omnis tenetur impedit, cum eaque harum officia? Rerum ullam
        ratione non perferendis, vel harum quam.
      </p>
      <p>
        Provident iste, iusto adipisci, tenetur harum porro omnis sequi eveniet, accusantium facilis non ipsum.
        Excepturi deleniti tempore error atque aperiam quia dolorum perferendis. Libero accusamus dolor ipsam soluta
        impedit laboriosam optio veritatis obcaecati atque, asperiores!
      </p>
      <p>
        Quidem reprehenderit dolorem ducimus, expedita repellendus amet eaque voluptas molestiae debitis, adipisci
        obcaecati in nulla dolor eos ex illum. Quas molestiae dolores voluptatibus ullam et, quisquam nisi, consequuntur
        quod unde earum corporis nam harum repellat.
      </p>
      <p>
        Dolores sapiente saepe a explicabo quia possimus obcaecati quasi, quod asperiores dolore velit animi in eligendi
        incidunt, corporis at ut ipsum quos inventore quas suscipit tempore voluptatem voluptates. Quae dicta magni
        commodi sed, nisi animi!
      </p>
      <p>
        Itaque voluptas facere totam et explicabo, asperiores unde, cumque amet illo, hic sit excepturi quis architecto
        maxime. Aliquam nostrum ad blanditiis consequatur cum nulla, hic, reiciendis optio voluptate tenetur, maxime
        quisquam assumenda. Dignissimos corrupti, magnam.
      </p>
      <p>
        Quia, dolor, dolores? Sed dolor, maxime, nihil et cupiditate adipisci vel, accusantium repellendus voluptate
        quisquam optio dolorem illum tenetur rem. Voluptatem, officiis. Autem porro totam non vitae, officiis, ad
        dolorum, architecto dolor ratione, sed eligendi.
      </p>
      <p>
        Similique quidem, magni, dolores quam repellat provident? Sunt beatae ipsum, dignissimos eos iusto rem
        aspernatur unde commodi nam reprehenderit quis molestias accusantium. Enim quo beatae velit quisquam veritatis!
        Sed dolorem praesentium quidem consequuntur, impedit dolores?
      </p>
      <p>
        Ab, illum necessitatibus dolorum fuga. Aspernatur repellat assumenda aliquid officia aut accusamus veniam ipsum
        temporibus, suscipit nulla quibusdam libero aperiam aliquam, molestias in, possimus nemo soluta vero sed
        architecto. Libero doloremque aliquid a quam nostrum.
      </p>
      <p>
        Non quam et earum soluta quasi animi numquam perferendis magni explicabo impedit tempore ducimus aperiam natus
        veniam, eum esse, unde delectus velit nihil laudantium dolorum rem. Soluta dignissimos libero, laboriosam
        cupiditate, sint ipsum ab maiores.
      </p>
      <p>
        Totam quas nobis iste iure voluptatem. Dolores tempore voluptates omnis inventore, laborum eaque aperiam
        eligendi, maxime beatae, exercitationem fugit. Quae non, eum dignissimos consequuntur voluptate vel ipsam quos
        minima sequi. Illum eius natus maxime reiciendis.
      </p>
    </vs-modal>
  </div>
</template>

<script>
  import VsModal from '../packages/vs-modal/src/vs-modal';

  export default {
    components: {
      VsModal,
    },

    data() {
      return {
        modal12Content: '',
      };
    },

    methods: {
      openModal(ref) {
        this.$refs[ref].open();
      },

      closeModal(ref) {
        this.$refs[ref].close();
      },
    },
  };
</script>

<style lang="scss">
  button {
    background-color: #f55335;
    color: #fff;
    font-size: 0.875em;
    padding: 0.5625rem 0.75rem;
    display: inline-block;
    width: auto;
    min-width: 124px;
    margin: 0 5px 5px;
    vertical-align: middle;
    overflow: hidden;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    user-select: none;
    outline: none;
  }

  button.secondary {
    background: #3f51b5;
  }

  .vs-modal button {
    margin: 0 3px;
  }

  .footer {
    padding: 20px 0 50px;
  }
</style>
