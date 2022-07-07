<template>
  <div>
    <strong>Datepicker</strong>
    <br /><br />
    <div class="grid">
      <div>
        <vs-datepicker
          label="Date"
          v-model="form.date"
          placeholder="DD-MM-YYYY"
          format="DD-MM-YYYY"
          value-type="format"
          :editable="true"
          :disabled-date="disableWeekends"
          @change="log"
        ></vs-datepicker>
        <small>v-model: {{ form.date }}</small>
      </div>

      <div>
        <vs-datepicker
          label="Range Date"
          v-model="form.dateRange"
          :max="maxDate"
          format="DD-MM-YYYY"
          value-type="date"
          range
          placeholder="Select A Date Range"
          @change="log"
        ></vs-datepicker>
        <small>v-model: {{ form.dateRange }}</small>
      </div>

      <div>
        <vs-datepicker
          label="Time"
          v-model="form.time"
          :max="maxDate"
          type="time"
          value-type="format"
          format="hh:mm A"
          placeholder="hh:mm A"
          @change="log"
        ></vs-datepicker>
        <small>v-model: {{ form.time }}</small>
      </div>

      <div>
        <vs-datepicker
          label="Custom Format Date"
          v-model="form.customdate"
          :max="maxDate"
          placeholder="DD MMM YYYY"
          format="DD MMM YYYY"
          @change="log"
        ></vs-datepicker>
        <small>v-model: {{ form.customdate }}</small>
      </div>

      <div>
        <vs-datepicker
          label="Lang Support"
          v-model="form.langDate"
          :max="maxDate"
          placeholder="DD MMM YYYY"
          format="DD MMM YYYY"
          :lang="lang"
          @change="log"
        ></vs-datepicker>
        <small>v-model: {{ form.langDate }}</small>
      </div>

      <div>
        <vs-datepicker
          label="Compact"
          v-model="form.compact"
          :max="maxDate"
          placeholder="DD MMM YYYY"
          format="DD MMM YYYY"
          @change="log"
          is-compact
        ></vs-datepicker>
        <small>v-model: {{ form.langDate }}</small>
      </div>

      <div>
        <vs-datepicker
          label="Shortcuts"
          v-model="form.shortcut"
          placeholder="Select date"
          format="DD-MM-YYYY"
          value-type="format"
          :shortcuts="shortcuts"
        ></vs-datepicker>
        <small>v-model: {{ form.shortcut }}</small>
      </div>
    </div>
  </div>
</template>

<script>
  import VsDatepicker from '../../packages/vs-datepicker/src/vs-datepicker.vue';

  export default {
    name: 'DatepickerDemo',

    components: {
      VsDatepicker,
    },

    data() {
      return {
        form: {
          date: '',
          dateRange: '',
          time: '',
          customdate: '',
          langDate: '',
          compact: '',
          shortcut: '',
        },

        disabledDates: {
          weekdays: [1, 7],
        },

        shortcuts: [
          {
            text: 'Today',
            onClick() {
              const date = new Date();
              // return a Date
              return date;
            },
          },
          {
            text: 'Yesterday',
            onClick() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
          },
        ],

        maxDate: new Date().toISOString().substring(0, 10), // Max date -> Today

        lang: {
          formatLocale: {
            months: [
              'Janvier',
              'Février',
              'Mars',
              'Avril',
              'Mai',
              'Juin',
              'Juillet',
              'Août',
              'Septembre',
              'Octobre',
              'Novembre',
              'Décembre',
            ],
            monthsShort: [
              'Janv.',
              'Févr.',
              'Mars',
              'Avr.',
              'Mai',
              'Juin',
              'Juil.',
              'Août',
              'Sept.',
              'Oct.',
              'Nov.',
              'Déc.',
            ],
            weekdays: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
            weekdaysShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
            weekdaysMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
            firstDayOfWeek: 1,
            firstWeekContainsDate: 1,
          },
        },
      };
    },

    methods: {
      log(e) {
        console.log(e);
      },
      disableWeekends(date) {
        const day = new Date(date).getDay();
        return day === 0 || day === 6;
      },
    },
  };
</script>
