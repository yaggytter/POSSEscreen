import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import dayjs from "dayjs";

admin.initializeApp(functions.config().firebase);
const fireStore = admin.firestore();

export const slackToScreen = functions.https.onRequest((request, response) => {
  if (request) {
    if (request.body && request.body.event && request.body.event.text) {
      const testroom = fireStore.collection("testroom");
      testroom.add({
        datetime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        userName: `from slack ${request.body.event.user}`,
        message: request.body.event.text,
        //        slackEvent: request.body,
      });
    }

    response.status(200).send(request.body);
  } else {
    console.log("Request Error...");
    throw response.status(500);
  }
});
