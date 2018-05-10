import { kIdentifiers } from '../../actions/projects/'

export const kDefaultState = {
  github: [],
  work: [],
  fetching: false,
  error: null
}

export default (state = kDefaultState, action) => {
  if (!action || (action && !action.type)) return state

  switch (action.type) {
    case kIdentifiers.PROJECTS_GITHUB_START: {
      return {
        ...state,
        fetching: true,
        error: null
      }
    }
    case kIdentifiers.PROJECTS_GITHUB_END: {
      return {
        ...state,
        github: action.payload || [],
        fetching: false,
        error: null
      }
    }
    case kIdentifiers.PROJECTS_WORK_START: {
      return {
        ...state,
        fetching: true,
        error: null
      }
    }
    case kIdentifiers.PROJECTS_WORK_END: {
      return {
        ...state,
        work: action.payload || [],
        fetching: false,
        error: null
      }
    }
    case kIdentifiers.PROJECTS_FAILED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}
