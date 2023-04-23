import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import '../styles/Params.scss'
import { deleteSearchValue, setSearchValue,setСategoriesValue } from '../redux/params/paramsSlice';
const Params = () => {


  const categories = ['Все', 'Открытый мир', 'Экшен', 'Шутер', 'Глубокий сюжет', 'РПГ', 'Гонки']

  const search = useSelector((state) => state.params.searchValue)
  const dispatch = useDispatch()
  const onClickCategory = e => dispatch(setСategoriesValue(e.target.innerText));
  return (
    <div className='ParamsContainer'>
        <div className='categories'>
          <span>Метки:</span>
            {
              categories.map(el => (
                <div onClick={(e)=>onClickCategory (e)} key={el}>{el}</div>
              ))
            }
        </div>
        <div className='search'>
        <div className="search_box">
		  <input value={search} onChange={(e)=>dispatch(setSearchValue(e.target.value))} type="text" className="input_search" placeholder="Поиск..." />
      <div onClick={()=>dispatch(deleteSearchValue())} className="close_btn"><AiOutlineCloseCircle size={30} /></div>
	    </div>
        </div>
    </div>
  )
}

export default Params