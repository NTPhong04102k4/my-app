import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { RoutesHandler } from "src/navigation/RootNaviagation";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Kiểm tra biến môi trường trước khi khởi tạo
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnon = process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY;

// Chỉ khởi tạo Supabase nếu có đủ thông tin
const supabase =
  supabaseUrl && supabaseAnon ? createClient(supabaseUrl, supabaseAnon) : null;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Chỉ khởi tạo Firebase nếu có đủ thông tin
let app: any = null;
let analytics: any = null;

const App: React.FC = () => {
  const [firebaseVal, useFirebaseVal] = useState(null);
  const [supaBaseVal, useSupaBaseVal] = useState(null);
  useEffect(() => {
    getSupabase();
    getFirebase();
    console.log("Supabase:", supaBaseVal);
    console.log("Firebase:", firebaseVal);
    console.log("Analytics:", analytics);
  }, []);
  const getSupabase = () => {
    if (supabaseUrl && supabaseAnon) {
      useSupaBaseVal(createClient(supabaseUrl, supabaseAnon) as any);
      console.log("Supabase:", useSupaBaseVal);
    }
  };
  const getFirebase = () => {
    if (firebaseConfig.apiKey && firebaseConfig.projectId) {
      try {
        useFirebaseVal(initializeApp(firebaseConfig) as any);
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
