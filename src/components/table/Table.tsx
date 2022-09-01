import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { selectorPacksData } from 'store'
import { SortParamElementType, SortParamType } from 'types'
import { formattedDate } from 'utils'

import style from './Table.module.sass'
import { TableHeader } from './tableHeader/TableHeader'
import { TableRow } from './tableRow/TableRow'

export type TableHeadElementType = {
  title: string
  sortParam: SortParamType
  stateSortElement: SortParamElementType
}

export type TabletHeadType = {
  headData: TableHeadElementType[]
}

export const Table = ({ headData }: TabletHeadType) => {
  const packData = useSelector(selectorPacksData)
  console.log('headData', headData)
  const mappedPacks = packData.map(({ user_id, _id, user_name, updated, cardsCount, name }) => (
    <TableRow
      key={_id}
      name={name}
      cardsCount={cardsCount}
      updated={formattedDate(updated)}
      user_id={user_id}
      user_name={user_name}
    />
  ))

  return (
    <div className={style.tableWrapper}>
      <TableHeader headData={headData} />
      {mappedPacks}
    </div>
  )
}
