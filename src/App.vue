<template>
  <v-app>     
    <v-app-bar dense app color="blue">
      <v-toolbar-title >
        Dynamic Form Render
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <form-render></form-render>
    </v-main>
    <v-footer>
      Plano.D
    </v-footer>
  </v-app>
</template>

<script>
import FormRender from './modules/renders/FormRender';

export default {
  name: 'App',
  components: {
    FormRender
  }
};
</script>
