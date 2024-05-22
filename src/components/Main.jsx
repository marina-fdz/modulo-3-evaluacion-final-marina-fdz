
import CharacterList from "./CharacterList"
import Filters from "./Filters"



function Main({data}) {
    

  return (
    <main>
        <Filters />
        <CharacterList data={data}/>
    </main>
  )
}

export default Main