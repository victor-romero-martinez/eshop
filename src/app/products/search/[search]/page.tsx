
export default function Page({ params }: {
  params: { search: string }
}) {
  const { search } = params

  return (
    <div>
      <h1>{search}</h1>
    </div>
  )
};