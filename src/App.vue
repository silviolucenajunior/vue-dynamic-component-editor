<template>
  <v-app>     
    <v-app-bar dense app color="blue">
      <v-toolbar-title >
        Form Builder
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed @click.stop="availableComponentsDialog=true">
      <v-icon left>
          mdi-plus
        </v-icon>
        Add Component
      </v-btn>

    </v-app-bar>
    <v-main>
      <div class="d-flex justify-center">
         <component-editor :components="components"></component-editor>
      </div>
    </v-main>

    <!-- Modal Dialogs -->
    <!-- Component Select Modal -->
    <v-dialog 
      v-model="availableComponentsDialog" 
      transition="dialog-bottom-transition" 
      max-width="600"
    >
      <v-card>
        <v-card-title>
          Available Components
        </v-card-title>
        <v-card-text>
            <available-component-list @componentInserted="openComponentProperties"></available-component-list>
        </v-card-text>
        </v-card>
    </v-dialog>

    <!-- Component Properties Modal -->
    <v-dialog 
      transition="dialog-bottom-transition" 
      max-width="600" 
      v-model="componentPropertiesEditorDialog"
    >
      <component-properties-editor
        v-if="activeComponent"
        @updateComponentProperties="updateComponentInEditor" 
        v-model="activeComponent" 
        :component="activeComponent"
      ></component-properties-editor>
    </v-dialog>
    <v-footer>
      Plano.D
    </v-footer>
  </v-app>
</template>

<script>
import AvailableComponentList from './modules/editor/components/AvailableComponentList.vue'
import ComponentPropertiesEditor from './modules/editor/components/ComponentPropertiesEditor.vue';
import ComponentEditor from './modules/editor/components/ComponentEditor.vue';
import ComponentFactory from './modules/builder/ComponentFactory';

export default {
  name: 'App',
  components: {
    AvailableComponentList,
    ComponentPropertiesEditor,
    ComponentEditor
  },

  data(){
    return {
      availableComponentsDialog: false,
      componentPropertiesEditorDialog: false,
      activeComponent: null,
      components: []
    }
  },
  methods: {
    openComponentProperties(component) {
      this.availableComponentsDialog = false;
      this.activeComponent = component;
      this.componentPropertiesEditorDialog = true;
    },
    
    updateComponentInEditor(){
      let newComponent = ComponentFactory.getComponent(this.activeComponent);
      this.componentPropertiesEditorDialog = false;
      this.components.push(newComponent);
      this.activeComponent = null;
    }

  }
  
};
</script>
