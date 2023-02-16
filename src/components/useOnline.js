import React, { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, updateIsOnline] = useState(true);
  useEffect(() => {
    const handleOnline = () => {
      updateIsOnline(true);
    };
    const handleOffline = () => {
      updateIsOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};

export default useOnline;
