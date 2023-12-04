import Name from './Name'

export default function User () {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '2px solid black'
        }}
      >
        <h1>Utilisateur</h1>
        <Name />
      </div>
    </>
  )
}
