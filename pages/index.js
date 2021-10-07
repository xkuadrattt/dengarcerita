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
          <Link href="https://www.youtube.com/watch?v=SbHJTPppv5Y">
            <a className={styles.card}>
              <h2>Trending di youtube</h2>
              <p>
                Deddy Corbuzier menangis terharu karena mendengar cerita Om
                Indro Warkop&#46; Juga menjelaskan tentang hak paten Warkop
              </p>
            </a>
          </Link>

          <Link href="https://www.youtube.com/results?search_query=boruto+episode+218">
            <a className={styles.card}>
              <h2>Boruto Episode 218</h2>
              <p>
                Kekuatan mata Rinengan Sasuke hilang&#46; Alasan kenapa Kurama
                pada tubuh Naruto meninggal&#46;
              </p>
            </a>
          </Link>

          <Link href="https://id.wikipedia.org/wiki/4_Oktober">
            <a className={styles.card}>
              <h2>Ada apa dengan 4 Oktober</h2>
              <p>
                4 Oktober adalah hari ke-277 &#40;kalau tahun kebisat hari
                ke-278&#41;&#46;&#32;Inilah yang pernah terjadi pada tanggal 4
                Oktober
              </p>
            </a>
          </Link>

          <Link href="https://play.google.com/store/apps/details?id=com.video.downloader.snapx">
            <a className={styles.card}>
              <h2>SnapX, sosmed video downloader</h2>
              <p>
                SnapX akan membantu Anda mengunduh video TikTok, Instagram, dan
                platform sosmed lainnya hanya dengan satu klik. sangat cepat dan
                mudah.
              </p>
            </a>
          </Link>

          <Link href="https://exolyt.com/id/guides/tiktok-money-calculator">
            <a className={styles.card}>
              <h2>Kalkulator Tiktok</h2>
              <p>
                Mau menghasilkan uang dari tiktok, tapi mau tau perkiraan
                dapatnya berapa juga? . Klik di sini
              </p>
            </a>
          </Link>

          <Link href="https://www.youtube.com/results?search_query=cara+daftar+pedulilindungi+">
            <a className={styles.card}>
              <h2>Cara daftar pedulilindungi</h2>
              <p>
                Scan barcode vaksin di peduli lindungi sudah wajib. Ini cara
                daftar di apk pedulilindungi
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
