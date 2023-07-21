import styles from "./styles.module.scss"
import { FC } from "react"
import { Link } from "react-router-dom"

const AboutPage: FC = () => {
  return (
    <div>
      <div className={styles.text}>AboutPage</div>
      <div>
        <div>
          <Link to={"/about"}>ABOUT</Link>
          <Link to={"/"}>Main</Link>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
