import path from "path";
import plugin from "tailwindcss/plugin";
import { PluginAPI } from "tailwindcss/types/config";
import fs from "fs";

interface UtilityObject {
  [key: string]: {
    [key: string]: string;
  };
}

const iconMaskPlugin = plugin(({ addUtilities, e }: PluginAPI) => {
  const iconFolder = path.resolve(__dirname, "../icon_m3");
  const iconFiles = fs.readdirSync(iconFolder);

  const newUtilities: UtilityObject = {};
  iconFiles.forEach((file) => {
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const iconName = path.parse(file).name;
      const iconPath = path.join(iconFolder, file);
      newUtilities[`.mask-icon-${e(iconName)}`] = {
        "mask-image": `url('${iconPath}')`,
        "mask-repeat": "no-repeat",
        "mask-size": "contain",
        "mask-position": "center",
        "-webkit-mask-image": `url('${iconPath}')`,
        "-webkit-mask-repeat": "no-repeat",
        "-webkit-mask-size": "contain",
        "-webkit-mask-position": "center",
        "background-color": "currentColor",
      };
    }
  });

  addUtilities(newUtilities);
});

export default iconMaskPlugin;
