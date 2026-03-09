import './App.css'

function App() {
  return (
    <>
      <BookList />
    </>
  )
}

function BookList() {
  return (
    <>
      <h1>My Book List</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} number={index} />
          )
        })}
      </section>
    </>
  )
}

function Book (props) {
  const { title, author, image, number } = props

  return (
    <article className='book'>
      <p>#{number + 1}</p>
      <h2>{title}</h2>
      <p>{author}</p>
      <img src={image} alt="Book Cover" />
    </article>
  )
}

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
    id: 1
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 4
  },
  {
    author: 'Brené Brown',
    title: 'Dare to Lead',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91V8m704Z-L._AC_UL900_SR900,600_.jpg',
    id: 3
  }
];

export default App