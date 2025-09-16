<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
import {inject, computed} from 'vue'
const apps = inject('apps', {})
const reactUrl = computed(()=> apps['react-demo']?.url ?? '')
</script>

<template>
  <WelcomeItem>
    <WujieVue width="100%" height="100%" name="react-demo" :url="reactUrl" ></WujieVue>
  </WelcomeItem>
    
</template>
