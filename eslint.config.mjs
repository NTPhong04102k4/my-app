import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: pluginReact
    },
    rules: {
      "no-unused-vars": "off", // Tắt quy tắc no-unused-vars của ESLint cơ bản
      "@typescript-eslint/no-unused-vars": ["error", {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true
      }], // Bật quy tắc no-unused-vars của TypeScript ESLint
    },
  },
  pluginJs.configs.recommended, // Cấu hình khuyến nghị cho JS
  tseslint.configs.recommended, // Cấu hình khuyến nghị cho TypeScript
  pluginReact.configs.recommended, // Cấu hình khuyến nghị cho React
];