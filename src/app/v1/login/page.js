"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import stylesl from "@/app/styles/login.module.css";

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Jika sudah login, redirect ke dashboard
  useEffect(() => {
    if (status === "loading") return;
    if (session) {
      router.push("/admin/dash");
    }
  }, [session, status, router]);

  return (
    <>
      {/* Konten halaman login */}
      <nav className={stylesl["first-nav"]}>
        <div className={stylesl["bahasa-faq"]}>
          <p>IND <span></span></p>
          <Link href="">FAQ</Link>
        </div>
        <div className={stylesl["contact1"]}>
          <Link href="">Contact Us</Link>
        </div>
      </nav>

      <section className={stylesl["container"]}>
        <nav className={stylesl["second-nav"]}>
          <div className={stylesl["navbar"]}>
            <div className={stylesl["logo"]}>
              <Link href="/">
                <Image src="/img/medigrid.jpg" alt="Logo" width={140} height={100} />
              </Link>
            </div>
            <div className={stylesl["navigation"]}>
              <Link href="/" className={stylesl["hove"]}>Tentang Kami</Link>
              <Link href="/fitur" className={stylesl["hove"]}>Fitur & Layanan</Link>
              <Link href="/harga" className={stylesl["hove"]}>Harga</Link>
              <Link href="/blog" className={stylesl["hove"]}>Blog</Link>
            </div>
          </div>
        </nav>
      </section>

      <section className={stylesl["main"]}>
        <div className={stylesl["box"]}>
          <div className={stylesl["login-box"]}>
            <div className={stylesl["header"]}>
              <Image src="/img/medigrid.jpg" alt="logo" width={140} height={100} />
              <h1>Login Admin</h1>
            </div>

            <div className={stylesl["google-btn"]}>
              <button onClick={() => signIn("google", { callbackUrl: "/admin/dash" })}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48">
                  <path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"/>
                  <path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"/>
                  <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"/>
                  <path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"/>
                </svg>
                <span>Login dengan Google</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;