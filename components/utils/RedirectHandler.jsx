'use client'

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const redirects = {
   "/find": "/solutions/novacount",
  "/novaassist": "/solutions/novaassist",
  "/speedboard": "/solutions/speedboard",
  "/novastart": "/solutions/novastart",
  "/novadoc": "/solutions/novadoc",
  "/novaengage": "/solutions/novaengage",
  "/trainplus": "/solutions/trainplus",
  "/novaverify": "/solutions/novaverify",
  "/casestudies": "/case-studies",
  "/scheduledemo": "/schedule-demo",
 
};

export default function RedirectHandler() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const target = redirects[pathname];
    if (target) {
      if (target.startsWith("http")) {
        window.location.href = target; 
      } else {
        router.replace(target); 
      }
    }
  }, [pathname, router]);

  return null; 
}
