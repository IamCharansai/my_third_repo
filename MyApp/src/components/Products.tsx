import React from 'react'

export default function Products() {
const data=[100, 200, 300, 400, 500];

//() => (

  return ( <div>

{
    data.map((x)=> (<li>{x}</li>))


}

    </div>
  )
}