//slice

export { appSlice } from './slice/appSlice'

export { forgotSlice } from './slice/forgotSlice'
export { registrationSlice } from './slice/registrationSlice'

//thunk

export { sendLetterOnEmail } from './thunk/forgotThunk'
export { RegistrationThunk } from './thunk/registrationThunk'
export { fetchProfilePage } from './thunk/profileThunk'

//selector

export {
  selectorsIsInitialized,
  selectorIsLoading,
  selectorError,
  selectorEmail,
  selectorIsPasswordSend,
  selectorIsAuth,
  selectorUserName,
  selectorUserEmail,
  selectorUserId,
} from './selectors/selectors'

//other

export type { AppDispatchType, RootStoreType } from './store'

//action

export { setInitialized, isSpinAppLoading, removeErrorMessage } from './slice/appSlice'

export { removeEmail, sendLetter, isPasswordSend } from './slice/forgotSlice'
