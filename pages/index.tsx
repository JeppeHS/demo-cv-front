import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import dynamic from 'next/dynamic';
import { Box, Container, Paper } from "@mui/material";
import PersonList from "@/components/PersonList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Curriculum Vitae</title>
        <meta name="description" content="Curriculum Vitae" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <Box>
            <Container maxWidth="lg">
              <PersonList />
            </Container>
          </Box>
        </main>
      </div>
    </>
  );
}
