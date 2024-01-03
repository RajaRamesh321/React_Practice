function Item({isPacked ,name}){
  if(isPacked){
    return <li className="item">{name} ✔</li>
  }
  else{
  return <li className="item">{name}</li>

  }
}

export default function PackingList(){


return (
  <> 
  <Item 
        isPacked={true}
        name='Space suit' />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
  </>
)
}