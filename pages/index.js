import Head from "next/head";

import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="google-site-verification" content="fVNoX8sfL1rYmN-fi5bVmmYK6m55gtMcMP5L-eUC9Lk" />
        <title>Ada Apa Dengan</title>
        <meta
          name="description"
          content="video wallpaper lagi viral, ada apa dengan, aplikasi media"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Info seputar yang viral</h1>

        <p className={styles.description}>jangan sampai terlewatkan</p>

        <div className={styles.grid}>
          <Link href="https://www.youtube.com/watch?v=WPdWvnAAurg&ab_channel=SMTOWN">
            <a className={styles.card}>
              <h2>Trending No 1 di youtube</h2>
              <p>
               Music video Album pertama Aespa &ldquo;savage&ldquo;. dengar dan pastikan download yang ori.  <span>klik di sini</span>
              </p>
            </a>
          </Link>

          <Link href="https://shp.ee/cbrg6f3">
            <a className={styles.card}>
              <h2>HP 2 jutaan rekomendasi main ML</h2>
              <p>
                Mau push rank tapi cuma ada uang 2jt rupiah ?. Hp Samsung M20 sudah cukup main ML grafik kompetitif. Yang penting bisa main bareng kan ?. Langsung beli sekarang. <span>klik di sini</span>
              </p>
            </a>
          </Link>

          <Link href="https://f-droid.org/packages/com.termux/">
            <a className={styles.card}>
              <h2>Download Termux Terbaru</h2>
              <p>
               Termux adalah apk tools yang sangat powerful. bisa buat blog. bisa install linux. buat user yang jago, mampu untuk hack juga. <span>klik di sini</span>
              </p>
            </a>
          </Link>

          <Link href="https://play.google.com/store/apps/details?id=com.video.downloader.snapx">
            <a className={styles.card}>
              <h2>SnapX, sosmed video downloader</h2>
              <p>
                SnapX akan membantu Anda mengunduh video TikTok, Instagram, dan
                platform sosmed lainnya hanya dengan satu klik. sangat cepat dan
                mudah. <span>klik di sini</span>
              </p>
            </a>
          </Link>

          <Link href="https://shp.ee/a7sstsj">
            <a className={styles.card}>
              <h2>Rekomendasi Mouse Murah</h2>
              <p>
                Pake mouse gak perlu bingung batre. Sangat membantu saat WFH. bisa untuk android, windows, chromeOS. harga murah bergaransi resmi. <span>klik di sini</span>
              </p>
            </a>
          </Link>

          <Link href="https://shp.ee/myniwy3">
            <a className={styles.card}>
              <h2>Rekomendasi webcam daring dibawah 500rb</h2>
              <p>
                Webcam 1080p hanya 260rb rupiah saja. Cocok untuk fasilitas belajar. Jangan sampai bolos sekolah daring. Segera miliki sekarang. <span>klik di sini</span>
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="https://the4thbullet.blogspot.com/">
        <a>
        Adam Mantite&#44; 2021
        </a>
        </Link>
      </footer>
    </div>
  );
}
