import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const GoogleLogin = () => {
  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: "828594560846-grkod3jls5dk67ccosvdtq8839kta7cp.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      google.accounts.id.renderButton(
        document.getElementById("googleSignInDiv"), // this div will hold the button
        {
          theme: "outline",
          size: "large",
          text: "signin_with",
        }
      );
    }
  }, []);

  const handleCredentialResponse = (response) => {
    const userObject = jwtDecode(response.credential);
    console.log("User Info:", userObject);
    localStorage.setItem("token", response.credential);
  };

  return <div id="googleSignInDiv"></div>;
};

export default GoogleLogin;
