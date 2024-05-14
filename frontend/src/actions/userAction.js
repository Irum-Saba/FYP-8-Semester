import * as UserApi from "../api/UserRequest"


export const updateUser = (id, formData) =>async(dispatch)=>{
    dispatch({type: "UPDATING_START"})
    try {
        const {data} = await UserApi.updateUser(id, formData);
        dispatch({type: "UPDATING_SUCCESS", data:data})
    } catch (error) {
        dispatch({type: "UPDATING_FAIL"})
    }
}

export const deleteUser = (id) => async (dispatch) => {
    dispatch({ type: "DELETE_START" });
    try {
      const currentUserId = await UserApi.deleteUser(id);
      dispatch({ type: "DELETE_SUCCESS", data: currentUserId });
    } catch (error) {
      dispatch({ type: "DELETE_FAIL" });
      console.log("delete dispatch fail");
    }
  };

export const followUser = (id, data) => async(dispatch) =>{
    dispatch({type:"FOLLOW_USER"})
    UserApi.followUser(id, data)
}

export const unFollowUser = (id, data) => async(dispatch) =>{
    dispatch({type:"UNFOLLOW_USER"})
    UserApi.unFollowUser(id, data)
}