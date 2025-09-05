import { createClient, SupabaseClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { RoutesHandler } from "src/navigation/RootNaviagation";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FirebaseOptions } from "firebase/app";
// Kiểm tra biến môi trường trước khi khởi tạo
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnon = process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY;

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

let analytics: any = null;
console.log('hi')
const App: React.FC = () => {
  const [firebaseVal, useFirebaseVal] = useState<FirebaseApp>(
    firebaseConfig as FirebaseApp
  );
  const [supaBaseVal, useSupaBaseVal] = useState<SupabaseClient>();
  useEffect(() => {
    getSupabase();
    getFirebase();
    console.log("Supabase:", supaBaseVal);
    console.log("Firebase:", firebaseVal);
    console.log("Analytics:", analytics);
  }, []);
  const getSupabase = () => {
    if (supabaseUrl && supabaseAnon) {
      const Supabase = createClient(supabaseUrl, supabaseAnon) as any;
      useSupaBaseVal(Supabase);
      console.log("Supabase:", useSupaBaseVal);
    }
  };
  const getFirebase = () => {
    if (firebaseConfig.apiKey && firebaseConfig.projectId) {
      try {
        const app = initializeApp(firebaseConfig);
        useFirebaseVal(app);
        if (typeof window !== "undefined" && firebaseConfig.measurementId) {
          analytics = getAnalytics(useFirebaseVal as any);
          console.log("Analytics:", analytics);
        }
      } catch (error) {
        console.error("Firebase initialization failed:", error);
      }
    }
  };

  return <RoutesHandler />;
};

export default App;
