<template>
  <v-app>       
    <v-main class="d-flex flex-column">
      <div class="d-flex flex-row justify-space-around">
         <h1>Component Builder</h1>
         <v-btn @click="loadComponents()">Load Components</v-btn>
      </div>
      <div class="d-flex flex-row justify-space-between">
        <div>
          <available-component-list :available-components="availableComponents"></available-component-list>
        </div>
        <div>
          <component-editor></component-editor>
        </div>
        <div>
          <component-properties-editor></component-properties-editor>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import ComponentService from './modules/editor/services/ComponentService';
import AvailableComponentList from './modules/editor/components/AvailableComponentList'
import ComponentPropertiesEditor from './modules/editor/components/ComponentPropertiesEditor.vue';
import ComponentEditor from './modules/editor/components/ComponentEditor.vue';
export default {
  name: 'App',
  components: {
    AvailableComponentList,
    ComponentPropertiesEditor,
    ComponentEditor
  },

  data: () => ({
    availableComponents: []
  }),

  methods: {
    loadComponents() {
      let componentsAvailable = ComponentService.getAvailableComponentList()
      this.availableComponents = componentsAvailable.components;
      console.log(componentsAvailable);
    }
  }
};
</script>
