/**
 * Cliente Firebase – inicialización, auth anónimo y exports de Firestore.
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getAuth,
  signInAnonymously,
  signInWithCustomToken,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import {
  getFirestore,
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

import { firebaseConfig as localConfig } from "./firebase.config.js";

let app, db, auth, userId;
let _isReady = false;

export async function initFirebase() {
  try {
    const config =
      typeof __firebase_config !== "undefined"
        ? JSON.parse(__firebase_config)
        : localConfig;

    const initialAuthToken =
      typeof __initial_auth_token !== "undefined"
        ? __initial_auth_token
        : null;

    app = initializeApp(config);
    db = getFirestore(app);
    auth = getAuth(app);

    await new Promise((resolve) => {
      const unsub = onAuthStateChanged(auth, async (user) => {
        if (!user) {
          if (initialAuthToken) await signInWithCustomToken(auth, initialAuthToken);
          else await signInAnonymously(auth);
        }
        userId = auth.currentUser?.uid;
        _isReady = true;
        unsub();
        resolve();
      });
    });

    console.log("Firebase Connected. User:", userId);
  } catch (e) {
    console.error("Error Firebase:", e);
  }
}

export function getDb() {
  return db;
}

export function getUserId() {
  return userId;
}

export function isReady() {
  return _isReady;
}

export function getAppId() {
  return typeof __app_id !== "undefined" ? __app_id : "default-app-id";
}

// Re-exportamos utilidades de Firestore para que las features las importen desde aquí
export { addDoc, collection };
