<template>
  <v-app>     
    <v-app-bar dense app color="blue">
      <v-toolbar-title >
        Form Builder
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row justify="space-around">
      <v-btn depressed @click.stop="availableComponentsDialog=true">
        <v-icon left>
          mdi-plus
        </v-icon>
        Add Component
      </v-btn>
      <v-btn depressed @click="saveForm">
        <v-icon left>
          mdi-content-save
        </v-icon>
        Save Form
      </v-btn>
      <v-btn depressed @click="loadForm">
        <v-icon left>
          mdi-reload
        </v-icon>
        Load Form
      </v-btn>
      <v-btn depressed @click="clearForm">
        <v-icon left>
          mdi-close
        </v-icon>
        Clear Form
      </v-btn>
      </v-row>
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
import ComponentRepository from './modules/builder/ComponentRepository';

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
      components: [],
      form: []
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

      console.log(this.components);
      console.log(this.form)
    },

    clearForm(){
      this.components = [];
      this.form = [];
      this.activeComponent = null;
    },

    saveForm() {
      this.form = this.components.slice(0);
      ComponentRepository.saveForm(this.form.splice(0))
    },

    loadForm() {
      this.components = ComponentRepository.loadForm();
      this.form = this.components.slice(0)
    }

  }
  
};
</script>
