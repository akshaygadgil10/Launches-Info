import { launchActions } from './launch-slice';
import instance from "../common/instance";

export const fetchLaunchData = () => {
  return async (dispatch) => {
    
    const fetchData = async () => {
      const response = await instance
      .get("/launches")
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

