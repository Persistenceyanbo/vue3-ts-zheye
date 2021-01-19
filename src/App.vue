<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColumnList, { ColumnProps } from './components/ColumnList.vue';
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue';
const currentUser: UserProps = {
  isLogin: true,
  name: 'yanbo'
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1',
    description: '这是test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: ''
  },
  {
    id: 2,
    title: 'test2',
    description: '这是test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: ''
  },
  {
    id: 1,
    title: 'test1',
    description: '这是test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: require('./assets/logo.png')
  },
  {
    id: 2,
    title: 'test2',
    description: '这是test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: require('./assets/logo.png')
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup() {
    return {
      list: testData,
      currentUser
    }
  }
})
</script>