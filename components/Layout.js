import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title ? title + ' - ClarinetoJayCee' : 'ClarinetoJayCee'}
        </title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 shadow-md justify-between">
            <Link href="/" className="text-lg font-bold">
              ClarinetoJayCee
            </Link>
            <div>
              <Link href="/login">
                <span className="p-2">Login</span>
              </Link>
              <Link href="/register">
                <span className="p-2">Register</span>
              </Link>
              <Link href="/about">
                <span className="p-2">About</span>
              </Link>
              <Link href="/cart">
                <span className="p-2">Cart</span>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          <p>Copyright &copy; 2023 ClarinetoJaycee</p>
        </footer>
      </div>
    </>
  );
}
