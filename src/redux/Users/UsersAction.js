import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_FROM_KAKAO, LINK_FROM_KAKAOID_TO_CARTUSER } from './UsersType';
import { API_URL } from '../../config';

export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = (users) => ({ type: FETCH_USERS_SUCCESS, payload: users });
export const fetchUsersFailure = (error) => ({ type: FETCH_USERS_FAILURE, payload: error });
export const fetchUsersFromKaKao = (email, nickName, profileImg) => ({ type: FETCH_USERS_FROM_KAKAO, payload: { email, nickName, profileImg } });
export const linkUser = (email) => ({ type: LINK_FROM_KAKAOID_TO_CARTUSER, payload: { email } });

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    window.Kakao.Auth.login({
      success: (res) => {
        console.log('kakao_token: ', res);
        fetch(`${API_URL}user/login`, {
          method: 'POST',
          headers: {
            Authorization: res.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log('back_token: ', res);
            const { email, nickname, profile_image } = res;
            localStorage.setItem('access_token', res.access_token);
            dispatch(fetchUsersFromKaKao(email, nickname, profile_image));
            alert('로그인에 성공하였습니다.');
          })
          .catch((err) => {
            const errMsg = err.message;
            dispatch(fetchUsersFailure(errMsg));
            alert('로그인에 실패하였습니다.');
          });
      },
    });
  };
};

export const reFetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    fetch(`${API_URL}user/login`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const { email, nickname, profile_image } = res;
        dispatch(fetchUsersFromKaKao(email, nickname, profile_image));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchUsersFailure(errMsg));
      });
  };
};

export const linkFromKakaoIdToCartUser = (cartId) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    fetch(`${API_URL}user/connect-gameuser`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        nickname: cartId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.Message);
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchUsersFailure(errMsg));
      });
  };
};
