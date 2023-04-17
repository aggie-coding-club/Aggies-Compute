
import { useState, useRef } from "react"
import { Wrapper, DataResult } from "./SearchBar.styles"
import { NavLink } from 'react-router-dom';

export type DataType = {
  topic: string
  link: string
}

const SearchBar: React.FC<{ data: DataType[] }> = ({
  data,
}): JSX.Element => {
  const [filteredData, setFilteredData] = useState<DataType[]>([])
  const [wordEntered, setWordEntered] = useState<string>("")

  const inputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null)
  window.addEventListener("load", () => inputRef.current?.focus())

  const handleFilter = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const searchWord: string = target.value.toLowerCase()
    setWordEntered(searchWord)

    const newFilter: DataType[] = data.filter(({ topic }): boolean =>
      topic.toLowerCase().includes(searchWord)
    )

    if (!searchWord) return setFilteredData([])
    setFilteredData(newFilter)
  }

  const clearInput = (): void => {
    setFilteredData([])
    setWordEntered("")
    inputRef.current?.focus()
  }

  return (
    <Wrapper>
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search Aggies Compute..."
          value={wordEntered}
          onChange={handleFilter}
          ref={inputRef}
        />
      </div>
      {filteredData.length !== 0 && (
        <DataResult>
          {filteredData.map(({ topic, link }, key) => (
            <NavLink
              to={link}
            >
            {topic}
          </NavLink>
          ))}
        </DataResult>
      )}
    </Wrapper>
  )
}

export { SearchBar }
