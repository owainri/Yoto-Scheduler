export default {
  expo: {
    name: "Yoto Scheduler",
    slug: "yoto-scheduler",
    owner: "owainri",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    platforms: ["ios", "android"],
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.owainri.yotoscheduler",
      runtimeVersion: "1.0.0"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.owainri.yotoscheduler",
      runtimeVersion: {
        policy: "appVersion"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    plugins: [
      "expo-web-browser",
      [
        "expo-notifications",
        {
          icon: "./assets/icon.png",
          color: "#ffffff",
          sounds: []
        }
      ]
    ],
    experiments: {
      typedRoutes: false
    },
    extra: {
      eas: {
        
      },
      yotoClientId: process.env.YOTO_CLIENT_ID || "NJ4lW4Y3FrBcpR4R6YlkKs30gTxPjvC4",
      yotoRedirectUri: process.env.YOTO_REDIRECT_URI || "https://owainri.github.io/yoto-callback/",
      logLevel: process.env.LOG_LEVEL || "debug"
    }
  }
};