import React from "react";
import { useState, useEffect } from "react";

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
} as const;

export type DeviceType = "mobile" | "tablet" | "desktop";
export type OrientationType = "portrait" | "landscape";

export interface ViewportSize {
  width: number;
  height: number;
}

export interface DeviceInfo {
  type: DeviceType;
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  orientation: OrientationType;
  isPortrait: boolean;
  isLandscape: boolean;
  aspectRatio: number;
}

export interface ScreenInfo {
  screenCount: number;
  screenWidth: number;
  screenHeight: number;
  pixelRatio: number;
}

const useViewport = (): ViewportSize => {
  const [viewport, setViewport] = useState<ViewportSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debouncedResize);
    window.addEventListener("orientationchange", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("orientationchange", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return viewport;
};

const useScreen = (): ScreenInfo => {
  const [screenInfo, setScreenInfo] = useState<ScreenInfo>({
    screenCount: 1,
    screenWidth: 1920,
    screenHeight: 1080,
    pixelRatio: 1,
  });

  useEffect(() => {
    const updateScreenInfo = () => {
      const screen = window.screen;

      setScreenInfo({
        screenCount: 1,
        screenWidth: screen.width,
        screenHeight: screen.height,
        pixelRatio: window.devicePixelRatio || 1,
      });
    };

    updateScreenInfo();
    window.addEventListener("resize", updateScreenInfo);
    window.addEventListener("orientationchange", updateScreenInfo);

    return () => {
      window.removeEventListener("resize", updateScreenInfo);
      window.removeEventListener("orientationchange", updateScreenInfo);
    };
  }, []);

  return screenInfo;
};

const useDevice = (): DeviceInfo => {
  const { width, height } = useViewport();

  const getDeviceType = (w: number): DeviceType => {
    if (w < BREAKPOINTS.mobile) return "mobile";
    if (w < BREAKPOINTS.tablet) return "tablet";
    return "desktop";
  };

  const type = getDeviceType(width);
  const orientation: OrientationType =
    width > height ? "landscape" : "portrait";
  const aspectRatio = width / height;

  return {
    type,
    width,
    height,
    isMobile: type === "mobile",
    isTablet: type === "tablet",
    isDesktop: type === "desktop",
    orientation,
    isPortrait: orientation === "portrait",
    isLandscape: orientation === "landscape",
    aspectRatio,
  };
};

const useOrientation = () => {
  const { width, height } = useViewport();
  const [orientation, setOrientation] = useState<OrientationType>(
    width > height ? "landscape" : "portrait"
  );

  useEffect(() => {
    const handleOrientationChange = () => {
      setTimeout(() => {
        const newOrientation =
          window.innerWidth > window.innerHeight ? "landscape" : "portrait";
        setOrientation(newOrientation);
      }, 100);
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  return {
    orientation,
    isPortrait: orientation === "portrait",
    isLandscape: orientation === "landscape",
    angle: 0,
  };
};

const useDisplayInfo = () => {
  const device = useDevice();
  const screen = useScreen();
  const orientation = useOrientation();

  const isVerticalDisplay =
    device.height > device.width && device.aspectRatio < 0.75;

  return {
    ...device,
    ...screen,
    ...orientation,
    isVerticalDisplay,
    adaptiveBreakpoints: {
      mobile: isVerticalDisplay ? BREAKPOINTS.mobile * 0.8 : BREAKPOINTS.mobile,
      tablet: isVerticalDisplay ? BREAKPOINTS.tablet * 0.8 : BREAKPOINTS.tablet,
    },
  };
};

const useResponsiveStyles = () => {
  const displayInfo = useDisplayInfo();

  const getResponsiveValue = <T>(
    values: {
      mobile?: T;
      tablet?: T;
      desktop?: T;
      portrait?: T;
      landscape?: T;
      verticalDisplay?: T;
    },
    defaultValue: T
  ): T => {
    if (displayInfo.isVerticalDisplay && values.verticalDisplay !== undefined) {
      return values.verticalDisplay;
    }

    if (displayInfo.isPortrait && values.portrait !== undefined) {
      return values.portrait;
    }
    if (displayInfo.isLandscape && values.landscape !== undefined) {
      return values.landscape;
    }

    if (displayInfo.isMobile && values.mobile !== undefined) {
      return values.mobile;
    }
    if (displayInfo.isTablet && values.tablet !== undefined) {
      return values.tablet;
    }
    if (displayInfo.isDesktop && values.desktop !== undefined) {
      return values.desktop;
    }

    return defaultValue;
  };

  return { getResponsiveValue };
};
export { useResponsiveStyles };
