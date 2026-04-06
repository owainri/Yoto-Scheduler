export default {
  expo: {
    name: "Yoto Scheduler",
    slug: "yoto-scheduler",
    owner: "owainri",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    scheme: "com.owainri.yotoscheduler",
    platforms: ["ios", "android"],
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.owainri.yotoscheduler",
      runtimeVersion: "1.0.0",
      infoPlist: {
        CFBundleURLTypes: [
          {
            CFBundleURLName: "com.owainri.yotoscheduler",
            CFBundleURLSchemes: ["com.owainri.yotoscheduler"]
          }
        ],
        UIBackgroundModes: ["background-fetch", "background-processing"]
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      edgeToEdgeEnabled: true,
      package: "com.owainri.yotoscheduler",
      versionCode: 1,
      compileSdkVersion: 34,
      targetSdkVersion: 34,
      permissions: [
        "android.permission.WAKE_LOCK",
        "android.permission.RECEIVE_BOOT_COMPLETED",
        "android.permission.VIBRATE",
        "android.permission.INTERNET",
        "android.permission.ACCESS_NETWORK_STATE"
      ],
      runtimeVersion: {
        policy: "appVersion"
      },
      intentFilters: [
        {
          action: "VIEW",
          autoVerify: true,
          data: [{ scheme: "com.owainri.yotoscheduler" }],
          category: ["BROWSABLE", "DEFAULT"]
        }
      ]
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    plugins: [
      "expo-web-browser",
      "expo-secure-store",
      [
        "expo-notifications",
        {
          icon: "./assets/icon.png",
          color: "#ffffff",
          sounds: []
        }
      ],
      "expo-task-manager",
      "expo-background-fetch"
    ],
    experiments: {
      typedRoutes: false
    },
    extra: {
      router: {
        origin: false
      },
      eas: { projectId: "f1902e85-8c57-4391-bc84-aedd3c139fab" },
      yotoClientId: process.env.YOTO_CLIENT_ID || "NJ4lW4Y3FrBcpR4R6YlkKs30gTxPjvC4",
      yotoRedirectUri: process.env.YOTO_REDIRECT_URI || "https://owainri.github.io/yoto-callback/",
      logLevel: process.env.LOG_LEVEL || "debug"
    }
  }
};
