import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./Constant";

function* getProducts() {
  // let apiData = "https://jsonplaceholder.typicode.com/todos/1";
  //   let newData
  //   let data = yield fetch(apiData)
  //     .then((v) => v.json())
  //     .then((res) => {
  //      newData=res;
  //       console.log("apidata", res);
  //     });
  let apiData="https://jsonplaceholder.typicode.com/users"
  let data = yield fetch(apiData);
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data: data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}
export default productSaga;
