const authReducer = (state = false, action) => {
  switch (action.type) {
    case 'login':
      return {
        state: !state,
      }
    default:
      return state
  }
}

export default authReducer
