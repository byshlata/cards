import { AxiosResponse } from 'axios'
import { PathAPI } from 'enums'
import { PackParamsType, PackResponseType, PacksType } from 'types'

import { API_CONFIG } from './config'

export const packAPI = {
  getPackData: async ({
    packName,
    min,
    max,
    sortPacks,
    page,
    pageCount,
    user_id,
  }: PackParamsType) => {
    const response = await API_CONFIG.get<
      any,
      AxiosResponse<PacksType, PackResponseType>,
      PackParamsType
    >(`${PathAPI.Cards}${PathAPI.Pack}`, {
      params: {
        packName: packName,
        min,
        max,
        sortPacks,
        page,
        pageCount,
        user_id,
      },
    })
    return response.data
  },
}
