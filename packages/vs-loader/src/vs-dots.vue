<template>
  <div :class="['vs-dots', { 'vs-loader--center': center }]">
    <svg
      :color="color"
      :font-size="size"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      viewBox="0 0 80 72"
      role="progressbar"
    >
      <g fill="currentColor">
        <circle cy="36" r="9" cx="9" class="circle-one"></circle>
        <circle cy="36" r="9" cx="40" class="circle-two"></circle>
        <circle cy="36" r="9" cx="71" class="circle-three"></circle>
      </g>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'VsDotsLoader',

    props: {
      color: {
        type: String,
        default: '#1f73b7',
      },
      size: {
        type: [Number, String],
        default: 10,
      },
      center: {
        type: Boolean,
      },
    },
  };
</script>

<style lang="scss">
  .vs-dots {
    &.vs-loader--center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      width: 4.5em;
      margin: 3px;
    }

    .circle-one {
      animation: 1250ms ease-in-out 0s infinite normal none running circleOneKeyframe;
    }

    .circle-two {
      animation: 1250ms ease-in-out 0s infinite normal none running circleTwoKeyframe;
    }

    .circle-three {
      animation: 1250ms ease-in-out 0s infinite normal none running circleThreeKeyframe;
    }

    @keyframes circleOneKeyframe {
      0% {
        transform: translate(0, 5px);
      }
      3% {
        transform: translate(1px, -5px);
      }
      6% {
        transform: translate(3px, -15px);
      }
      8% {
        transform: translate(5px, -18px);
      }
      9% {
        transform: translate(7px, -21px);
      }
      11% {
        transform: translate(8px, -22px);
      }
      13% {
        transform: translate(9px, -23px);
      }
      16% {
        transform: translate(12px, -25px);
      }
      18% {
        transform: translate(13px, -26px);
      }
      23% {
        transform: translate(18px, -26px);
      }
      24% {
        transform: translate(19px, -25px);
      }
      28% {
        transform: translate(22px, -23px);
      }
      31% {
        transform: translate(24px, -21px);
      }
      33% {
        transform: translate(26px, -18px);
      }
      34% {
        transform: translate(28px, -14px);
      }
      36% {
        transform: translate(29px, -12px);
      }
      38% {
        transform: translate(30px, -5px);
      }
      39% {
        transform: translate(31px, 5px);
      }
      54% {
        transform: translate(31px, 3px);
      }
      59% {
        transform: translate(33px);
      }
      61% {
        transform: translate(43px);
      }
      63% {
        transform: translate(48px);
      }
      64% {
        transform: translate(51px);
      }
      66% {
        transform: translate(53px);
      }
      68% {
        transform: translate(55px);
      }
      69% {
        transform: translate(57px);
      }
      76% {
        transform: translate(60px);
      }
      81% {
        transform: translate(61px);
      }
      83%,
      100% {
        transform: translate(62px);
      }
    }

    @keyframes circleTwoKeyframe {
      4% {
        transform: translate(0);
      }
      6% {
        transform: translate(-1px);
      }
      8% {
        transform: translate(-2px);
      }
      9% {
        transform: translate(-5px);
      }
      11% {
        transform: translate(-7px);
      }
      13% {
        transform: translate(-12px);
      }
      14% {
        transform: translate(-17px);
      }
      16% {
        transform: translate(-19px);
      }
      18% {
        transform: translate(-22px);
      }
      19% {
        transform: translate(-25px);
      }
      21% {
        transform: translate(-26px);
      }
      23% {
        transform: translate(-27px);
      }
      24% {
        transform: translate(-28px);
      }
      26% {
        transform: translate(-29px);
      }
      29% {
        transform: translate(-30px);
      }
      33%,
      89% {
        transform: translate(-31px);
      }
      91% {
        transform: translate(-31px, 1px);
      }
      94% {
        transform: translate(-31px, 2px);
      }
      98% {
        transform: translate(-31px, 3px);
      }
      99% {
        transform: translate(-31px, 4px);
      }
      100% {
        transform: translate(-31px, 5px);
      }
    }

    @keyframes circleThreeKeyframe {
      39% {
        transform: translate(0);
      }
      44% {
        transform: translate(0, 1px);
      }
      46% {
        transform: translate(0, 2px);
      }
      48% {
        transform: translate(0, 3px);
      }
      49% {
        transform: translate(0, 4px);
      }
      51% {
        transform: translate(0, 5px);
      }
      53% {
        transform: translate(-1px, -6px);
      }
      54% {
        transform: translate(-2px, -13px);
      }
      56% {
        transform: translate(-3px, -15px);
      }
      58% {
        transform: translate(-5px, -19px);
      }
      59% {
        transform: translate(-7px, -21px);
      }
      61% {
        transform: translate(-8px, -22px);
      }
      63% {
        transform: translate(-9px, -24px);
      }
      64% {
        transform: translate(-11px, -25px);
      }
      66% {
        transform: translate(-12px, -26px);
      }
      74% {
        transform: translate(-19px, -26px);
      }
      76% {
        transform: translate(-20px, -25px);
      }
      78% {
        transform: translate(-22px, -24px);
      }
      81% {
        transform: translate(-24px, -21px);
      }
      83% {
        transform: translate(-26px, -19px);
      }
      84% {
        transform: translate(-28px, -15px);
      }
      86% {
        transform: translate(-29px, -13px);
      }
      88% {
        transform: translate(-30px, -6px);
      }
      89% {
        transform: translate(-31px, 5px);
      }
      91% {
        transform: translate(-31px, 4px);
      }
      93% {
        transform: translate(-31px, 3px);
      }
      94% {
        transform: translate(-31px, 2px);
      }
      98% {
        transform: translate(-31px, 1px);
      }
      100% {
        transform: translate(-31px);
      }
    }
  }
</style>
