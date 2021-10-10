import Head from "next/head";

import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <meta name="google-site-verification" content="fVNoX8sfL1rYmN-fi5bVmmYK6m55gtMcMP5L-eUC9Lk" />
        <title>Jalan Pintas</title>
        <meta
          name="description"
          content="artikel tentang rekomendasi gadget, review ringan, tutorial internet windows"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Halaman ini membantu link legit</h1>

        <p className={styles.description}>jangan sampai terlewatkan</p>
        <div className={styles.grid}>
        <Link href="https://shp.ee/cbrg6f3">
            <a className={styles.card}>
              <h2>HP 2 jutaan rekomendasi main ML</h2>
              <p>
                Mau push rank tapi cuma ada uang 2jt rupiah ?. Hp Samsung M20 sudah cukup main ML grafik kompetitif. Yang penting bisa main bareng kan ?. Langsung beli sekarang. <span className={styles.span}>klik di sini</span>
              </p>
            </a>
          </Link>

            
          <Link href="https://f-droid.org/packages/com.termux/">
            <a className={styles.card}>
              <h2>Download Termux Terbaru</h2>
              <p>
               Termux adalah apk tools yang sangat powerful. bisa buat blog. bisa install linux. buat user yang jago, mampu untuk hack juga. <span className={styles.span}>klik di sini</span>
              </p>
            </a>
          </Link>
          
      
          <Link href="https://casualreview0.blogspot.com/2021/10/kenalan-dengan-chocolatey-package_10.html">
            <a className={styles.card}>
              <h2>Kenal intim dengan Chocolatey, Package Manager untuk Windows</h2>
              <p>
               Install gaya wget linux ala Windows. User Windows harus tau ini.  <span className={styles.span}>klik di sini</span>
              </p>
            </a>
          </Link>

       
          <Link href="https://play.google.com/store/apps/details?id=com.video.downloader.snapx">
            <a className={styles.card}>
              <h2>SnapX, sosmed video downloader</h2>
              <p>
                SnapX akan membantu Anda mengunduh video TikTok, Instagram, dan
                platform sosmed lainnya hanya dengan satu klik. sangat cepat dan
                mudah. <span className={styles.span}>klik di sini</span>
              </p>
            </a>
          </Link>

          <Link href="https://shp.ee/a7sstsj">
            <a className={styles.card}>
              <h2>Rekomendasi Mouse Murah</h2>
              <p>
                Pake mouse gak perlu bingung batre. Sangat membantu saat WFH. bisa untuk android, windows, chromeOS. harga murah bergaransi resmi. <span className={styles.span}>klik di sini</span>
              </p>
            </a>
          </Link>

          <Link href="https://shp.ee/myniwy3">
            <a className={styles.card}>
              <h2>Rekomendasi webcam daring dibawah 500rb</h2>
              <p>
                Webcam 1080p hanya 260rb rupiah saja. Cocok untuk fasilitas belajar. Jangan sampai bolos sekolah daring. Segera miliki sekarang. <span className={styles.span}>klik di sini</span>
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="https://casualreview0.blogspot.com/">
        <a>
        Adam Mantite&#44; 2021
        </a>
        </Link>
      </footer>
    </div>
  );
}
