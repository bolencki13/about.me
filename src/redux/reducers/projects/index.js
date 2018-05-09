import { kIdentifiers } from '../../actions/projects/'

export const kDefaultState = {
  github: [],
  fetching: false,
  error: null
}

export default (state = kDefaultState, action) => {
  if (!action || (action && !action.type)) return state

  switch (action.type) {
    case kIdentifiers.PROJECTS_GET_START: {
      return {
        ...state,
        fetching: true,
        error: null
      }
    }
    case kIdentifiers.PROJECTS_GET_END: {
      return {
        ...state,
        projects: action.payload || [],
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
