import { FooterComponent } from "src/component/footer";
import { HeaderComponent } from "src/component/header";
import { BodyDiscovery } from "./BodyComponent";
import { useResponsiveStyles } from "src/utils/getDevices";

export default function Home() {
  const { getResponsiveValue } = useResponsiveStyles();
  const isMobile = getResponsiveValue({ mobile: true }, false);
  const isTablet = getResponsiveValue({ tablet: true }, false);
  const isDesktop = getResponsiveValue({ desktop: true }, false);
  const isPortrait = getResponsiveValue({ portrait: true }, false);
  const isLandscape = getResponsiveValue({ landscape: true }, false);
  const isVerticalDisplay = getResponsiveValue(
    { verticalDisplay: true },
    false
  );

  console.log(
    "::::::::::::::",
    isMobile,
    isTablet,
    isDesktop,
    isPortrait,
    isLandscape,
    isVerticalDisplay
  );
  return (
    <div className="flex-1 min-h-screen flex-col bg-[#181818] pl-[30px] pr-[30px] justify-center ">
      <HeaderComponent />
      <BodyDiscovery />
      <FooterComponent />
    </div>
  );
}
