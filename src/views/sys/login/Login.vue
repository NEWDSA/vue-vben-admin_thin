<template>
  <div :class="prefixCls" class="relative w-full h-full">
    <div class="relative h-full py-2">
      <div class="flex h-full">
        <div class="hidden min-h-full xl:flex xl:flex-col xl:justify-center xl:w-6/12">
          <!-- eslint-disable max-len -->
          <div
            :class="`${prefixCls}-form`"
            class="relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"
          >
            <LoginForm />
          </div>
        </div>
        <div class="flex h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12 myflex">
          <AppLogo :showTitle="false" class="-enter-x" style="position: absolute; top: 100px; right: 20px" />
          <div class="my-auto z-50">
            <img :alt="title" src="../../../assets/svg/login-bg.svg" class="-mt-16 -enter-x" />
          </div>
        </div>
      </div>
    </div>
    <span class="-enter-x xl:hidden">
      <AppLogo :showTitle="showTitle" :alwaysShowTitle="false" />
    </span>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { AppLogo } from '@/components/Application'
import LoginForm from './LoginForm.vue'
// import ForgetPasswordForm from './ForgetPasswordForm.vue'
// import RegisterForm from './RegisterForm.vue'
// import MobileForm from './MobileForm.vue'
// import QrCodeForm from './QrCodeForm.vue'
import { useGlobSetting } from '@/hooks/setting'
// import { useI18n } from '@/hooks/web/useI18n'
import { useDesign } from '@/hooks/web/useDesign'
// import { useLocaleStore } from '@/store/modules/locale'

defineProps({
  sessionTimeout: {
    type: Boolean
  }
})

const globSetting = useGlobSetting()
const { prefixCls } = useDesign('login')
// const { t } = useI18n()
// const localeStore = useLocaleStore()
// const showLocale = localeStore.getShowPicker
const title = computed(() => globSetting?.title ?? '')
const showTitle = ref(false)
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-login';
@logo-prefix-cls: ~'@{namespace}-app-logo';
@countdown-prefix-cls: ~'@{namespace}-countdown-input';
@dark-bg: #293146;

html[data-theme='dark'] {
  .@{prefix-cls} {
    background-color: @dark-bg;

    &::before {
      background-image: url('@/assets/svg/login-bg-dark.svg');
    }

    .ant-input,
    .ant-input-password {
      background-color: #232a3b;
    }

    .ant-btn:not(.ant-btn-link, .ant-btn-primary) {
      border: 1px solid #4a5569;
    }

    &-form {
      background: transparent !important;
    }

    .app-iconify {
      color: #fff;
    }
  }

  input.fix-auto-fill,
  .fix-auto-fill input {
    -webkit-text-fill-color: #c9d1d9 !important;
    box-shadow: inherit !important;
  }
}

.@{prefix-cls} {
  min-height: 100%;
  overflow: hidden;

  @media (max-width: @screen-xl) {
    background-color: #293146;

    .@{prefix-cls}-form {
      background-color: #fff;
    }
  }

  .@{logo-prefix-cls} {
    position: absolute;
    top: 12px;
    height: 30px;

    &__title {
      font-size: 16px;
      color: #fff;
    }

    img {
      width: 180px;
    }
  }

  .container {
    .@{logo-prefix-cls} {
      display: flex;
      width: 60%;
      height: 80px;

      &__title {
        font-size: 24px;
        color: #fff;
      }

      img {
        width: 48px;
      }
    }
  }

  &-sign-in-way {
    .anticon {
      font-size: 22px;
      color: #888;
      cursor: pointer;

      &:hover {
        color: @primary-color;
      }
    }
  }

  input:not([type='checkbox']) {
    min-width: 360px;

    @media (max-width: @screen-xl) {
      min-width: 320px;
    }

    @media (max-width: @screen-lg) {
      min-width: 260px;
    }

    @media (max-width: @screen-md) {
      min-width: 240px;
    }

    @media (max-width: @screen-sm) {
      min-width: 160px;
    }
  }

  .@{countdown-prefix-cls} input {
    min-width: unset;
  }

  .ant-divider-inner-text {
    font-size: 12px;
    color: @text-color-secondary;
  }

  .myflex {
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin-left: 50%;
      // background-image: url('@/assets/svg/login-bg.svg');
      background: rgb(37 99 235);
      background-position: 100%;
      background-repeat: no-repeat;
      background-size: auto 100%;
      content: '';

      @media (max-width: @screen-xl) {
        display: none;
      }
    }
  }
}
</style>
