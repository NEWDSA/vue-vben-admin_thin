<template>
  <Header :class="getHeaderClass">
    <!-- left start -->
    <div :class="`${prefixCls}-left`">
      <!-- logo -->
      <AppLogo v-if="getShowHeaderLogo || getIsMobile" :class="`${prefixCls}-logo`" :theme="getHeaderTheme" :style="getLogoWidth" />
      <LayoutTrigger
        v-if="(getShowContent && getShowHeaderTrigger && !getSplit && !getIsMixSidebar) || getIsMobile"
        :theme="getHeaderTheme"
        :sider="false"
      />
      <LayoutBreadcrumb v-if="getShowContent && getShowBread" :theme="getHeaderTheme" />
      <div class="ml-1">
        <Select ref="select" v-model:value="value1" style="width: 120px" @focus="focus" @change="handleChange">
          <SelectOption value="yl"> 银联 </SelectOption>
        </Select>
      </div>
    </div>
    <!-- left end -->

    <!-- menu start -->
    <div :class="`${prefixCls}-menu`" v-if="getShowTopMenu && !getIsMobile">
      <LayoutMenu :isHorizontal="true" :theme="getHeaderTheme" :splitType="getSplitType" :menuMode="getMenuMode" />
    </div>
    <!-- menu-end -->
    <!-- add-slot -->
    <!-- action  -->
    <div :class="`${prefixCls}-action`">
      <Time />
      <AppSearch :class="`${prefixCls}-action__item `" v-if="getShowSearch" />

      <ErrorAction v-if="getUseErrorHandle" :class="`${prefixCls}-action__item error-action`" />

      <Notify v-if="getShowNotice" :class="`${prefixCls}-action__item notify-item`" />

      <FullScreen v-if="getShowFullScreen" :class="`${prefixCls}-action__item fullscreen-item`" />
      <AppSizePicker :showText="false" :class="`${prefixCls}-action__item`" />

      <AppLocalePicker v-if="getShowLocalePicker" :reload="true" :showText="false" :class="`${prefixCls}-action__item`" />

      <UserDropDown :theme="getHeaderTheme" />

      <SettingDrawer v-if="getShowSetting" :class="`${prefixCls}-action__item`" />
    </div>
  </Header>
</template>
<script lang="ts" setup name="LayoutHeader">
import { unref, ref, computed } from 'vue'

import { propTypes } from '@/utils/propTypes'

import { Layout, Select } from 'ant-design-vue'
import { AppLogo } from '@/components/Application'
import LayoutMenu from '../menu/index.vue'
import LayoutTrigger from '../trigger/index.vue'

import { AppSearch } from '@/components/Application'

import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting'
import { useMenuSetting } from '@/hooks/setting/useMenuSetting'
import { useRootSetting } from '@/hooks/setting/useRootSetting'

import { MenuModeEnum, MenuSplitTyeEnum } from '@/enums/menuEnum'
import { SettingButtonPositionEnum } from '@/enums/appEnum'
import { AppLocalePicker, AppSizePicker } from '@/components/Application'

import { UserDropDown, LayoutBreadcrumb, FullScreen, Notify, ErrorAction, Time } from './components'
import { useAppInject } from '@/hooks/web/useAppInject'
import { useDesign } from '@/hooks/web/useDesign'

import { createAsyncComponent } from '@/utils/factory/createAsyncComponent'
import { useLocale } from '@/locales/useLocale'
// add 搭建

const Header = Layout.Header
const SettingDrawer = createAsyncComponent(() => import('@/layouts/default/setting/index.vue'), {
  loading: true
})
const props = defineProps({
  fixed: propTypes.bool
})
const value1 = ref()
const focus = () => {}
const handleChange = () => {}
const { prefixCls } = useDesign('layout-header')
const { getShowTopMenu, getShowHeaderTrigger, getSplit, getIsMixMode, getMenuWidth, getIsMixSidebar } = useMenuSetting()
const { getUseErrorHandle, getShowSettingButton, getSettingButtonPosition } = useRootSetting()

const { getHeaderTheme, getShowFullScreen, getShowNotice, getShowContent, getShowBread, getShowHeaderLogo, getShowHeader, getShowSearch } =
  useHeaderSetting()

const { getShowLocalePicker } = useLocale()

const { getIsMobile } = useAppInject()

const getHeaderClass = computed(() => {
  const theme = unref(getHeaderTheme)
  return [
    prefixCls,
    {
      [`${prefixCls}--fixed`]: props.fixed,
      [`${prefixCls}--mobile`]: unref(getIsMobile),
      [`${prefixCls}--${theme}`]: theme
    }
  ]
})

const getShowSetting = computed(() => {
  if (!unref(getShowSettingButton)) {
    return false
  }
  const settingButtonPosition = unref(getSettingButtonPosition)

  if (settingButtonPosition === SettingButtonPositionEnum.AUTO) {
    return unref(getShowHeader)
  }
  return settingButtonPosition === SettingButtonPositionEnum.HEADER
})

const getLogoWidth = computed(() => {
  if (!unref(getIsMixMode) || unref(getIsMobile)) {
    return {}
  }
  const width = unref(getMenuWidth) < 180 ? 180 : unref(getMenuWidth)
  return { width: `${width}px` }
})

const getSplitType = computed(() => {
  return unref(getSplit) ? MenuSplitTyeEnum.TOP : MenuSplitTyeEnum.NONE
})

const getMenuMode = computed(() => {
  return unref(getSplit) ? MenuModeEnum.HORIZONTAL : null
})
</script>
<style lang="less">
@import './index.less';
</style>
<style lang="less" scoped>
// ::v-deep.ant-select {
//   border-radius: 2rem;
//   border: 1px solid pink;
// }

::v-deep.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  position: static;
  // width: 168px;
  // height: 44px;
  background: rgb(37 99 235);
  color: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // padding: 12px 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0 6px;
}
</style>
