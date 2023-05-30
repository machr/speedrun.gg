export default function Home({params}: {
    params: { id: string }
}) {
  return (
    <main>
        <h1>this is the map page</h1>
        <p>{params.id}</p>
    </main>
  )
}
