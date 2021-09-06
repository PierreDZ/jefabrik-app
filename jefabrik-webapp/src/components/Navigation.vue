<template>
    <div id="nav">
      <router-link id="dashboard" to="/Dashboard">
        <IconifyIcon id="icon" :icon="icons.bxHomeAlt" />
      </router-link>
      <router-link id="dashboard" to="/Tracking">
        <IconifyIcon id="icon" :icon="icons.monitoringIcon" />
      </router-link>
      <router-link id="dashboard" to="/Integration">
        <IconifyIcon id="icon" :icon="icons.clipboardIcon" />
      </router-link>
      <router-link id="dashboard" to="/Personalization">
        <IconifyIcon id="icon" :icon="icons.paintDropHalfFilled" />
      </router-link>
    </div>
</template>

<script>
import IconifyIcon from '@iconify/vue';
import bxHomeAlt from '@iconify/icons-bx/bx-home-alt'
import monitoringIcon from '@iconify/icons-eos-icons/monitoring';
import clipboardIcon from '@iconify/icons-bi/clipboard';
import paintDropHalfFilled from '@iconify/icons-line-md/paint-drop-half-filled';

export default {
  name: 'Navigation',
  components: {
    IconifyIcon
  },
  data () {
    return {
      icons: {
        bxHomeAlt,
        monitoringIcon,
        clipboardIcon,
        paintDropHalfFilled
      }
    }
  }
}
</script>

<style lang="scss">
#nav {
  display: flex;
  flex-direction: column;
  height: 377px;
  grid-column: 1/2;

  #dashboard {
    height: 100%;
  }

  a {
    font-size: 48px;
    color: #767676;
    transition: all 0.3s ease-in-out;

    &.router-link-exact-active {
      color: #26ce83;
    }

    &:hover {
      color: #26ce83;
    }
  }
}
</style>>