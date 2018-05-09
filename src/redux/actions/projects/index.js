export const kIdentifiers = {
  PROJECTS_GET_START: 'PROJECTS_GET_START',
  PROJECTS_GET_END: 'PROJECTS_GET_END',
  PROJECTS_FAILED: 'PROJECTS_FAILED'
}

export function all () {
  return (dispatch) => {
    return Promise.resolve()
      .then(() => dispatch({type: kIdentifiers.PROJECTS_GET_START}))
      .then(() => {
        dispatch({type: kIdentifiers.PROJECTS_GET_END, payload: []})
      })
      .catch((error) => dispatch({type: kIdentifiers.PROJECTS_FAILED, payload: error}))
  }
}
