import React from 'react'

function Item({item}) {
  return (
    <div>{item?.Name} {item?.id}
    </div>
  )
}

export default Item