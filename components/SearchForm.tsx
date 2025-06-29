import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import Link from 'next/link'
import { Search } from 'lucide-react'
const SearchForm = ({ query }) => {
    
  return (
    <Form action="/" scroll={false} className='search-form'>
        <input name="query" defaultValue={query} className='search-input' placeholder='Search Blogs' />
        <div className='flex gap-2'>
            {query && (<SearchFormReset/>)}
                <Link type="submit" href="/" className='search-btn text-white'>
                    <Search className='size-5'></Search>
                </Link>
        </div>
    </Form>
  )
}

export default SearchForm