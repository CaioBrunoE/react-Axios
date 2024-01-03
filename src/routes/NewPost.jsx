import "./NewPost.css"

const NewPost = () => {
  return (

    <div className="new-post">
      <h2>Inserir novo post</h2>
      <form >
        <div className="form-control">
          <label htmlFor="title">Titulo:</label>
          <input type="text" name="title" id="title" placeholder="Digite o rirulo" />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteudo:</label>
          <textarea type="text" name="body" id="body" placeholder="Digite o conteudo" />
        </div>
        <input type="submit" value="Criar post" className="btn" />
      </form>
    </div>
  )
}

export default NewPost