import React, { useEffect, useState } from 'react'
import Search from './Search'

const Inputssss = () => {
      const [search, setSearch] = useState("");


  return (
    <div>
         <Search
      value={search}
      onChange={setSearch}
    />
    </div>
  )
}

export default Inputssss