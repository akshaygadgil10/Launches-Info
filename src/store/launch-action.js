import { launchActions } from './launch-slice';
import instance from "../common/instance";
import axios from 'axios'
export const fetchLaunchData = () => {
  console.log("fetchLaunchData"); 
  return async (dispatch) => {
    
    const fetchData = async () => {
      console.log("fetchData"); 
      const response = await instance
      .get("/launches",)
      .then(({data}) => data);
      console.log('response',response);  
      return response;
    };

    const launchDataList = await fetchData();
    dispatch(
      launchActions.launchListValues({
          items: launchDataList || [],
        })
      );
  };
};

