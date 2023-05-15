<template>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <div class="logo" />
        <a-menu
          v-model:selectedKeys="selectedKeys1"
          theme="white"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            <router-link to="/login">Login</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout>
        <a-layout-sider
          collapsed-width="0"
          breakpoint="lg"
          width="200"
          style="background: #fff"
        >
          <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            :style="{ height: '100%', borderRight: 0 }"
          >
            <a-sub-menu v-for="menu of sidemenu" :key="menu.label">
              <template #title>
                <span>
                  <component :is="menu.icon"></component>
                  {{ menu.label }}
                </span>
              </template>
              <a-menu-item v-for="submenu of menu.items" :key="submenu.to">
                <router-link :to="submenu.to">
                  {{ submenu.label }}
                </router-link>
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <a-layout-content
            :style="{
              background: '#fff',
              padding: '24px',
              marginTop: '10px',
              minHeight: '85vh',
            }"
          >
            Content
            <p class="text-red-400">Hello text</p>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </template>
  <script setup>
  import {
    UserOutlined,
    LaptopOutlined,
    MessageOutlined,
    NotificationOutlined,
  } from "@ant-design/icons-vue";
  import { reactive, ref, watch } from "vue";
  import { useRoute } from "vue-router";
  const route = useRoute();
  
  const selectedKeys1 = ref(["2"]);
  const selectedKeys2 = ref(["/"]);
  const collapsed = ref(false);
  const openKeys = ref(["/profile"]);
  
  watch(route, () => {
    selectedKeys2.value = [route.path];
  });
  
  const sidemenu = reactive([
    {
      label: "Home",
      icon: UserOutlined,
      items: [
        { label: "Profile", to: "/profile" },
        { label: "Friends", to: "/friends" },
      ],
    },
    {
      label: "Message",
      icon: MessageOutlined,
      items: [{ label: "Inbox", to: "/inbox" }],
    },
  ]);
  </script>
  <style>
  #components-layout-demo-top-side-2 .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgb(255, 255, 255);
  }
  
  .ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }
  
  .site-layout-background {
    background: #fff;
  }
  </style>
  