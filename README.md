#Firebase Dev Test

This is a developer test that uses Firebase to build a small web application.
- Please place all the cloud functions in /functions
- You can find all the client side code under /public
- The actual tasks to perform can be found within the app on `localhost:8091`
- Please consult snowpack and firebase documentation in order to understand how to work with the various tools
- If any questions, please contact us

## Local development
- In order to run the project install `snowpack` locally/globally and run `snowpack dev`

## Firebase
- Run the firebase emulator with the following command: `firebase emulators:start --import ./development`
- This makes a emulator available on `localhost:4000` with a database that already contains
the needed books