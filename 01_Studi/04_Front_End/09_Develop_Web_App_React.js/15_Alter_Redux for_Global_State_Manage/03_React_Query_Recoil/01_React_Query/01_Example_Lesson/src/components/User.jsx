import { useQuery, useMutation } from '@tanstack/react-query'

export default function User () {
  const { isLoading, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/users/1').then(res =>
        res.json()
      )
  })

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mutation = useMutation(newName =>
    fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newName
      })
    }).then(res => res.json())
  )

  const handleNameChange = () => {
    const newName = prompt('Entrer un nouveau nom')
    if (newName) {
      mutation.mutate(newName)
    }
  }

  if (isLoading) return 'Chargement...'
  if (error) return 'Une erreur est survenue' + error.message
  if (mutation.isLoading) return 'Mutation Chargement...'
  if (mutation.error)
    return 'Une erreur de mutation est survenue' + mutation.error.message
  if (mutation.isSuccess) {
    data.name = mutation.data.name
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '2px solid black'
        }}
      >
        <h1>Utilisateur {data.id}</h1>
        <span>Name : {data.name}</span>
        <span>Mail : {data.email}</span>
        <span>Tel : {data.phone}</span>
      </div>
      <button onClick={handleNameChange}>Changer le nom</button>
    </>
  )
}
