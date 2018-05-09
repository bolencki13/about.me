import WWW from '../../../services/networkService'

export const kIdentifiers = {
  PROJECTS_GET_START: 'PROJECTS_GET_START',
  PROJECTS_GET_END: 'PROJECTS_GET_END',
  PROJECTS_FAILED: 'PROJECTS_FAILED'
}

export function github () {
  return (dispatch) => {
    return Promise.resolve()
      .then(() => dispatch({type: kIdentifiers.PROJECTS_GET_START}))
      .then(() => WWW.request('GET', `https://api.github.com/users/${'bolencki13'}/repos`))
      .then((json) => {
        dispatch({type: kIdentifiers.PROJECTS_GET_END, payload: json})
      })
      .catch((error) => dispatch({type: kIdentifiers.PROJECTS_FAILED, payload: error}))
  }
}
