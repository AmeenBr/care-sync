import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

// if (!PROJECT_ID || !API_KEY || !ENDPOINT) {
//   throw new Error("Missing required environment variables");
// }

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject('66acdc2a002e8cb0ac8f')
  .setKey('f0c3dacdfd7116a7e462c0b78de0a435bf8d43267edbbc489dc55805da4d4c427ab81f6fca0a165c7c8306b13117b7cb8fc3033f12e847dddfc6e61b37ab9d4f28889e2c84ba45798f721e3069209503333a13e7ea269700fa9a60218ea30bbe0fe23b87d153dd73b59c9cf464e7199cab7b69333c6d361964c623b313d785cb');

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
