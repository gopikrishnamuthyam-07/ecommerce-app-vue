import * as msal from "msal";

interface AuthConfig {
  auth: {
    clientId: string;
    authority: string;
    redirectUri: string;
  };
  cache: {
    cacheLocation: string;
    storeAuthStateInCookie: boolean;
  };
}

const msalConfig: AuthConfig = {
  auth: {
    clientId: "33f66e46-2133-4a80-ba64-f79be589bc93",
    authority:
      "https://login.microsoftonline.com/8f6bd982-92c3-4de0-985d-0e287c55e379",
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
};

export const graphScopes = {
  scopes: ["openid", "profile", "email", "User.Read"],
};

export const myMSALObj = new msal.UserAgentApplication(msalConfig);
