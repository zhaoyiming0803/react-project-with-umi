
import styles from './index.css'
import router from 'umi/router'

function toUserPage () {
  router.push('/users')
}

export default function () {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <div onClick={() => toUserPage()}>去个人中心</div>
    </div>
  );
}
