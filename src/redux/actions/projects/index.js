import WWW from '../../../services/networkService'
import env from '../../../env'
import LocalHistory from '../../../local_histroy.json'

const kWork = LocalHistory.work
const kSchool = LocalHistory.school

export const kIdentifiers = {
  PROJECTS_GITHUB_START: 'PROJECTS_GITHUB_START',
  PROJECTS_GITHUB_END: 'PROJECTS_GITHUB_END',
  PROJECTS_WORK_START: 'PROJECTS_WORK_START',
  PROJECTS_WORK_END: 'PROJECTS_WORK_END',
  PROJECTS_SCHOOL_START: 'PROJECTS_SCHOOL_START',
  PROJECTS_SCHOOL_END: 'PROJECTS_SCHOOL_END',
  PROJECTS_FAILED: 'PROJECTS_FAILED'
}

export function github () {
  return (dispatch) => {
    return Promise.resolve()
      .then(() => dispatch({type: kIdentifiers.PROJECTS_GITHUB_START}))
      .then(() => WWW.request('GET', `https://api.github.com/users/${env.GITHUB_USER}/repos`))
      .then((json) => {
        dispatch({type: kIdentifiers.PROJECTS_GITHUB_END, payload: json})
      })
      .catch((error) => dispatch({type: kIdentifiers.PROJECTS_FAILED, payload: error}))
  }
}

export function work () {
  return (dispatch) => {
    return Promise.resolve()
      .then(() => dispatch({type: kIdentifiers.PROJECTS_WORK_START}))
      .then(() => {
        dispatch({type: kIdentifiers.PROJECTS_WORK_END, payload: kWork})
      })
      .catch((error) => dispatch({type: kIdentifiers.PROJECTS_FAILED, payload: error}))
  }
}

export function school () {
  return (dispatch) => {
    return Promise.resolve()
      .then(() => dispatch({type: kIdentifiers.PROJECTS_SCHOOL_START}))
      .then(() => {
        dispatch({type: kIdentifiers.PROJECTS_SCHOOL_END, payload: kSchool})
      })
      .catch((error) => dispatch({type: kIdentifiers.PROJECTS_FAILED, payload: error}))
  }
}
