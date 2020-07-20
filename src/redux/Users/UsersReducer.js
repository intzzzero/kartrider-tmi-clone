import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_FROM_KAKAO, LINK_FROM_KAKAOID_TO_CARTUSER } from './UsersType';

const initialState = {
  loading: false,
  usersData: [],
  cartId: '',
  email: '',
  nickName: '',
  profileImg: '',
  isLoggedIn: false,
  isModalActive: false,
  error: '',
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        usersData: action.payload,
        error: '',
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        usersData: [],
        error: action.payload,
      };

    case FETCH_USERS_FROM_KAKAO:
      return {
        ...state,
        usersData: action.payload,
        loading: false,
        isLoggedIn: true,
        isModalActive: false,
        email: action.payload.email,
        nickName: action.payload.nickName,
        profileImg: action.payload.profileImg,
        error: '',
      };

    case LINK_FROM_KAKAOID_TO_CARTUSER:
      return {
        ...state,
        usersData: action.payload,
        email: action.payload.email,
        error: '',
      };

    default:
      return state;
  }
};

export default usersReducer;
