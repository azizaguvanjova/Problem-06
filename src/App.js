// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin
export default function ButtonVariants() {
  return (
    <span className='wrapper flex gap-2'>
    <button className='button-create bg-green-500 text-white py-2 px-4 rounded'>Create</button>
    <button className='button-update bg-blue-500 text-white py-2 px-4 rounded'>Update</button>
    <button className='button-delete bg-red-500 text-white py-2 px-4 rounded'>Delete</button>
  </span>



  )
}
{/* <span style={{ display: 'flex', gap: '10px' }}>
      <button style={{
        backgroundColor: 'green',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Create
      </button>
      <button style={{
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Update
      </button>
      <button style={{
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Delete
      </button>
    </span> */}