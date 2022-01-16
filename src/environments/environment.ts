// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: "Your Api Key",
		authDomain: "your.fireside.firebaseapp.com",
		databaseURL: "https://your.fireside.firebaseio.com",
		projectId: "your.fireside",
		storageBucket: "your.fireside.appspot.com",
		messagingSenderId: "messagingSenderId"
	}
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
