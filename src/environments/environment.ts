// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firbaseConfig: {
    apiKey: "AIzaSyBCygVsOrn3PR0wCqS-VRqcrotou8sn5iM",
    authDomain: "sr-hangman.firebaseapp.com",
    databaseURL: "https://sr-hangman.firebaseio.com",
    projectId: "sr-hangman",
    storageBucket: "sr-hangman.appspot.com",
    messagingSenderId: "1060308088895"
  }
};
