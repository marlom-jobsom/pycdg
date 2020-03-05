<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <div>
            <v-img
              :src="require('@/assets/img/image_404.png')"
              max-width="300px"
            />
            <h1>404 Page not found!</h1>
          </div>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>