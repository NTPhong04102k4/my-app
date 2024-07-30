import plugin from "tailwindcss/plugin";
import { PluginAPI } from "tailwindcss/types/config";

interface GradientColors {
  [key: string]: string[];
}

const textGradientPlugin = plugin(({ addUtilities, e, theme }: PluginAPI) => {
  const gradients: GradientColors = theme("textGradients", {});

  const newUtilities = Object.entries(gradients).reduce(
    (acc, [key, colors]) => {
      const [color1, color2] = colors;
      const gradient = `linear-gradient(to right, ${color1} 0%, ${color1} 5%, ${color2} 95%, ${color2} 100%)`;

      acc[`.text-gradient-${e(key)}`] = {
        background: gradient,
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
        display: "inline-block",
      };

      return acc;
    },
    {} as { [key: string]: { [key: string]: string } },
  );

  addUtilities(newUtilities);
});

export default textGradientPlugin;
