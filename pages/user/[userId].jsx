import Nav from '../../components/nav'
import { useRouter } from 'next/router'

export default function IndexPage () {
  const router = useRouter()

  const { userId } = router.query
  return (
    <div>
      <Nav />
      <div className="hero">
        <h1 className="title">{userId}</h1>
      </div>
    </div>
  )
}
