import { createClient } from "@supabase/supabase-js";
import React from "react";
import { RoutesHandler } from "src/navigation/RootNaviagation";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL!;
const supabaseAnon = process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnon);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY!,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.REACT_APP_FIREBASE_APP_ID!,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID!,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const App: React.FC = () => {
  console.log(supabase);
  console.log(analytics);
  return <RoutesHandler />;
};

export default App;
