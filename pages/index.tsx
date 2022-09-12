import styles from '../styles/Home.module.css'
import Link from "next/link";
import aa from "as/img.png"

export default function Home() {
  return (
    <div className={styles.container} style={{background:"lightblue"}}>
        <h1 className={styles.title}>
          Welcome to
          <Link rel="stylesheet" href="/posts/1">
            <a>Next.js!</a>
          </Link>
        </h1>
        <img src={aa} alt=""/>


        <style jsx>{`
        a{
        color:yellow;
        }      
      `}</style>

    </div>
  )
}
