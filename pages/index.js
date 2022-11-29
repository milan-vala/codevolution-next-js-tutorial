import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h2>Next App tutoria</h2>

      <Link href="/posts">
        Posts
      </Link>
    </div>
  )
}
