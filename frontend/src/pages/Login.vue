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
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login PyCDG</v-toolbar-title>
              </v-toolbar>
              <v-form @submit.prevent="doLogin">
                <v-card-text>
                  <v-text-field
                    id="username"
                    label="Username"
                    name="Username"
                    :rules="usernameRules()"
                    prepend-icon="person"
                    type="text"
                  />
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    :rules="passwordRules()"
                    prepend-icon="lock"
                    type="password"
                  />
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="primary"
                    type="submit"
                  >
                    Login
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    doLogin: function (evt) {
      // This comment was added to ignore lint errors
      /* eslint-disable no-unused-vars */
      let username = evt.target.elements.username.value
      let password = evt.target.elements.password.value
      /* eslint-enable no-unused-vars */

      // TODO: Call backend to validate username and password
      this.$router.push('/app')
    },
    usernameRules: () => [ v => !!v || 'Username is required' ],
    passwordRules: () => [ v => !!v || 'Password is required' ]
  }
}
</script>